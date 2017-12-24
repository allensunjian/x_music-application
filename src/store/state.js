import {playMode} from 'common/js/config'

const state = {
  singer: {},
  playing: false,
  // 播放状态
  fullScreen: false,
  // 播放器全屏状态
  playList: [],
  // 播放列表
  sequenceList: [],
  // 顺序播放列表,因为播放器有三种播放状态 顺序播放 随机播放 单曲循环
  // 所以需要 两个列表来管理
  mode: playMode.sequence,
  // 播放模式
  currentIndex: -1,
  // 当前播放的歌曲下标
  disc: {
    // 歌单对象
  },
  toplist: {
    // 排行榜状态数据
  },
  searchHistory: []
}

export default state
