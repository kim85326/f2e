<template>
  <div class="showbox">
    <div class="row">
      <div class="col-md-4">
        <img src="http://khh.travel/FileArtPic.ashx?id=705&w=1280&h=960" width="100%" height="100%">
      </div>
      <div class="col-md-8">
        <div class="content">
          <h3 class="title">
            Kogi Cosby sweater.
          </h3>
          <div class="description">
            Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id.
          </div>
          <div class="result-tag d-flex">
            <div class="result-tag-item">
              <button class="btn">
                Koahsiung
              </button>
            </div>
          </div>
          <div class="d-flex">
            <div class="place">
              <i class="fas fa-map-marker-alt"></i>
              Kaohsiung City
            </div>
            <div class="place">
              <i class="far fa-calendar-alt"></i>
              <span>2018/5/24</span>
              -
              <span>2018/5/31</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'showbox',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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

.showbox {
  background-color: #ffffff;
  margin-bottom: 24px;
}

.content {
  padding: 24px;
  // border: 1px solid black;
}

@media (max-width:768px){
  .content {
    margin-left: -30px;
  }
}

.title {
  font-family: Roboto-Bold;
  color: $primary;
}

.discription {
  font-family: Roboto-Regular;
  font-size: 16px;
  color: #000000;
  line-height: 24px;
}

.result-tag {
  margin-top: 12px;
  margin-bottom: 12px;
}

.result-tag-item button {
  border-radius: 100px;
  font-size: 16px;
  background-color: $gray-3;
  color: #ffffff;
  border: none;
  padding: 3px 16px;
  &:focus {
    outline: none;
    box-shadow: none;
  }
}

.place {
  margin-right: 16px;
  color: $gray-4;
  & i {
    color: #000000;
  }
}
</style>
