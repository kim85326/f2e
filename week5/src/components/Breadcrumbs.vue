<template>
<div class="breadcrumbs">
    <div class="comic">{{comic}}</div>
    <i class="fas fa-caret-right"></i>
    <select :value="currentChapter" class="chapter" @change.prevent="updateField('Chapter', $event)">
        <option :value="n" v-for="n in countChapters" :key="n">Chapter {{n}}</option>
    </select>
    <select :value="currentPage" class="page" @change.prevent="updateField('Page', $event)">
        <option :value="m" v-for="m in countPages" :key="m">Page {{m}}</option>
    </select>
</div>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  props: {
    comic: {
      type: String,
      default: 'My Hexschool'
    },
    currentChapter: {
      type: Number,
      default: 1
    },
    countChapters: {
      type: Number,
      default: 1
    },
    currentPage: {
      type: Number,
      default: 1
    },
    countPages: {
      type: Number,
      default: 1
    }
  },
  methods: {
    updateField (field, e) {
      console.log('update ＝> ')
      console.log(e.target.value)
      this.$emit(`update:current${field}`, e.target.value * 1)
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/style/variables";
.breadcrumbs {
  margin: 32px auto;
  display: flex;
  justify-content: center;
  align-content: center;
  i {
    margin-top: 3px;
    margin-left: 8px;
    margin-right: 8px;
  }
}
.comic {
  font-family: "Roboto";
  font-weight: bold;
  font-size: 20px;
  color: $black;
}
.chapter {
  margin-right: 8px;
}
</style>
