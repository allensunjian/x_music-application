export const singer = state => state.singer

export const playing = state => state.playing

export const fullScreen = state => state.fullScreen

export const playList = state => state.playList

export const sequenceList = state => state.sequenceList

export const mode = state => state.mode

export const currentIndex = state => state.currentIndex

export const currentSong = (state) => {
  return state.playList[state.currentIndex] || {}
}
// getters  不仅可以作为代理 还可以作为计算属性  这里直接可以计算出当前播放的歌曲
export const disc = state => state.disc

export const toplist = state => state.toplist

export const searchHistory = state => state.searchHistory
