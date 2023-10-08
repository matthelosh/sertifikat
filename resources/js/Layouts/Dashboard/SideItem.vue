<script setup>
import { ref } from 'vue';
import { Link } from '@inertiajs/vue3';
import { Icon } from '@iconify/vue';


const menus = [
    {
        label: 'Dashboard',
        route: 'dashboard',
        icon: 'tablet-dashboard'
    },
    {
        label: 'Kegiatan',
        route: 'dashboard.kegiatan',
        icon: 'human-male-board-poll'
    },
    {
        label: 'Peserta',
        route: 'dashboard.peserta',
        icon: 'human-queue'
    },
    {
        label: 'Panitia',
        route: 'dashboard.panitia',
        icon: 'account-tie'
    },
    {
        label: 'Sertifikat',
        route: 'dashboard.sertifikat',
        icon: 'certificate'
    },
]
</script>
<template>
    <div>
        <ul class="text-sm">
            <li
                v-for="menu in menus"
            >
                <Link :href="route(menu.route)" class="hover:bg-slate-50 hover:shadow-lg transition-all h-full p-2 flex items-center gap-1" :class="menu.route == route().current() ? 'bg-white shadow-lg' : ''">
                    <Icon :icon="`mdi:${menu.icon}`" />
                    {{ menu.label }}
                </Link>
            </li>
        </ul>
    </div>
</template>

<style scoped>

.active {
    background: pink;
}
</style>