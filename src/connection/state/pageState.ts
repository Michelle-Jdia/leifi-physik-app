import { defineStore } from 'pinia';
import { reactive } from 'vue';

class PageRootState {
    page: HTMLElement | null = null;
    content: HTMLElement | null = null;
    scrollTop = 0;
}

export const pageRootState = new PageRootState();

export const usePageState = defineStore('page', () => {
    const state = reactive<PageRootState>(pageRootState);

    function setPageElement(element: HTMLElement) {
        state.page = element;
    }

    function setContentElement(element: HTMLElement) {
        state.content = element;
    }

    function setScrollTop(value: number) {
        state.scrollTop = value;
    }

    return {
        state,
        setPageElement,
        setContentElement,
        setScrollTop,
    };
});
