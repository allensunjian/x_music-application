import jsonp from 'common/js/jsonp'
import {commonParams, options} from 'api/config'

export function getRank() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'
  const data = Object.assign({}, commonParams, {
    g_tk: 5381,
    uin: 0,
    notice: 0,
    platform: 'h5',
    needNewCode: 1,
    _: +new Date()
  })
  return jsonp(url, data, options)
}

export function getSongList(topid) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'

  const data = Object.assign({}, commonParams, {
    topid: topid,
    type: 'top',
    page: 'detail',
    _: +new Date(),
    needNewCode: 1,
    platform: 'h5',
    notice: 0,
    tpl: 3,
    format: 'json',
    uin: 0,
    g_tk: 5381
  })
  return jsonp(url, data, options)
}
