export interface MediaApi {
    id?: string;
    type?: string;
    meta?: {
        media: {
            changed: string;
            name: string;
            url: string;
            alt: string | null;
            title: string | null;
            mime: string | null;
            size: string;
        };
    };
}
