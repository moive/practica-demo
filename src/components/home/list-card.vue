<template>
  <CardCharacter :item="item" v-for="item in items" :key="item.id"></CardCharacter>
</template>

<script setup lang="ts">
import CardCharacter from './card-character.vue';
import { ResultReq } from '@/interfaces/types';

interface IProp {
  items: ResultReq[]
}
withDefaults(defineProps<IProp>(), {
  items: () => []
});

</script>
