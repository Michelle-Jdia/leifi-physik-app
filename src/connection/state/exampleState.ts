import type { ComputedRef } from 'vue';
import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';

export const exampleRootState = {
    firstName: '',
    lastName: '',
};

export const useExampleStore = defineStore('example', () => {
    const state = reactive(exampleRootState);

    // use function expression for computed
    const fullName: ComputedRef<string> = computed(() => {
        return `${state.firstName} ${state.lastName}`;
    });

    // use function declaration for other methods
    function updateFirstName(name: string) {
        state.firstName = name;
    }

    function updateLastName(name: string) {
        state.lastName = name;
    }

    return {
        state,
        fullName,
        updateFirstName,
        updateLastName,
    };
});
