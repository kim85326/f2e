<template>
<div>
    <a class="arrowBtn" href="javascript:;">
        <i class="fas fa-angle-up" v-if="direction=='up'"></i>
        <i class="fas fa-angle-down" v-if="direction=='down'"></i>
        <i class="fas fa-angle-left" v-if="direction=='left'"></i>
        <i class="fas fa-angle-right" v-if="direction=='right'"></i>
    </a>
</div>
</template>

<script>
export default {
  name: 'ArrowBtn',
  props: {
    direction: {
      type: String,
      default: 'left'
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/style/variables";
.arrowBtn {
  > i {
    padding-left: 32px;
    padding-right: 32px;
    font-size: 72px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
  display: inline-block;
  height: 100%;
  background-color: transparent;
  color: $black;
  &:hover, &:active{
    background: $black;
    color: $primary;
  }
}
</style>
