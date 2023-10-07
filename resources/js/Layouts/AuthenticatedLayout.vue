<script setup>
import { ref, defineAsyncComponent } from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import { Link } from '@inertiajs/vue3';
import { Icon } from '@iconify/vue';

const showingNavigationDropdown = ref(false);

import SideItem from '@/Layouts/Dashboard/SideItem.vue'
</script>

<template>
    <div class="common-layout">
        <el-container class="grid grid-cols-12 bg-slate-50 gap-2 p-3 h-screen">
            <el-aside class="col-span-2 h-full bg-slate-200 overflow-y-auto shadow-xl rounded-lg hover:shadow-none ">
                <div class="avatar w-full h-[125px]">
                    <img src="/img/logo.png" alt="Logo" class="w-[50%] mx-auto rounded-full my-4">
                </div>
                <SideItem class="my-2"/>
            </el-aside>
            <el-container class="grid col-span-12 sm:col-span-10  h-full">
                <el-header class="w-full h-10 p-2 flex items-center justify-between">
                    <div class="logo flex items-center gap-1">
                        <Icon icon="mdi:folder-open" class="text-slate-500 text-lg" />
                        Header
                    </div>
                </el-header>
                <el-main class="h-[82vh] overflow-y-auto">
                    <slot />
                </el-main>
                <el-footer class=" flex justify-center" >
                    <p class="text-sm py-2 px-4 bg-slate-200 rounded-lg shadow-lg text-sltae-500">Copyright &copy; {{ new Date().getFullYear() }} <a href="https://matsoleh.my.id" class="text-purple-600 hover:underline">Matsoleh</a></p>
                </el-footer>
            </el-container>
        </el-container>
    </div>
  </template>
  
