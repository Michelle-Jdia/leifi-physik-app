<script setup lang="ts">
import VHeader from '@/layout/header/VHeader.vue';
import VPage from '@/layout/page/VPage.vue';
import VAnchorItem from '@/atom/item/VAnchorItem/VAnchorItem.vue';
</script>

<template>
    <v-page>
        <template #header>
            <v-header>Impressum</v-header>
        </template>

        <section>
            <h2 class="v-h2 v-text-primary">Impressum</h2>

            <p class="v-p v-mt-box v-font-bold">Verantwortlich:</p>

            <p class="v-p v-mt-section">Joachim Herz Stiftung</p>

            <p class="v-p">Langenhorner Chaussee 384</p>

            <p class="v-p">22419 Hamburg</p>

            <p class="v-p">T. +49 40 533295-0</p>

            <v-anchor-item href="mailto:info@joachim-herz-stiftung.de">
                info@joachim-herz-stiftung.de
            </v-anchor-item>

            <v-anchor-item href="https://www.joachim-herz-stiftung.de/">
                www.joachim-herz-stiftung.de
            </v-anchor-item>

            <p class="v-p v-mt-box-xl">
                Die Joachim Herz Stiftung ist eine rechtsfähige Stiftung des bürgerlichen Rechts.
            </p>

            <p class="v-p v-mt-box-xl">
                Vertretungsberechtigte Personen: Prof. Dr.-Ing. Dr. Sabine Kunst
                (Vorstandsvorsitzende), Ulrich Müller (Vorstand).
            </p>

            <p class="v-p">
                Zuständige Aufsichtsbehörde: Justizbehörde der Freien und Hansestadt Hamburg,
                Justizverwaltungsamt – Stiftungsangelegenheiten, Drehbahn 36, 20354 Hamburg
            </p>

            <p class="v-p v-mt-box-xl">
                Verantwortlich für die Inhalte der Internetseite: Prof. Dr.-Ing. Dr. Sabine Kunst
                (Vorstandsvorsitzende) Projektleitung: Dr. Jenny Meßinger-Koppelt Leitung
                Programmbereich Naturwissenschaften: Dr. Jörg Maxton-Küchenmeister
            </p>
        </section>

        <section class="v-mt-box-xl">
            <h2 class="v-h2 v-leading-md v-text-primary">Konzept, Design & Realisierung:</h2>

            <p class="v-p v-mt-box-xl">Avonis - New Media</p>

            <p class="v-p">Grindelallee 17</p>

            <p class="v-p">20146 Hamburg</p>

            <p class="v-p">E-Mail: agentur(at)avonis.com</p>

            <p class="v-p">Internet: www.avonis.com</p>
        </section>
    </v-page>
</template>
