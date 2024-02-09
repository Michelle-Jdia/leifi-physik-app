<template>
    <svg width="21" height="20" viewBox="0 0 21 23" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 0V8" stroke-width="2.5" fill="currentColor" stroke="currentColor" />

        <path d="M8.25 0V10" stroke-width="2.5" fill="currentColor" stroke="currentColor" />

        <path
            d="M14.7 1.4L19.5 5V18.75H14.5V1.5C14.5 1.39699 14.6176 1.3382 14.7 1.4Z"
            stroke-width="2.5"
            stroke="currentColor"
        />

        <text font-size="0.8rem" y="19.8" stroke="currentColor">
            <slot>0</slot>
        </text>
    </svg>
</template>
