import type { Branch } from '@/data/type/app/branch';
import type { Download } from '@/data/type/app/download';
import type { Topic } from '@/data/type/app/topic';
import { createReactiveData } from '@/connection/helper/fetcher';
import { useBranch } from '@/store/branchStore';
import { useDownload } from '@/store/downloadStore';
import { useTopic } from '@/store/topicStore';

export interface DownloadTopicBranch {
    download: Download;
    topic: Topic;
    branch: Branch;
}

export const useDownloadTopicBranch = createReactiveData<string, DownloadTopicBranch | void>(
    async (id: string) => {
        if (!id) {
            return;
        }

        const { data: download, getData: getDownload } = useDownload({
            params: {
                id: id,
            },
        });

        await getDownload();

        if (!download.value) {
            return;
        }

        const { data: topic, getData: getTopic } = useTopic({
            params: {
                id: download.value.referenced_topic,
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
            download: download.value,
            topic: topic.value,
            branch: branch.value,
        };
    },
);
