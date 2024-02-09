import type { Topic } from '@/data/type/app/topic';
import type { Ref } from 'vue';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { sortByWeight } from '@/connection/helper/dataMap';
import { useBranches, useBranchesLive } from '@/store/branchStore';
import { getTopicsByBranchLive, useTopicsByBranch } from '@/store/topicStore';

export const useBranchState = defineStore('branch', () => {
    const { data: branches, getData: getBranches } = useBranches();
    const topics: Ref<(void | Topic[])[]> = ref([]);

    async function getTopics(): Promise<void> {
        await getBranches();

        if (!branches.value) {
            return;
        }

        branches.value = sortByWeight(branches.value);

        const promises = branches.value.map((branch) => {
            return useTopicsByBranch({
                params: {
                    branchId: branch.id,
                },
            }).getData();
        });

        const responses = await Promise.all(promises);

        responses.forEach((response) => {
            if (!response) {
                return;
            }

            topics.value = [...topics.value, sortByWeight(response)];
        });
    }

    async function getLiveTopicsAndBranches(): Promise<void> {
        const { data: branches, getData } = useBranchesLive();

        await getData();

        if (!branches.value) {
            return;
        }

        const promises = branches.value.map((branch) => {
            return getTopicsByBranchLive({
                params: {
                    branchId: branch.id,
                },
            }).getData();
        });

        await Promise.all(promises);
    }

    return {
        branches,
        topics,
        getTopics,
        getLiveTopicsAndBranches,
    };
});
