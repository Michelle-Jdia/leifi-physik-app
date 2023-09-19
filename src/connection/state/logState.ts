import { defineStore } from 'pinia';
import { reactive } from 'vue';

interface LogRootState {
    logs: string[];
}

export const logRootState = {
    logs: [],
};

export const useLogState = defineStore('log', () => {
    const state = reactive<LogRootState>(logRootState);

    function add(logs: string[]) {
        logs.forEach((log) => {
            state.logs.push(log);
        });
    }

    function remove(logs: string[]) {
        logs.forEach((log) => {
            const index = state.logs.indexOf(log);

            if (index !== -1) {
                state.logs.splice(index, 1);
            }
        });
    }

    return {
        state,
        add,
        remove,
    };
});
