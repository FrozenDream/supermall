export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      // // payload新添加的商品
      // let oldProduct = null
      // for (let item of state.cartList) {
      //   if (item.iid === payload.iid) {
      //     oldProduct = item
      //   }
      // }
      // 查找数组之前数组中是否有该商品 find()
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

      // // 判断oldProduct
      // if (oldProduct) {
      //   oldProduct.count += 1
      // } else {
      //   payload.count = 1
      //   state.cartList.push(payload)
      // }

      if (oldProduct) { // 数量+1
        // oldProduct.count += 1
        context.commit('addCounter', oldProduct)
        resolve('当前商品数量+1')
      } else { // 添加新的商品
        payload.count = 1
        // context.state.cartList.push(payload)
        context.commit('addTocart', payload)
        resolve('添加了新的商品')
      }
    })
  }
}
