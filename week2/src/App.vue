<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-primary justify-content-start">
      <a class="navbar-brand"
         href="#">HaveFun</a>
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
          <div class="menu-item--title">Location</div>
          <div>
            <select class="form-control">
              <option value="taiwan">taiwan</option>
            </select>
          </div>
        </div>
        <div class="menu-item">
          <div class="menu-item--title">Date</div>
          <div class="row align-items-center date">
            <div class="col col-xs-6">from</div>
            <div class="col col-xs-6">
              <input type="date"
                     class="form-control">
            </div>
          </div>
          <div class="row align-items-center date">
            <div class="col col-xs-6">to</div>
            <div class="col col-xs-6">
              <input type="date"
                     class="form-control">
            </div>
          </div>
        </div>
        <div class="menu-item">
          <div class="menu-item--title">Categories</div>
          <div class="form-check">
            <input class="form-check-input"
                   type="checkbox"
                   value
                   id="defaultCheck1">
            <label class="form-check-label"
                   for="defaultCheck1">All</label>
          </div>
          <div class="form-check">
            <input class="form-check-input"
                   type="checkbox"
                   value
                   id="defaultCheck2">
            <label class="form-check-label"
                   for="defaultCheck2">Entertainment</label>
          </div>
          <div class="form-check">
            <input class="form-check-input"
                   type="checkbox"
                   value
                   id="defaultCheck3">
            <label class="form-check-label"
                   for="defaultCheck3">Food</label>
          </div>
          <div class="form-check">
            <input class="form-check-input"
                   type="checkbox"
                   value
                   id="defaultCheck4">
            <label class="form-check-label"
                   for="defaultCheck4">Learning</label>
          </div>
          <div class="form-check">
            <input class="form-check-input"
                   type="checkbox"
                   value
                   id="defaultCheck5">
            <label class="form-check-label"
                   for="defaultCheck5">Outdoors</label>
          </div>
        </div>
      </div>
      <div class="main col col-sm-8">
        <div class="container">
          <div class="result-count">
            Showing
            <span class="text-secondary">15</span> results by…
          </div>
          <div class="tag d-flex">
            <div class="tag-item">
              <button class="btn btn-outline-secondary">
                Koahsiung
                <i class="far fa-times-circle"></i>
              </button>
            </div>
            <div class="tag-item">
              <button class="btn btn-outline-secondary">
                Entertainment
                <i class="far fa-times-circle"></i>
              </button>
            </div>
          </div>
          <Card v-for="item in items"
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
  data: function () {
    return {
      items: []
    }
  },
  mounted () {
    const vm = this
    const apiUrl = 'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97'
    this.$http.get(apiUrl)
      .then((response) => {
        vm.items = response.data.result.records
      })
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

.menu-item .date {
  margin-bottom: 8px;
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
