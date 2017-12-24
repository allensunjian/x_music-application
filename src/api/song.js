import {commonParams} from './config'
import axios from 'axios'

export function getLyric(cid) {
  const url = 'api/lyric'

  const data = Object.assign({}, commonParams, {
    musicid: cid,
    platform: 'h5',
    songtype: 0,
    g_tk: 5381,
    nobase64: 1,
    hostUin: 0,
    needNewCode: 0,
    categoryId: 10000000,
    _: +new Date(),
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
