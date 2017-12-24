<template>
  <transition name="slide">
    <music-list :rank="rank" :songs="songs" :title="title" :bg-image="bgImage"></music-list>
  </transition>
</template>
<script type="text/ecmascript-6">
  import musicList from 'components/music-list/music-list'
  import {mapGetters} from 'vuex'
  import {createSong} from 'common/js/songs'
  import {getSongList} from 'api/rank'
  import {ERR_OK} from 'api/config'

  export default {
    data() {
      return {
        songs: [],
        rank: true
      }
    },
    components: {
      musicList
    },
    computed: {
      title() {
        return this.toplist.topTitle
      },
      bgImage() {
        return this.toplist.picUrl
      },
      ...mapGetters([
        'toplist'
      ])
    },
    created() {
      this._getSongList()
    },
    methods: {
      _getSongList() {
        if (!this.toplist.id) {
          this.$router.push('/rank')
        }
        getSongList(this.toplist.id).then((res) => {
          if (res.code === ERR_OK) {
            this.songs = this._normalizeSong(res.songlist)
          }
        })
      },
      _normalizeSong(list) {
        const ret = []
        list.forEach((item) => {
          const musicData = item.data
          if (musicData.songid && musicData.albumid) {
            ret.push(createSong(musicData))
          }
        })
        return ret
      }
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s ease

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
