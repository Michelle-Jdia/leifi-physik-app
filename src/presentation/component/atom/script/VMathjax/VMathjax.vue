<template>
    <component :is="'script'" src="script/mathjax/mathjax-config.js" />

    <component :is="'script'" src="script/mathjax/tex-mml-chtml.js" />
</template>

<style lang="scss">
mjx-container {
    @apply v-overflow-x-auto v-overflow-y-hidden;
}
</style>
