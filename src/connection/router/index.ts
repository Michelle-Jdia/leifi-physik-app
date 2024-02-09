import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RootPath } from '@/connection/router/rootPath';
import { RouteName } from '@/connection/router/routeName';
import VBranchIndexPage from '@/page/branch/VBranchIndexPage.vue';
import VBranchPage from '@/page/branch/VBranchPage.vue';
import VDownloadPage from '@/page/branch/VDownloadPage.vue';
import VIssuePage from '@/page/branch/VIssuePage.vue';
import VTaskPage from '@/page/branch/VTaskPage.vue';
import VTopicPage from '@/page/branch/VTopicPage.vue';
import VCollectionIndexPage from '@/page/collection/VCollectionIndexPage.vue';
import VCollectionPage from '@/page/collection/VCollectionPage.vue';
import VDevPage from '@/page/dev/VDevPage.vue';
import VExamplePage from '@/page/dev/VExample.vue';
import VFavoritePage from '@/page/favorite/VFavoritePage.vue';
import VHistoryPage from '@/page/history/VHistoryPage.vue';
import VHomeIndexPage from '@/page/home/VHomeIndexPage.vue';
import VLoginPage from '@/page/login/VLoginPage.vue';
import VSearchPage from '@/page/search/VSearchPage.vue';
import VDataProtectionPage from '@/page/settings/VDataProtectionPage.vue';
import VDataUsagePage from '@/page/settings/VDataUsagePage.vue';
import VImprintPage from '@/page/settings/VImprintPage.vue';
import VLocalStoragePage from '@/page/settings/VLocalStoragePage.vue';
import VSettingsIndexPage from '@/page/settings/VSettingsIndexPage.vue';
import VTab from '@/layout/tab/VTab.vue';

function getFullRootPath(path: RootPath): string {
    return `/${path}`;
}

