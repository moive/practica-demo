<template>
  <div>
    <input
      name="search"
      @keyup.enter="loadApi()"
      @keyup="fnChange"
      v-model="value"
      class="block text-sm leading-5 w-60 py-2 px-3 border-2 border-slate-500 text-slate-500 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
      placeholder="Find a character"
    />
    <small v-if="txtErrorMessage">{{txtErrorMessage}}</small>
    <small v-else>{{errorMessage}}</small>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs, watch } from 'vue';
import { useField } from 'vee-validate';

const search = ref('');
const txtErrorMessage = ref('');

const emit = defineEmits(['inputSearch']);
const props = defineProps(['loadError']);
const { loadError } = toRefs(props);

const loadApi = () => {
  if (errorMessage.value !== undefined) return;
  emit('inputSearch', value.value);
};

const fnChange = () => {
  txtErrorMessage.value = '';
};

const validateFieldSearch = (value: string) => {
  if (!value) {
    return 'This field is required';
  }

  if (value.length < 4) {
    return 'This field must contain at least 4 characters';
  }

  if (value.length > 20) {
    return 'This field must contain less than 20 characters';
  }

  return true;
};

const { errorMessage, value } = useField('search', validateFieldSearch);

watch(loadError, (v: string) => {
  txtErrorMessage.value = v;
});

</script>
