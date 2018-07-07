<template>
<div class="chapterThumb">
    <ul>
        <li v-for="(page, key) in pages" :key="key">
            <a href="#" @click.prevent="updateCurrentPage(key+1)" :class="{'active': currentPage - 1 == key}">
                <span>{{key + 1}}</span>
                <img :src="page">
            </a>
        </li>
    </ul>
</div>
</template>

<script>
export default {
  name: 'ChapterThumb',
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    pages: {
      type: Array,
      require: true
    }
  },
  methods: {
    updateCurrentPage (index) {
      this.$emit('update:currentPage', index)
    }
  },
  watch: {
    currentPage () {
      // this.$el 要在 mounted 之後才有作用
      if (!this.$el) return false
      // watch 是在資料更新後&畫面更新前
      // 因此我們要加上$nextTick 才會是在資料更新後&畫面更新後
      // 這樣才能抓到正確的target
      this.$nextTick(() => {
        let ul = this.$el.querySelector('ul')
        let target = ul.querySelector('li>a.active')
        if (!target) return false
        ul.scrollLeft =
            target.offsetLeft -
            ul.offsetLeft -
            ul.offsetWidth / 2 +
            target.offsetWidth / 2
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/style/variables";
.chapterThumb {
  text-align: center;
}
ul {
  display: flex;
  width: 50%;
  overflow: auto;
  margin: 8px auto;
  & a {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
    opacity: 0.5;
    transition: all 0.3s;
    & span {
      font-size: 14px;
      font-family: "Roboto";
      font-weight: bold;
    }
    &:hover,
    &:active,
    &.active {
      top: -8px;
      opacity: 1;
      &::before {
        content: "";
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 10px 10px 10px;
        border-color: transparent transparent $black transparent;
      }
      & span {
        opacity: 0;
      }
      & img {
        border: 5px solid $black;
      }
    }
  }
}
img {
  width: 80px;
  height: 120px;
}
</style>