function createRoutesForPrefix(prefix: string, routes: RouteRecordRaw[]) {
    return routes.map((route) => {
        route.path = `${prefix}/${route.path}`;

        return route;
    });
}

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home',
        // name: 'start',
        // component: () => import('@/page/start/VStartPage.vue'),
    },
    {
        path: '/home',
        component: VTab,
        children: [
            ...createRoutesForPrefix(getFullRootPath(RootPath.HOME), [
                {
                    path: '',
                    name: RouteName.HOME_INDEX,
                    component: VHomeIndexPage,
                },
                {
                    path: 'task/:id',
                    name: RouteName.HOME_TASK_ID,
                    component: VTaskPage,
                    props: true,
                },
                {
                    path: 'issue/:id',
                    name: RouteName.HOME_ISSUE_ID,
                    component: VIssuePage,
                    props: true,
                },
                {
                    path: 'download/:id',
                    name: RouteName.HOME_DOWNLOAD_ID,
                    component: VDownloadPage,
                    props: true,
                },
            ]),
            ...createRoutesForPrefix(getFullRootPath(RootPath.BRANCHES), [
                {
                    path: '',
                    name: RouteName.BRANCH_INDEX,
                    component: VBranchIndexPage,
                },
                ...createRoutesForPrefix('branch', [
                    {
                        path: ':id',
                        name: RouteName.BRANCH_ID,
                        component: VBranchPage,
                        props: true,
                    },
                    ...createRoutesForPrefix('topic', [
                        {
                            path: ':id',
                            name: RouteName.TOPIC_ID,
                            component: VTopicPage,
                            props: true,
                        },
                        {
                            path: 'task/:id',
                            name: RouteName.TASK_ID,
                            component: VTaskPage,
                            props: true,
                        },
                        {
                            path: 'issue/:id',
                            name: RouteName.ISSUE_ID,
                            component: VIssuePage,
                            props: true,
                        },
                        {
                            path: 'download/:id',
                            name: RouteName.DOWNLOAD_ID,
                            component: VDownloadPage,
                            props: true,
                        },
                    ]),
                ]),
            ]),
            ...createRoutesForPrefix(getFullRootPath(RootPath.COLLECTION), [
                {
                    path: '',
                    name: RouteName.COLLECTION_INDEX,
                    component: VCollectionIndexPage,
                },
                {
                    path: ':id',
                    name: RouteName.COLLECTION_ID,
                    component: VCollectionPage,
                    props: true,
                },
                {
                    path: 'task/:id',
                    name: RouteName.COLLECTION_TASK_ID,
                    component: VTaskPage,
                    props: true,
                },
                {
                    path: 'issue/:id',
                    name: RouteName.COLLECTION_ISSUE_ID,
                    component: VIssuePage,
                    props: true,
                },
                {
                    path: 'download/:id',
                    name: RouteName.COLLECTION_DOWNLOAD_ID,
                    component: VDownloadPage,
                    props: true,
                },
            ]),
            ...createRoutesForPrefix(getFullRootPath(RootPath.FAVORITE), [
                {
                    path: '',
                    name: RouteName.FAVORITE_INDEX,
                    component: VFavoritePage,
                },
                {
                    path: 'task/:id',
                    name: RouteName.FAVORITE_TASK_ID,
                    component: VTaskPage,
                    props: true,
                },
                {
                    path: 'issue/:id',
                    name: RouteName.FAVORITE_ISSUE_ID,
                    component: VIssuePage,
                    props: true,
                },
                {
                    path: 'download/:id',
                    name: RouteName.FAVORITE_DOWNLOAD_ID,
                    component: VDownloadPage,
                    props: true,
                },
            ]),
            ...createRoutesForPrefix(getFullRootPath(RootPath.HISTORY), [
                {
                    path: '',
                    name: RouteName.HISTORY_INDEX,
                    component: VHistoryPage,
                },
                {
                    path: 'task/:id',
                    name: RouteName.HISTORY_TASK_ID,
                    component: VTaskPage,
                    props: true,
                },
                {
                    path: 'issue/:id',
                    name: RouteName.HISTORY_ISSUE_ID,
                    component: VIssuePage,
                    props: true,
                },
                {
                    path: 'download/:id',
                    name: RouteName.HISTORY_DOWNLOAD_ID,
                    component: VDownloadPage,
                    props: true,
                },
            ]),
            ...createRoutesForPrefix(getFullRootPath(RootPath.SEARCH), [
                {
                    path: ':q?',
                    name: RouteName.SEARCH_INDEX,
                    component: VSearchPage,
                    props: true,
                },
                {
                    path: 'task/:id',
                    name: RouteName.SEARCH_TASK_ID,
                    component: VTaskPage,
                    props: true,
                },
                {
                    path: 'issue/:id',
                    name: RouteName.SEARCH_ISSUE_ID,
                    component: VIssuePage,
                    props: true,
                },
                {
                    path: 'download/:id',
                    name: RouteName.SEARCH_DOWNLOAD_ID,
                    component: VDownloadPage,
                    props: true,
                },
            ]),
            {
                path: getFullRootPath(RootPath.LOGIN),
                name: RouteName.LOGIN_INDEX,
                component: VLoginPage,
            },
            ...createRoutesForPrefix(getFullRootPath(RootPath.SETTINGS), [
                {
                    path: '',
                    name: RouteName.SETTINGS_INDEX,
                    component: VSettingsIndexPage,
                },
                {
                    path: 'data-usage',
                    name: RouteName.DATA_USAGE,
                    component: VDataUsagePage,
                },
                {
                    path: 'local-storage',
                    name: RouteName.LOCAL_STORAGE,
                    component: VLocalStoragePage,
                },
                {
                    path: 'data-protection',
                    name: RouteName.DATA_PROTECTION,
                    component: VDataProtectionPage,
                },
                {
                    path: 'imprint',
                    name: RouteName.IMPRINT,
                    component: VImprintPage,
                },
            ]),
            ...createRoutesForPrefix(getFullRootPath(RootPath.DEV), [
                {
                    path: '',
                    name: RouteName.DEV,
                    component: VDevPage,
                },
                {
                    path: 'example',
                    name: RouteName.EXAMPLE,
                    component: VExamplePage,
                },
            ]),
        ],
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
