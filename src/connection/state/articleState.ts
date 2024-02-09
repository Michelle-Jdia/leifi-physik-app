import type { Collection } from '@/data/type/app/collection';
import type { Download } from '@/data/type/app/download';
import type { Issue } from '@/data/type/app/issue';
import type { Task } from '@/data/type/app/task';
import type { AllowedTypes } from '@/presentation/type/favorite';
import { defineStore } from 'pinia';
import { ContentType } from '@/data/type/helper/contentType';
import { createToast } from '@/connection/helper/toast';
import {
    addArticleToMultipleCollections,
    createNewCollection,
    useMyCollections,
} from '@/store/collectionStore';
import { useDownload } from '@/store/downloadStore';
import { useIssue } from '@/store/issueStore';
import { useTask } from '@/store/taskStore';

// @TODO refactor these article types and AllowedTypes?
type ArticleType = Issue | Task | Download;

export const useArticleState = defineStore('article', () => {
    const { data: collections, getData: getCollections } = useMyCollections();

    async function loadArticleByType(type: AllowedTypes, id: string): Promise<ArticleType | void> {
        if (type === ContentType.ISSUE) {
            const { data: issue, getData } = useIssue({
                params: {
                    id: id,
                },
            });

            await getData();

            return issue.value;
        }

        if (type === ContentType.TASK) {
            const { data: task, getData } = useTask({
                params: {
                    id: id,
                },
            });

            await getData();

            return task.value;
        }

        if (type === ContentType.DOWNLOAD) {
            const { data: download, getData } = useDownload({
                params: {
                    id: id,
                },
            });

            await getData();

            return download.value;
        }
    }

    async function createAndAddArticleToNewCollection(
        articles: ArticleType | ArticleType[],
        value: string,
    ): Promise<void> {
        const newCollection = await createNewCollection({
            title: value,
        });

        getCollections();

        if (!Array.isArray(articles)) {
            await addArticleToMultipleCollections(articles, [newCollection]);
        }

        if (Array.isArray(articles)) {
            for (const article of articles) {
                // await in loop
                await addArticleToMultipleCollections(article, [newCollection]);
            }
        }

        // createCollectionModal.value.$el.dismiss();

        createToast(
            `Sammlung ${newCollection.private_title} erstellt, die Artikel wurde dieser Sammlung hinzugefügt`,
        );
    }

    async function saveArticlesToCollections(
        articles: ArticleType | ArticleType[],
        collections: Collection[],
    ): Promise<void> {
        if (!Array.isArray(articles)) {
            await addArticleToMultipleCollections(articles, collections);
        }

        if (Array.isArray(articles)) {
            for (const article of articles) {
                // await in loop
                await addArticleToMultipleCollections(article, collections);
            }
        }

        await createToast('Artikel zu Sammlungen hinzugefügt');
    }

    return {
        collections,
        getCollections,
        saveArticlesToCollections,
        createAndAddArticleToNewCollection,
        loadArticleByType,
    };
});
