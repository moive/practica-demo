<template>
  <div class="home">
    <hero-top></hero-top>
    <div class="flex justify-center items-start mt-8">
      <Form
        @submit="loadApi"
        :validation-schema="schema"
      >
        <TextInput
          name="Field"
          type="text"
          placeholder="Find a character"
          :msgError="msgError"
        />
        <button type="submit" class="hidden" >go</button>
      </Form>
      <select-status v-model="status" v-if="characters.length && isVisible"  />
    </div>
    <div class="container mx-auto flex flex-wrap justify-evenly py-7">
      <loading-server v-if="isLoading"></loading-server>
      <list-card v-else :items="collectionCharacters"></list-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { Form } from 'vee-validate';
import * as Yup from 'yup';
import axios from 'axios';

import HeroTop from '@/components/home/hero-top.vue';
import SelectStatus from '@/components/home/select-status.vue';
import { ResultReq } from '@/interfaces/types';
import ListCard from '@/components/home/list-card.vue';
import LoadingServer from '@/components/global/loading-server.vue';
import TextInput from '@/components/global/TextInput.vue';

const search = ref('');
const status = ref('all');
const characters = ref<ResultReq[]>([]);
const collectionCharacters = ref<ResultReq[]>([]);
const isVisible = ref(false);
const msgError = ref('');
const isLoading = ref(false);

const schema = Yup.object().shape({
  Field: Yup.string().min(4).max(20).required(),
});

const loadApi = async ({ Field }: any) => {
  search.value = '';
  isVisible.value = false;
  collectionCharacters.value = [];
  msgError.value = '';
  isLoading.value = true;
  try {
    const res = await axios.get(`https://rickandmortyapi.com/api/character/?name=${Field}`);
    // console.log(res.data);
    characters.value = res.data.results;
    collectionCharacters.value = characters.value;
    isVisible.value = true;
  } catch (err: any) {
    isVisible.value = false;
    msgError.value = 'No Characters Found :(';
    console.log(err);
  } finally {
    isLoading.value = false;
  }
};

watch(status, (val) => {
  collectionCharacters.value = characters.value.filter(x => {
    // console.log(val)
    if (val === 'All') return characters.value;
    return x.status === val;
  });
});

</script>
