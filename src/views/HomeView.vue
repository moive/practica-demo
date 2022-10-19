<template>
  <div class="home">
    <hero-top></hero-top>
    <div class="flex justify-center mt-8">
      <input-search v-model="search" @inputSearch="loadApi" />
      <select-status v-model="status" v-if="characters.length && isVisible"  />
    </div>
    <div class="container mx-auto flex flex-wrap justify-evenly py-7">
      <list-card :items="collectionCharacters"></list-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import axios from 'axios';

import HeroTop from '@/components/home/hero-top.vue';
import InputSearch from '@/components/home/input-search.vue';
import SelectStatus from '@/components/home/select-status.vue';
import { ResultReq } from '@/interfaces/types';
import ListCard from '@/components/home/list-card.vue';

const search = ref('');
const status = ref('all');
const characters = ref<ResultReq[]>([]);
const collectionCharacters = ref<ResultReq[]>([]);
const isVisible = ref(false);

const loadApi = async (val: string) => {
  search.value = '';
  isVisible.value = false;
  collectionCharacters.value = [];
  try {
    const res = await axios.get(`https://rickandmortyapi.com/api/character/?name=${val}`);
    // console.log(res.data);
    characters.value = res.data.results;
    collectionCharacters.value = characters.value;
    isVisible.value = true;
  } catch (err: any) {
    isVisible.value = false;
    console.log(err);
  }
};

watch(status, (val) => {
  console.log('status', val);
  collectionCharacters.value = characters.value.filter(x => {
    // console.log(val)
    if (val === 'All') return characters.value;
    return x.status === val;
  });
});

</script>
