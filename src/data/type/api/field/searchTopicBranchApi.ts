export interface SearchTopicBranchApi {
    type: string;
    id: string;
    meta: {
        field_topic_referenced_branch: {
            name: string;
            field_branch_color: {
                field_class_name: string;
            };
        };
    };
}
