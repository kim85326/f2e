<template>
  <div class="reading" v-if="pages.length">
    <Breadcrumbs :comic="name" :currentChapter.sync="currentChapter" :countChapters="chapters.length" :currentPage.sync="currentPage" :countPages="pages.length"/>
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
      name: null,
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
  watch: {
    currentChapter () {
      this.$router.replace(`/comic/${this.comicId}/chapter/${this.currentChapter}`)
    }
  },
  methods: {
    getApiData () {
      var vm = this
      this.$http
        .get(`./static/data.json`)
        .then(function (response) {
          let id = vm.comicId - 1
          let chapter = vm.currentChapter - 1
          if (id >= 0 && id < response.data.comics.length) {
            var data = response.data.comics[id]
            vm.name = data.name
            vm.chapters = data.chapters.slice(0)
            if (chapter >= 0 && chapter < vm.chapters.length) {
              vm.pages = data.chapters[chapter].pages.slice(0)
            } else {
              alert('抱歉！目前還沒有章節')
              vm.$router.replace(`/comic/${vm.comicId}`)
            }
          } else {
            alert('抱歉！目前還沒有這本書')
            vm.$router.replace('/home')
          }
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
  height: calc(80vh - 160px);
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
