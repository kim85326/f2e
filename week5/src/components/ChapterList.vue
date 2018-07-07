<template>
<div class="chapterList">
    <div class="title">
        All Chapters
    </div>
    <ul class="list">
        <li v-for="(chapter, key) in chapters" :key="key">
          <router-link :to="{name: 'Reading', params:{ id: comicId, cid: chapter.id }}">Chapter {{chapter.id}}: {{chapter.title}}</router-link>
        </li>
    </ul>
</div>
</template>

<script>
export default {
  name: 'ChapterList',
  props: {
    comicId: {
      type: Number,
      required: true
    },
    chapters: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/style/variables";
.chapterList {
  width: 631px;
  margin: 24px auto;
}
.title {
  display: inline-block;
  font-family: "Roboto";
  font-weight: Bold;
  font-size: 24px;
  color: $white;
  background-color: $black;
  padding: 8px 24px;
}
.list {
  border: 4px solid $black;
  > li > a {
    display: block;
    padding: 16px 24px;
    font-family: "Roboto";
    font-weight: Bold;
    font-size: 16px;
    color: $black;
    background-color: $white;
    line-height: 24px;
    &:hover {
        color: $white;
        background-color: $black;
    }
  }
}
</style>
