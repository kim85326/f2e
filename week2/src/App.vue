<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-primary justify-content-start">
      <a class="navbar-brand"
         href="#">高雄 HaveFun</a>
      <div class="search">
        <i class="fas fa-search"></i>
        <input class="form-control mr-sm-2"
               type="search"
               placeholder="Explore your own activities">
      </div>
    </nav>
    <div class="d-flex">
      <div class="menu col col-sm-4">
        <div class="menu-item">
          <div class="menu-item--title">地區</div>
          <div>
            <select class="form-control"
                    v-model="currentLocation">
              <option value="">全部</option>
              <option v-for="location in locations"
                      :key="location"
                      :value="location">{{location}}</option>
            </select>
          </div>
        </div>
        <div class="menu-item">
          <div class="menu-item--title">進階搜尋</div>
          <div class="form-check"
               v-for="tag in tags"
               :key="tag.name">
            <input class="form-check-input"
                   type="checkbox"
                   v-model="currentTags"
                   :value="tag"
                   :id="tag.name">
            <label class="form-check-label"
                   :for="tag.name">{{tag.name}}</label>
          </div>
        </div>
      </div>
      <div class="main col col-sm-8">
        <div class="container">
          <div class="result-count">
            共
            <span class="text-secondary">{{count}}</span> 筆搜尋結果...
          </div>
          <div class="tag d-flex">
            <div class="tag-item"
                 v-for="(currentTag, index) in currentTags"
                 :key="currentTag.name">
              <button class="btn btn-outline-secondary"
                      @click="removeCurrentTag(index)">
                {{currentTag.name}}
                <i class="far fa-times-circle"></i>
              </button>
            </div>
          </div>
          <Card v-for="item in filterItems"
                :item="item"
                :key="item.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from './components/Card'

export default {
  name: 'App',
  components: {
    Card
  },
  data () {
    return {
      items: [],
      filterItems: [],
      locations: {},
      currentLocation: '',
      tags: [
        {
          field: 'Ticketinfo',
          name: '免費參觀'
        },
        {
          field: 'Opentime',
          name: '全天候開放'
        }],
      currentTags: []
    }
  },
  computed: {
    count () {
      return this.filterItems.length
    }
  },
  watch: {
    currentLocation: {
      handler () {
        this.getFilterItems()
      },
      deep: true
    },
    currentTags: {
      handler () {
        this.getFilterItems()
      },
      deep: true
    }
  },
  mounted () {
    const vm = this
    const apiUrl = 'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97'
    this.$http.get(apiUrl)
      .then((response) => {
        vm.items = response.data.result.records
        vm.filterItems = vm.items
        vm.getLocations()
      })
  },
  methods: {
    getLocations () {
      const locations = new Set()
      this.items.forEach(item => {
        locations.add(item.Zone)
      })
      this.locations = Array.from(locations)
    },
    getFilterItems () {
      const vm = this
      let filterItems
      filterItems = this.items.filter((item) => {
        return item.Zone.match(vm.currentLocation)
      })

      if (vm.currentTags.length !== 0) {
        filterItems = filterItems.filter((item) => {
          let isMatch = true
          vm.currentTags.forEach((currentTag) => {
            if (!item[currentTag.field].match(currentTag.name)) {
              isMatch = false
            }
          })
          return isMatch
        })
      }

      vm.filterItems = filterItems
    },
    removeCurrentTag (index) {
      this.currentTags.splice(index, 1)
    }
  }
}
</script>

<style lang="scss">
$gray-1: #f2f2f2;
$gray-2: #ebebeb;
$gray-3: #d7d7d7;
$gray-4: #9b9b9b;

.navbar-brand {
  font-family: Optima-ExtraBlack;
  font-size: 36px;
  color: #ffffff;
  margin-left: 64px;
  margin-right: 0;
}

.search {
  margin-left: 150px;
  position: relative;
  color: #ffffff;
  border-bottom: 1px solid white;
  & i {
    position: absolute;
    top: 10px;
    left: 2px;
  }
  & input {
    padding-left: 32px;
    border: none;
    background-color: transparent;
    &:hover,
    &:active,
    &:focus {
      border: none;
      background-color: transparent;
      color: #ffffff;
    }
  }
}

.menu {
  padding-left: 38px;
}

@media (max-width: 768px) {
  .menu {
    max-width: 350px;
    margin-left: -30px;
  }
}

.menu-item {
  padding: 20px 40px;
  background-color: $gray-2;
  &:not(:last-child) {
    border-bottom: 1px solid $gray-3;
  }
}

.menu-item--title {
  font-family: Roboto-Bold;
  font-size: 20px;
  color: #000000;
  margin-bottom: 15px;
}

.main {
  padding: 24px 36px;
}

.result-count {
  font-family: Roboto-Regular;
  font-size: 24px;
}

.tag {
  margin-top: 8px;
  margin-bottom: 24px;
}

.tag-item:not(:first-child) {
  margin-left: 8px;
}

.tag-item button {
  border-radius: 100px;
  font-family: Roboto-Italic;
}
</style>
