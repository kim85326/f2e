<template>
  <div class="pageHeader">
    <h1>
      <router-link to="/comics">Comicomic</router-link>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>

<style scoped lang="scss">
@import '../assets/style/variables';
.pageHeader{
  background-color: $black;
  > h1{
    padding: 16px 0;
    text-align: center;
    > a{
      color: $primary;
      font-size: 36px;
      font-family: 'Roboto';
      font-style: italic;
      font-weight: bold;
    }
  }
}
</style>
