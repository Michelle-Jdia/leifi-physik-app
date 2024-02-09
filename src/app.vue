<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { createAppDirectories } from '@/data/helper/filesystem';
import { useBranchState } from '@/state/branchState';
import { useMultiSolvedLive } from '@/store/solvedStore';
import { useSubtitlesLive } from '@/store/subtitleStore';

const { getData: getCollectionSeparators } = useSubtitlesLive();
const { getData: getMultiSolved } = useMultiSolvedLive();
const branchState = useBranchState();

createAppDirectories();
branchState.getLiveTopicsAndBranches();
getCollectionSeparators();
getMultiSolved();
</script>

<template>
    <ion-app>
        <ion-router-outlet />
    </ion-app>
</template>
