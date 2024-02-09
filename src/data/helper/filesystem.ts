import type { MkdirOptions, ReaddirOptions } from '@capacitor/filesystem';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { devLog } from '@/application/helper/log';

export function convertBlobToBase64(blob: Blob): Promise<string | ArrayBuffer | null> {
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
        reader.onerror = (event) => {
            reader.abort();
            const error = event.target?.error;
            reject(new Error(`Error reading blob as base64: ${error}`));
        };

        reader.onload = () => {
            resolve(reader.result);
        };

        reader.readAsDataURL(blob);
    });
}

export function convertBlobToBinary(blob: Blob): Promise<string | ArrayBuffer | null> {
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
        reader.onerror = (event) => {
            reader.abort();
            const error = event.target?.error;
            reject(new Error(`Error reading blob as binary ${error}`));
        };

        reader.onload = () => {
            resolve(reader.result);
        };

        reader.readAsBinaryString(blob);
    });
}

export function getResourceExtention(resource: string): string {
    const resourceExtensionMatches = resource.match(/\.([^/.]+)$/);

    if (!resourceExtensionMatches || !resourceExtensionMatches[1]) {
        return '';
    }

    return resourceExtensionMatches[1]?.toLowerCase();
}

export async function fetchBlobResource(url: string): Promise<Blob> {
    const response = await fetch(url);
    const blob = await response.blob();

    return blob;
}

const base64Extentions = new Set(['svg']);

export async function fetchResourceAndConvertToString(url: string): Promise<string> {
    const fileExtension = getResourceExtention(url);
    const blob = await fetchBlobResource(url);

    if (base64Extentions.has(fileExtension)) {
        const base64String = (await convertBlobToBase64(blob)) as string;

        return base64String;
    }

    const bindaryString = (await convertBlobToBinary(blob)) as string;

    return bindaryString;
}

export function stripDomain(url: string): string {
    return url.replace(/^(?:\/\/|[^/]+)*\//, '');
}

export function getFileNameFromUrl(url: string): string {
    return stripDomain(url).replace(/\//g, '-');
}

export async function createDir(config: ReaddirOptions | MkdirOptions): Promise<void> {
    try {
        await Filesystem.readdir(config);
    } catch (error) {
        return Filesystem.mkdir(config);
    }
}

export async function createAppDirectories(): Promise<void> {
    try {
        await createDir({
            path: 'leifiapp',
            directory: Directory.External,
        });

        await createDir({
            path: 'leifiapp/image',
            directory: Directory.External,
        });

        await createDir({
            path: 'leifiapp/script',
            directory: Directory.External,
        });
    } catch (error) {
        devLog('error in createAppDirectories', {
            error,
        });
    }
}
