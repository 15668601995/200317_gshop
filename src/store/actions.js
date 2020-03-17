import {RECEIVE_USER_INFO} from './mutation-types'

export default {
  reCodeUserInfo({commit},userInfo) {
    commit(RECEIVE_USER_INFO,{userInfo})
  }
}
