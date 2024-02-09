import type { Branch } from '@/data/type/app/branch';
import type { Task } from '@/data/type/app/task';
import type { Topic } from '@/data/type/app/topic';
import { createReactiveData } from '@/connection/helper/fetcher';
import { useBranch } from '@/store/branchStore';
import { useTask } from '@/store/taskStore';
import { useTopic } from '@/store/topicStore';

export interface TaskTopicBranch {
    task: Task;
    topic: Topic;
    branch: Branch;
}

export const useTaskTopicBranch = createReactiveData<string, TaskTopicBranch | void>(
    async (id: string) => {
        const { data: task, getData: getTask } = useTask({
            params: {
                id,
            },
        });

        await getTask();

        if (!task.value) {
            return;
        }

        const { data: topic, getData: getTopic } = useTopic({
            params: {
                id: task.value.referenced_topic,
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
            task: task.value,
            topic: topic.value,
            branch: branch.value,
        };
    },
);
