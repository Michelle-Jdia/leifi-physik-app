import type { Branch } from '@/data/type/app/branch';
import type { Issue } from '@/data/type/app/issue';
import type { Topic } from '@/data/type/app/topic';
import { createReactiveData } from '@/connection/helper/fetcher';
import { useBranch } from '@/store/branchStore';
import { useIssue } from '@/store/issueStore';
import { useTopic } from '@/store/topicStore';

export interface IssueTopicBranch {
    issue: Issue;
    topic: Topic;
    branch: Branch;
}

export const useIssueTopicBranch = createReactiveData<string, IssueTopicBranch | void>(
    async (id: string) => {
        const { data: issue, getData: getIssue } = useIssue({
            params: {
                id,
            },
        });

        await getIssue();

        if (!issue.value) {
            return;
        }

        const { data: topic, getData: getTopic } = useTopic({
            params: {
                id: issue.value.referenced_topic,
            },
        });

        await getTopic();

        if (!topic.value) {
            return;
        }

        const { data: branch, getData: getBranch } = useBranch({
            params: {
                id: topic.value.referenced_branch,
            },
        });

        await getBranch();

        if (!branch.value) {
            return;
        }

        return {
            issue: issue.value,
            topic: topic.value,
            branch: branch.value,
        };
    },
);
