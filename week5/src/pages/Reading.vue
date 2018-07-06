<template>
  <div class="reading" v-if="pages.length">
    <Breadcrumbs :currentChapter.sync="currentChapter" :countChapters="chapters.length" :currentPage.sync="currentPage" :countPages="pages.length"/>
    <div class="main">
      <ArrowBtn direction="left" @click.native="prevPage"/>
      <div class="imgBox">
        <img :src="currentImgSrc">
      </div>
      <ArrowBtn direction="right" @click.native="nextPage"/>
    </div>
    <ChapterThumb :currentPage.sync="currentPage" :pages="pages"/>
  </div>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs'
import ArrowBtn from '@/components/ArrowBtn'
import ChapterThumb from '@/components/ChapterThumb'
export default {
  name: 'Reading',
  components: {
    Breadcrumbs,
    ArrowBtn,
    ChapterThumb
  },
  data () {
    return {
      comicId: null,
      currentChapter: null,
      chapters: [],
      currentPage: 1,
      pages: []
    }
  },
  computed: {
    currentImgSrc () {
      return this.pages[this.currentPage - 1]
    }
  },
  methods: {
    getApiData () {
      var vm = this
      this.$http
        .get(`api/comics/${vm.comicId}`)
        .then(function (response) {
          var data = response.data
          console.log(data)
          vm.chapters = data.chapters.slice(0)
          vm.pages = data.chapters[vm.currentChapter - 1].pages.slice(0)
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    prevPage () {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    },
    nextPage () {
      if (this.currentPage < this.pages.length) {
        this.currentPage++
      }
    }
  },
  mounted () {
    this.comicId = this.$route.params.id * 1
    this.currentChapter = this.$route.params.cid * 1
    this.getApiData()
  }
}
</script>

<style scoped lang="scss">
.main {
  height: calc(80vh - 100px);
  display: flex;
  margin: 16px 72px;
  justify-content: space-between;
}
.imgBox {
  flex: 1;
  align-items: center;
  > img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    margin: auto;
  }
}
</style>
