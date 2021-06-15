<template>
  <div>
    <h1>{{ msg }}</h1>
    <Dropdown v-model="selectedOption" :options="options" optionLabel="text" placeholder="Select an activity" />
    <h3>{{selectedOption !== null ? `So, you want to ${selectedOption.text}` : `What do you want to do today? Select above.`}}</h3>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import OptionsHandler from '../_helpers/OptionsHandler';

export default {
  name: 'List',
  props: {
    msg: String
  },
  setup() {
    const { getOptions } = OptionsHandler();
    const selectedOption = ref(null);
    let options = ref([]);

  const changeSelectedOption = (event) => {
    selectedOption.value = event;
  }

    onMounted(async () => {
      options.value = await getOptions();
    })

    return { options, selectedOption, changeSelectedOption }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}
</style>
