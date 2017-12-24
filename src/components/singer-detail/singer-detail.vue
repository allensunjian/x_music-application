<template>
  <transition name="slider">
    <div class="singer-detail">
      <music-list :songs="songs" :bg-image="bgImage" :title="title"></music-list>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import {getSingerDetail} from 'api/singer'
  import {ERR_OK} from 'api/config'
  import {createSong} from 'common/js/songs'
  import MusicList from 'components/music-list/music-list'
  // vuex提供的获取状态的语法糖
  export default {
    components: {
      MusicList
    },
    data() {
      return {
        songs: []
      }
    },
    computed: {
      title() {
        return this.singer.name
      },
      bgImage() {
        return this.singer.avatar
      },
      ...mapGetters([
        'singer'
        // 拿到通过store/getters 'singer'拿到状态值
      ])
    },
    created() {
      this._getDetail()
    },
    methods: {
      _getDetail() {
        if (!this.singer.id) {
          // 如果用户产生误操作 点击刷新 则返回/singer页面从新选择  常用便捷处理方法
          this.$router.push('/singer')
          return
        }
        getSingerDetail(this.singer.id).then((res) => {
          if (res.code === ERR_OK) {
            this.songs = this._normalizeSongs(res.data.list)
          }
        })
      },
      _normalizeSongs(list) {
        let ret = []
        list.forEach((item) => {
          let {musicData} = item
          if (musicData.songid && musicData.albummid) {
            ret.push(createSong(musicData))
          }
        })
        return ret
      }
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus">
  @import "~common/stylus/variable"

  .singer-detail
    position: fixed
    z-index: 100
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: $color-background

  .slider-enter-active,.slider-leave-active
    transition: all .3s
  .slider-enter,.slider-leave-to
    transform: translate3d(100%,0,0)
</style>
