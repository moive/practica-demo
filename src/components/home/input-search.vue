<template>
  <input
        @keyup.enter="loadApi()"
        v-model="search"
        class="block text-sm leading-5 w-60 py-2 px-3 border-2 border-slate-500 text-slate-500 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
        placeholder="Find a character"
    />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['inputSearch']);
const search = ref('');

const loadApi = () => {
  emit('inputSearch', search.value);
  search.value = '';
};

</script>
