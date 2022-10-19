<template>
  <select
    v-model="status"
    class="mx-5 block text-sm leading-5 w-60 py-2 px-3 border-2 border-slate-500 text-slate-500 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
    >
      <option v-for="item in itemsSelector" :value="item" :key="item.value">{{item.name}}</option>
    </select>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { IStatusSelected } from '../../interfaces/types';

export default defineComponent({
  name: 'select-status',
  props: {
    modelValue: String
  },
  setup () {
    const defaultStatus:IStatusSelected[] = [
      { value: 'All', name: 'All' },
      { value: 'Alive', name: 'Alive' },
      { value: 'Dead', name: 'Dead' },
      { value: 'unknown', name: 'Unknown' }
    ];
    const itemsSelector = ref(defaultStatus);
    const status = ref(defaultStatus[0]);

    return { status, itemsSelector };
  },
  watch: {
    status (v) {
      this.$emit('update:modelValue', v.value);
    }
  }
});

</script>
