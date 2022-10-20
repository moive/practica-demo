<template>
  <div>
    <input
      :name="name"
      :id="name"
      :type="type"
      :value="inputValue"
      :placeholder="placeholder"
      @input="handleChange"
      @blur="handleBlur"
      @keyup="fnKeyup"
      class="block text-sm leading-5 w-60 py-2 px-3 border-2 border-slate-500 text-slate-500 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
    />

    <p class="help-message" v-show="errorMessage || meta.valid">
      <small v-if="txtErrorMessage">{{txtErrorMessage}}</small>
      <small v-else>{{errorMessage}}</small>
    </p>
  </div>
</template>
<script setup lang="ts">
import { toRef, ref, watch, toRefs } from 'vue';
import { useField } from 'vee-validate';

const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  value: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    required: true,
  },
  successMessage: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  msgError: {
    type: String,
    default: '',
  },
});

const name = toRef(props, 'name');
const txtErrorMessage = ref('');
const { msgError } = toRefs(props);

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(name, undefined, {
  initialValue: props.value,
});

const fnKeyup = () => {
  txtErrorMessage.value = '';
};

watch(msgError, (v: string) => {
  txtErrorMessage.value = v;
});

</script>
