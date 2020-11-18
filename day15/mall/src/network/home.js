import { request } from './request'

export function getHomeMultidata() {
  return request({
    url: '/banner.php'
    // url: '/home/multidata',
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/data.php',
    // url: '/home/data',
    params: {
      type,
      page
    }
  })
}