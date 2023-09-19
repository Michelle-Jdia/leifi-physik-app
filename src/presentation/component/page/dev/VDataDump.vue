<script setup lang="ts">
import VLoader from '@/atom/loader/VLoader/VLoader.vue';
import { useBranch, useBranches } from '@/connection/store/branchStore';
import { getCollection, getCollections } from '@/connection/store/collectionStore';
import { getDownload, getDownloads } from '@/connection/store/downloadStore';
import { useIssue, useIssues } from '@/connection/store/issueStore';
import { getLink, getLinks } from '@/connection/store/linkStore';
import { getStateGrade, getStateGrades } from '@/connection/store/stateGradeStore';
import { useTask, useTasks } from '@/connection/store/taskStore';
import { useTopic, useTopics } from '@/connection/store/topicStore';
import { IonPage, IonContent } from '@ionic/vue';
import VHeader from '@/layout/header/VHeader.vue';

const { data: branch } = useBranch({
    params: {
        id: 'f8db2b5f-a675-49cd-9066-2a5bc0a0768f',
    },
});

const { data: collection } = getCollection({
    params: {
        id: 'e958440a-d9f2-4298-88de-6b537369a943',
    },
});

const { data: download } = getDownload({
    params: {
        id: 'ed408d65-5072-41d3-b90f-5af482fd0ddf',
    },
});

const { data: issue } = useIssue({
    params: {
        id: 'ec5dfd5f-3875-4956-bf5c-1f27d65f1474',
    },
});

const { data: link } = getLink({
    params: {
        id: 'e9d7806d-8895-4996-a438-0bd0b7c117de',
    },
});

const { data: stategrade } = getStateGrade({
    params: {
        id: '1566685c-6953-4299-8c77-bec4749dfdc9',
    },
});

const { data: task } = useTask({
    params: {
        id: 'ebeea060-dcc2-47db-87e1-90af16869e92',
    },
});

const { data: topic } = useTopic({
    params: {
        id: '63b9b91e-d216-4297-bff6-41240ce79db4',
    },
});

const { data: branches, getData: getBranches } = useBranches();
const { data: collections, getData: getCollectionsData } = getCollections();
const { data: downloads, getData: getDownloadsData } = getDownloads();
const { data: issues, getData: getIssues } = useIssues();
const { data: links, getData: getLinksData } = getLinks();
const { data: stategrades, getData: getStateGradesData } = getStateGrades();
const { data: tasks, getData: getTasks } = useTasks();
const { data: topics, getData: getTopicsData } = useTopics();

getBranches();
getCollectionsData();
getDownloadsData();
getIssues();
getLinksData();
getStateGradesData();
getTasks();
getTopicsData();
</script>

<template>
    <ion-page>
        <v-header> Data Dump </v-header>

        <ion-content class="ion-padding">
            <h3>branch</h3>

            <pre>{{ branch }}</pre>

            <h3>collection</h3>

            <pre>{{ collection }}</pre>

            <h3>download</h3>

            <pre>{{ download }}</pre>

            <h3>issue</h3>

            <pre>{{ issue }}</pre>

            <h3>link</h3>

            <pre>{{ link }}</pre>

            <h3>stategrade</h3>

            <pre>{{ stategrade }}</pre>

            <h3>task</h3>

            <pre>{{ task }}</pre>

            <h3>topic</h3>

            <pre>{{ topic }}</pre>

            <h3>brancheS</h3>

            <pre>{{ branches }}</pre>

            <h3>collectionS</h3>

            <pre>{{ collections }}</pre>

            <h3>downloadS</h3>

            <pre>{{ downloads }}</pre>

            <h3>issueS</h3>

            <pre>{{ issues }}</pre>

            <h3>linkS</h3>

            <pre>{{ links }}</pre>

            <h3>stategradeS</h3>

            <pre>{{ stategrades }}</pre>

            <h3>taskS</h3>

            <pre>{{ tasks }}</pre>

            <h3>topicS</h3>

            <pre>{{ topics }}</pre>

            <v-loader
                :logs="[
                    'getBranch',
                    'getBranches',
                    'getCollections',
                    'getDownloads',
                    'useIssues',
                    'getLinks',
                    'getStateGrades',
                    'useTasks',
                    'getTopics',
                ]"
            />
        </ion-content>
    </ion-page>
</template>
