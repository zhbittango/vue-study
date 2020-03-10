import { request } from './request'

export function getDetailTopImg(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}