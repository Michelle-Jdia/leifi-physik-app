import {
    isDownloadStringType,
    isIssueStringType,
    isTaskStringType,
} from '@/data/type/helper/contentType';
import { getContextualRouteNameByType } from '@/connection/helper/navigation';
import router from '@/connection/router';

function clickHandler(this: HTMLAnchorElement, event: MouseEvent) {
    const uuid = this.dataset.uuid;
    const type = this.dataset.type;

    if (
        !uuid ||
        !type ||
        !(isIssueStringType(type) || isDownloadStringType(type) || isTaskStringType(type))
    ) {
        return;
    }

    event.preventDefault();

    router.push({
        name: getContextualRouteNameByType(type),
        params: {
            id: uuid,
        },
    });

    this.removeEventListener('click', clickHandler);
}

export function handleLinksClick(containerElement: HTMLElement | null): void {
    if (!containerElement) {
        return;
    }

    const links = document.getElementsByTagName('a');

    Array.from(links).forEach((link: HTMLAnchorElement) => {
        link.addEventListener('click', clickHandler);
    });
}
