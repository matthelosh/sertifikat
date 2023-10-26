<script setup>
import { Link } from '@inertiajs/vue3';
defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <div class="min-h-screen bg-gray-100 w-full">
       <main class="w-full">

            <slot />
        </main>
    </div>
</template>
