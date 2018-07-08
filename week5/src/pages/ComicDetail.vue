<template>
  <div class="comicDetail" v-if="chapters.length">
    <div class="detail">
      <div class="cover">
        <img :src="coverImg">
      </div>
      <div class="context">
        <div class="name">
          {{name}}
        </div>
        <div class="descriptions">
          <div class="description">
            <div class="title">Genres</div>
            <div class="content">{{genres}}</div>
          </div>
          <div class="description">
            <div class="title">Author</div>
            <div class="content">{{author}}</div>
          </div>
          <div class="description">
            <div class="title">Status</div>
            <div class="content">{{status}}</div>
          </div>
          <div class="description">
            <div class="title">Rate</div>
            <div class="content">
              <i class="fas fa-star" v-for="(star, key) in rate" :key="`full-star-${key}`"></i>
              <i class="far fa-star" v-for="(star, key) in (5-rate)" :key="key"></i>
            </div>
          </div>
          <div class="description">
            <div class="title">Summary</div>
            <div class="content" v-html="summary">
            </div>
          </div>
        </div>
      </div>
    </div>
    <ChapterList :comicId="comicId" :chapters="chapters"/>
  </div>
</template>

<script>
import ChapterList from '@/components/ChapterList'
export default {
  name: 'ComicDetail',
  components: {
    ChapterList
  },
  data () {
    return {
      comicId: null,
      name: null,
      coverImg: null,
      genres: null,
      author: null,
      status: null,
      rate: 5,
      summary: null,
      chapters: []
    }
  },
  methods: {
    getApiData () {
      var vm = this
      this.$http
        .get(`./static/data.json`)
        .then(function (response) {
          let id = vm.comicId - 1
          if (id >= 0 && id < response.data.comics.length) {
            var data = response.data.comics[id]
            vm.name = data.name
            vm.coverImg = data.coverImg
            vm.genres = data.genres
            vm.author = data.author
            vm.status = data.status
            vm.rate = data.rate
            vm.summary = data.summary
            vm.chapters = data.chapters.slice(0)
          } else {
            alert('抱歉！目前還沒有這本書')
            vm.$router.replace('/home')
          }
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  },
  mounted () {
    this.comicId = this.$route.params.id * 1
    this.getApiData()
  }
}
</script>

<style scoped lang="scss">
@import "../assets/style/variables";
.detail {
  margin: 24px auto;
  display: flex;
  justify-content: center;
  .cover {
    border: 4px solid $black;
    height: 100%;
    > img {
      display: block;
      width: 300px;
      height: 446px;
    }
  }
  .context {
    width: 323px;
  }
}
.name {
  font-family: "Roboto";
  font-weight: Bold;
  font-size: 36px;
  color: $white;
  background-color: $black;
  line-height: 36px;
  padding: 8px 24px;
  text-align: center;
}
.descriptions {
  padding-top: 16px;
  padding-left: 24px;
}
.description {
  display: flex;
  margin-bottom: 8px;
  font-family: "Roboto";
  font-weight: Bold;
  font-size: 16px;
  color: $black;
  line-height: 24px;
  &:last-child {
    padding-top: 16px;
    display: block;
    > .title {
      width: 100%;
    }
    > .content {
      margin-top: 8px;
    }
  }
  .title {
    width: 60px;
  }
  .content {
    font-weight: normal;
  }
}
</style>
