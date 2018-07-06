<template>
  <div id="app">
    <PageHeader/>
    <transition name="fade" mode="out-in" appear>
      <router-view :key="$route.fullPath"/>
    </transition>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style lang="scss" src="./assets/style/main.scss">
</style>
