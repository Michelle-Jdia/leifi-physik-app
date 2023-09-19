export interface Link {
    id: string;
    changed: number;
    title: string;
    description: string;
    link_url: {
        uri: string;
        title: string;
    };
    link_type: string;
    referenced_topic: string;
}
