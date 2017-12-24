<template>
  <div class="recommend" ref="recommend">
    <scroll ref="scroll" class="recommend-content">
      <div>
      <div v-if="recommends.length" class="slider-wrapper" ref="sliderWrapper">
        <slider>
          <div v-for="item in recommends">
            <a :href="item.linkUrl">
              <img class="needsclick" :src="item.picUrl">
            </a>
          </div>
        </slider>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌曲推荐</h1>
        <ul>
          <li @click="selectItem(item)" class="item" v-for="item in discList" >
            <div class="icon">
              <img class="needsclick" @load="loadImage" v-lazy="item.imgurl" width="60" height="60" alt="">
            </div>
            <div class="text">
              <h2 class="name">{{item.creator.name}}</h2>
              <p class="disc">{{item.dissname}}</p>
            </div>
          </li>
        </ul>
      </div>
        <div class="loading-wrapper" v-show="!discList.length">
          <loading></loading>
        </div>
      </div>
    </scroll>
      <router-view></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
  import {getRecommend, getDiscList} from 'api/recommend'
  import {ERR_OK} from 'api/config'
  import Slider from 'base/slider/slider'
  import scroll from 'base/scroll/scroll'
  import loading from 'base/loading/loading'
  import {mapMutations} from 'vuex'
  export default {
    data() {
      return {
        recommends: [],
        discList: []
      }
    },
    components: {
      Slider,
      scroll,
      loading
    },
    created() {
      this._getRecommend()
      this._getDiscList()
    },
    methods: {
      selectItem(item) {
        this.$router.push({
          path: `recommend/${item.dissid}`
        })
        console.log(item.dissid)
        this.setDisc(item)
      },
      loadImage() {
        // 当图片加载并撑开尺寸的时候 调用loadImage 因为在循环上 所以 会多次执行会浪费性能
        if (!this.checkloaded) {
          // 设置一个变量 如果 开始没有这个 则刷新并且 设置没true
          this.$refs.scroll.refresh()
          this.checkloaded = true
        }
        // 图片加载完成我们调用scroll组件里的 refresh（）方法 来刷新better-scroll
      },
      _getRecommend () {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.recommends = res.data.slider
          }
        })
      },
      _getDiscList() {
        getDiscList().then((res) => {
          if (res.code === ERR_OK) {
            this.discList = res.data.list
          }
        })
      },
      ...mapMutations({
        setDisc: 'SET_DISC'
      })
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus">
  @import "~common/stylus/variable"

  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>
