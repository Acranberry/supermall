import {
  ADD_COUNTER,
  ADD_TO_CART
}from './mutation-types'

export default {
  // mutations唯一的目的就是修改state中状态
  // mutations中的每个方法尽可能完成的事件比较单一
  [ADD_COUNTER](state, payload){
    payload.count++
  },
  [ADD_TO_CART](state, payload){
    state.cartList.push(payload)
  }

  // 数组常用的方法：push/pop/unshift/sort/reverse/map/filter/reduce/join
}
