<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      message: 'Hello Symfony + Vue.js!',
    }
  },
};
</script>

<style lang="scss">
.home > h1 {
  color: #5eb5e0;
  font-size: 45px;
}

</style>
