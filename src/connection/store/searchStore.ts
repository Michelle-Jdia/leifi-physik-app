import type {
    ReadSearchArticleOutput,
    ReadSearchInput,
    ReadSearchOffsetInput,
    ReadSearchOutput,
} from '@/data/repository/searchRepository';
import type {
    SearchApiGeneric,
    SearchDownloadApi,
    SearchIssueApi,
    SearchLinkApi,
    SearchTaskApi,
    SearchTopicApi,
} from '@/data/type/api/searchApi';
import { warning } from 'ionicons/icons';
import { $t } from '@/application/translation';
import { $readArticleSearch, $readSearch } from '@/data/repository/searchRepository';
import { ContentType } from '@/data/type/helper/contentType';
import { createReactiveData } from '@/connection/helper/fetcher';
import { createToast } from '@/connection/helper/toast';
import router from '@/connection/router';
import { RouteName } from '@/connection/router/routeName';
import { useLogState } from '@/connection/state/logState';
import { collectionFormatRegExp, useCollectionByTitle } from '@/store/collectionStore';

export const useSearch = createReactiveData<
    ReadSearchOffsetInput,
    Partial<ReadSearchOutput> | ReadSearchOutput
>(async (input) => {
    const logStore = useLogState();

    logStore.add(['useSearch']);

    const { data } = await $readSearch(input);

    logStore.remove(['useSearch']);

    return data;
});

export const useArticleSearch = createReactiveData<
    ReadSearchInput,
    ReadSearchArticleOutput | Partial<ReadSearchArticleOutput>
>(async (input) => {
    const logStore = useLogState();

    logStore.add(['useArticleSearch']);

    const { data } = await $readArticleSearch(input);

    logStore.remove(['useArticleSearch']);

    return data;
});

export async function navigateToCollectionOrSearch(input: string): Promise<void> {
    if (collectionFormatRegExp.test(input)) {
        const { data: collection, getData } = useCollectionByTitle({
            params: {
                title: input,
            },
        });

        await getData();

        if (collection.value) {
            router.push({
                name: RouteName.COLLECTION_ID,
                params: {
                    id: collection.value.id,
                },
            });

            return;
        }

        createToast($t.search.collectionNotFoundRedirect(input), {
            duration: 5000,
            color: 'warning',
            icon: warning,
        });
    }

    navigateToSearch(input);
}

export function navigateToSearch(input: string) {
    router.push({
        name: RouteName.SEARCH_INDEX,
        params: {
            q: input,
        },
    });
}

export function isSearchIssueApi(input: SearchApiGeneric): input is SearchIssueApi {
    return input.type === ContentType.ISSUE;
}

export function isSearchTopicApi(input: SearchApiGeneric): input is SearchTopicApi {
    return input.type === ContentType.TOPIC;
}

export function isSearchTaskApi(input: SearchApiGeneric): input is SearchTaskApi {
    return input.type === ContentType.TASK;
}

export function isSearchLinkApi(input: SearchApiGeneric): input is SearchLinkApi {
    return input.type === ContentType.LINK;
}

export function isSearchDownloadApi(input: SearchApiGeneric): input is SearchDownloadApi {
    return input.type === ContentType.DOWNLOAD;
}
