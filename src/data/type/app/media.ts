export interface Media {
    id: string;
    type: string;
    changed: number;
    name: string;
    url: string;
    alt: string | null;
    title: string | null;
    mime: string | null;
    size: number;
}
