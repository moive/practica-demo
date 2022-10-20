<template>
  <div class="item-card w-[48%] mb-8 flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" :src="item.image" alt="">
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{item.name}}</h5>
        <p>{{item.status}} - {{item.species}}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Last Known Location: <span>{{item.location.name}}</span></p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">First seen in: <span>{{firstSeenIn}}</span></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs, ref } from 'vue';
import axios from 'axios';

const props = defineProps({
  item: {
    type: Object,
    default: () => ({})
  }
});

const firstSeenIn = ref('');
const { item } = toRefs(props);

axios.get(item.value.episode[0])
  .then((v) => {
    firstSeenIn.value = v.data.name;
  })
  .catch(err => console.log(err));

</script>
