import type { Ref } from 'vue';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useIssue, useNextIssueId, usePrevIssueId } from '@/store/issueStore';

export const useIssueState = defineStore('issue', () => {
    const prevIssueId: Ref<string | null | void> = ref();
    const nextIssueId: Ref<string | null | void> = ref();

    const { data: issueData, getData: getIssueData } = useIssue({
        params: {
            id: '',
        },
    });

    async function getPrevNextIssueIds(issueId: string) {
        prevIssueId.value = null;
        nextIssueId.value = null;

        await getIssueData({
            params: {
                id: issueId,
            },
        });

        if (!issueData.value) {
            return;
        }

        const issue = issueData.value;

        const { data: prevIssueIdData, getData: getPrevIssueId } = usePrevIssueId({
            params: {
                topicId: issue.referenced_topic,
                categoryId: issue.issue_category.id,
                weight: issue.issue_weight.toString(),
            },
        });

        const { data: nextIssueIdData, getData: getNextIssueId } = useNextIssueId({
            params: {
                topicId: issue.referenced_topic,
                categoryId: issue.issue_category.id,
                weight: issue.issue_weight.toString(),
            },
        });

        await Promise.all([getPrevIssueId(), getNextIssueId()]);

        prevIssueId.value = prevIssueIdData.value;
        nextIssueId.value = nextIssueIdData.value;
    }

    return {
        getPrevNextIssueIds,
        prevIssueId,
        nextIssueId,
    };
});
