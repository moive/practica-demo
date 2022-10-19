<template>
  <CardCharacter :item="item" v-for="item in items" :key="item.id"></CardCharacter>
</template>

<script setup lang="ts">
import CardCharacter from './card-character.vue';

defineProps({
  items: {
    type: Array,
    default: () => ([])
  }
});

</script>
