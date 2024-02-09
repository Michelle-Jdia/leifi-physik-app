import type { ComputedRef } from 'vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { $t } from '@/application/translation';
import { RootPath } from '@/connection/router/rootPath';
import { RouteName } from '@/connection/router/routeName';

export interface Tab {
    title: string;
    icon: string;
    activeIcon?: string;
    routeName: RouteName;
    path: string;
}

export const tabs: Tab[] = [
    {
        title: $t.tab.home,
        icon: 'icon/home.svg',
        routeName: RouteName.HOME_INDEX,
        path: RootPath.HOME,
    },
    {
        title: $t.tab.branch,
        icon: 'icon/all-content.svg',
        routeName: RouteName.BRANCH_INDEX,
        path: RootPath.BRANCHES,
    },
    {
        title: $t.tab.collection,
        icon: 'icon/collection.svg',
        routeName: RouteName.COLLECTION_INDEX,
        path: RootPath.COLLECTION,
    },
    {
        title: $t.tab.favorite,
        icon: 'icon/bookmark.svg',
        routeName: RouteName.FAVORITE_INDEX,
        path: RootPath.FAVORITE,
    },
];

export const isTabRoute: ComputedRef<boolean> = computed((): boolean => {
    const route = useRoute();
    const currentRouteInTabs: Tab | undefined = tabs.find((tab) => tab.routeName === route.name);

    return Boolean(currentRouteInTabs);
});
