// this file should never be imported in the router index
import type { ComputedRef } from 'vue';
import { computed } from 'vue';
import { ContentType } from '@/data/type/helper/contentType';
import router from '@/connection/router/index';
import { RootPath } from '@/connection/router/rootPath';
import { RouteName } from '@/connection/router/routeName';

export const currentRoutePath: ComputedRef<string | undefined> = computed(() => {
    return router.currentRoute.value.path.split('/')[1];
});

export function getContextualRouteNameByType(
    type: ContentType.ISSUE | ContentType.TASK | ContentType.DOWNLOAD,
): RouteName {
    switch (type) {
        case ContentType.ISSUE:
            switch (currentRoutePath.value) {
                case RootPath.COLLECTION:
                    return RouteName.COLLECTION_ISSUE_ID;
                case RootPath.FAVORITE:
                    return RouteName.FAVORITE_ISSUE_ID;
                case RootPath.HISTORY:
                    return RouteName.HISTORY_ISSUE_ID;
                case RootPath.SEARCH:
                    return RouteName.SEARCH_ISSUE_ID;
                case RootPath.HOME:
                    return RouteName.HOME_ISSUE_ID;
                default:
                    return RouteName.ISSUE_ID;
            }

        case ContentType.TASK:
            switch (currentRoutePath.value) {
                case RootPath.COLLECTION:
                    return RouteName.COLLECTION_TASK_ID;
                case RootPath.FAVORITE:
                    return RouteName.FAVORITE_TASK_ID;
                case RootPath.HISTORY:
                    return RouteName.HISTORY_TASK_ID;
                case RootPath.SEARCH:
                    return RouteName.SEARCH_TASK_ID;
                case RootPath.HOME:
                    return RouteName.HOME_TASK_ID;
                default:
                    return RouteName.TASK_ID;
            }

        case ContentType.DOWNLOAD:
            switch (currentRoutePath.value) {
                case RootPath.COLLECTION:
                    return RouteName.COLLECTION_DOWNLOAD_ID;
                case RootPath.FAVORITE:
                    return RouteName.FAVORITE_DOWNLOAD_ID;
                case RootPath.HISTORY:
                    return RouteName.HISTORY_DOWNLOAD_ID;
                case RootPath.SEARCH:
                    return RouteName.SEARCH_DOWNLOAD_ID;
                case RootPath.HOME:
                    return RouteName.HOME_DOWNLOAD_ID;
                default:
                    return RouteName.DOWNLOAD_ID;
            }
    }
}
