<template>
  <div class="home">
    <hero-top></hero-top>
    <div class="flex justify-center mt-8">
      <input-search v-model="search" @inputSearch="loadApi" />
      <select-status v-model="status" v-if="collectionCharacters.length"  />
    </div>
    <div class="container mx-auto flex flex-wrap justify-evenly py-7">
      <list-card :items="collectionCharacters"></list-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
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

const loadApi = async (val: string) => {
  search.value = '';
  try {
    const res = await axios.get(`https://rickandmortyapi.com/api/character/?name=${val}`);
    console.log(res.data);
    characters.value = res.data.results;
    collectionCharacters.value = characters.value;
    // console.log(collectionCharacters.value);
  } catch (err: any) {
    console.log(err);
  }
};

</script>
