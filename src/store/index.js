import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './action'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'
// vuex 的插件   每次修改 state  会在控制台打印logger 当前的state  next state是什么
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
// vuex开启production模式下的调试工具  线上会自动关闭
export default new Vuex.Store({
  // 单例模式
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
