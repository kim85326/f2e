<template>
  <div class="card">
    <div class="row">
      <div class="col-md-4">
        <img :src="item.Picture1"
             width="100%"
             height="100%">
      </div>
      <div class="col-md-8">
        <div class="card-content">
          <h3 class="card-title">{{item.Name}}</h3>
          <div class="card-description">{{item.Description}}</div>
          <div class="tag-group">
            <span class="tag"
                  v-if="item.Opentime === '全天候開放'">
              全天候開放
            </span>
            <span class="tag"
                  v-if="item.Ticketinfo === '免費參觀'">
              免費參觀
            </span>
          </div>
          <div class="card-bottom">
            <span class="card-bottom-item">
              <i class="fas fa-map-marker-alt"></i>
              {{item.Zone}}
            </span>
            <span class="card-bottom-item">
              <i class="far fa-calendar-alt"></i>
              {{item.Opentime}}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['item'],
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
$primary: #7828b4 !default;
$secondary: #9013fe !default;
$gray-1: #f2f2f2;
$gray-2: #ebebeb;
$gray-3: #d7d7d7;
$gray-4: #9b9b9b;

.card {
  background-color: #ffffff;
  margin-bottom: 24px;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 10px hsla(0, 0%, 46%, 0.5);
  }
}

.card-content {
  padding: 24px;
  @media (min-width: 768px) {
    padding-left: 0;
  }
}

.card-title {
  font-family: Roboto-Bold;
  color: $primary;
}

.card-description {
  font-family: Roboto-Regular;
  font-size: 16px;
  color: #000000;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.tag-group {
  margin-top: 12px;
  margin-bottom: 12px;
  > .tag:not(:first-child) {
    margin-left: 8px;
  }
}

.tag {
  border-radius: 100px;
  font-size: 16px;
  background-color: $gray-3;
  color: #ffffff;
  border: none;
  padding: 3px 16px;
}

.card-bottom {
  display: flex;
  flex-direction: column;
  @media (min-width: 1200px) {
    flex-direction: row;
  }
}

.card-bottom-item {
  color: $gray-4;
  & i {
    color: #000000;
  }

  &:not(:last-child) {
    margin-bottom: 4px;
  }

  @media (min-width: 1200px) {
    &:not(:last-child) {
      margin-right: 16px;
    }
  }
}
</style>
