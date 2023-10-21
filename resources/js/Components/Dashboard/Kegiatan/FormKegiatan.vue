<script setup>
import { ref, onMounted, reactive } from 'vue';
import { Icon } from '@iconify/vue';

const emit = defineEmits(['close']);

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const onSubmit = () => {
  console.log('submit!')
}


</script>

<template>
  <div class="overlay fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-slate-800 z-30  bg-opacity-50 backdrop-blur-sm">
    <div class="dialog bg-slate-50 rounded-lg shadow-md">
      <div class="dialog-title p-3 bg-slate-200 rounded-t-lg flex items-center justify-between">
        <h1 class="font-bold text-slate-700 tracking-wide">Formulir Kegiatan</h1>
        <button @click="emit('close')">
          <Icon icon="mdi:close-circle" class="text-red-400 text-2xl hover:text-red-600 active:text-red-500" />
        </button>
      </div>
      <div class="dialog-content p-3">
        <el-form :model="form" label-width="120px">
          <el-form-item label="Activity name">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="Activity zone">
            <el-select v-model="form.region" placeholder="please select your zone">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="Activity time">
            <el-col :span="11">
              <el-date-picker
                v-model="form.date1"
                type="date"
                placeholder="Pick a date"
                style="width: 100%"
              />
            </el-col>
            <el-col :span="2" class="text-center">
              <span class="text-gray-500">-</span>
            </el-col>
            <el-col :span="11">
              <el-time-picker
                v-model="form.date2"
                placeholder="Pick a time"
                style="width: 100%"
              />
            </el-col>
          </el-form-item>
          <el-form-item label="Instant delivery">
            <el-switch v-model="form.delivery" />
          </el-form-item>
          <el-form-item label="Activity type">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="Online activities" name="type" />
              <el-checkbox label="Promotion activities" name="type" />
              <el-checkbox label="Offline activities" name="type" />
              <el-checkbox label="Simple brand exposure" name="type" />
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="Resources">
            <el-radio-group v-model="form.resource">
              <el-radio label="Sponsor" />
              <el-radio label="Venue" />
            </el-radio-group>
          </el-form-item>
          <el-form-item label="Activity form">
            <el-input v-model="form.desc" type="textarea" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
