import {
  instance1
} from './request'

export function getHomeMultidata() {
  return instance1({
    url: '/home/multidata'
  })
}
export function getHomeGoods(type, page) {
  return instance1({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
