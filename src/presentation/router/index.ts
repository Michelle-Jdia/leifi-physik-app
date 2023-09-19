import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from '@ionic/vue-router';
import VTab from '@/layout/tab/VTab.vue';
import VHomeIndexPage from '@/page/home/VHomeIndexPage.vue';
import VBranchIndexPage from '@/page/branch/VBranchIndexPage.vue';
import VBranchPage from '@/page/branch/VBranchPage.vue';
import VTopicPage from '@/page/branch/VTopicPage.vue';
import VTaskPage from '@/page/branch/VTaskPage.vue';
import VIssuePage from '@/page/branch/VIssuePage.vue';
import VCollectionIndexPage from '@/page/collection/VCollectionIndexPage.vue';
import VCollectionPage from '@/page/collection/VCollectionPage.vue';
import VFavoritePage from '@/page/favorite/VFavoritePage.vue';
import VLoginPage from '@/page/login/VLoginPage.vue';
import VSettingsIndexPage from '@/page/settings/VSettingsIndexPage.vue';
import VDataUsagePage from '@/page/settings/VDataUsagePage.vue';
import VLocalStoragePage from '@/page/settings/VLocalStoragePage.vue';
import VDataProtectionPage from '@/page/settings/VDataProtectionPage.vue';
import VImprintPage from '@/page/settings/VImprintPage.vue';
import VDevPage from '@/page/dev/VDevPage.vue';
import VExamplePage from '@/page/dev/VExample.vue';
import VDataDumpPage from '@/page/dev/VDataDump.vue';

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
            {
                path: '/home',
                name: 'home-index',
                component: VHomeIndexPage,
            },
            ...createRoutesForPrefix('/branches', [
                {
                    path: '',
                    name: 'branch-index',
                    component: VBranchIndexPage,
                },
                ...createRoutesForPrefix('branch', [
                    {
                        path: ':id',
                        name: 'branch-id',
                        component: VBranchPage,
                        props: true,
                    },
                    ...createRoutesForPrefix('topic', [
                        {
                            path: ':id',
                            name: 'topic-id',
                            component: VTopicPage,
                            props: true,
                        },
                        {
                            path: 'task/:id',
                            name: 'task-id',
                            component: VTaskPage,
                            props: true,
                        },
                        {
                            path: 'issue/:id',
                            name: 'issue-id',
                            component: VIssuePage,
                            props: true,
                        },
                    ]),
                ]),
            ]),
            ...createRoutesForPrefix('/collection', [
                {
                    path: '',
                    name: 'collection-index',
                    component: VCollectionIndexPage,
                },
                {
                    path: ':id',
                    name: 'collection-id',
                    component: VCollectionPage,
                    props: true,
                },
            ]),
            {
                path: '/favorite',
                name: 'favorite',
                component: VFavoritePage,
            },
            {
                path: '/login',
                name: 'login',
                component: VLoginPage,
            },
            ...createRoutesForPrefix('/settings', [
                {
                    path: '',
                    name: 'settings-index',
                    component: VSettingsIndexPage,
                },
                {
                    path: 'data-usage',
                    name: 'data-usage',
                    component: VDataUsagePage,
                },
                {
                    path: 'local-storage',
                    name: 'local-storage',
                    component: VLocalStoragePage,
                },
                {
                    path: 'data-protection',
                    name: 'data-protection',
                    component: VDataProtectionPage,
                },
                {
                    path: 'imprint',
                    name: 'imprint',
                    component: VImprintPage,
                },
            ]),
            ...createRoutesForPrefix('/dev', [
                {
                    path: '',
                    name: 'dev',
                    component: VDevPage,
                },
                {
                    path: 'example',
                    name: 'example',
                    component: VExamplePage,
                },
                {
                    path: 'datadump',
                    name: 'datadump',
                    component: VDataDumpPage,
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
