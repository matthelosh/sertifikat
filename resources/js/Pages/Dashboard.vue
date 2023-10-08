<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import { Icon } from '@iconify/vue';
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #page-title>
            <h1 class="flex items-center gap-1 font-bold tracking-wide text-sltae-400">
                <Icon icon="mdi:view-dashboard" class="text-xl" />
                Dashboard
            </h1>
        </template>
        <h1>You're Logged in</h1>
    </AuthenticatedLayout>
</template>
