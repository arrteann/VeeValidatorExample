<template>
  <div id="app">
    <vee-validate-form></vee-validate-form>
  </div>
</template>

<script>
import VeeValidateForm from "./components/VeeValidateForm.vue";
export default {
  name: "App",
  components: {
    VeeValidateForm,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
