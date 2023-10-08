<script setup>
import { ref, defineAsyncComponent } from 'vue';
import { Icon } from '@iconify/vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
</script>

<template>
    <AuthenticatedLayout>
        <template #page-title>
            <Icon icon="mdi:account-tie" class="text-slate-500 text-xl" />
            Data Panitia Kegiatan
        </template>
        <div class="content w-full">
            
        </div>
        
    </AuthenticatedLayout>
</template>