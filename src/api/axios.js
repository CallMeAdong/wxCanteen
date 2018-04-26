import axios from 'axios'
import { Message } from 'iview'

axios.interceptors.response.use(res => {
  if (res.data.code === '1000') {
    return res
  } else {
    Message.error(res.data.message)
  }
}, (err) => {
  Message.error('加载数据失败')
  return Promise.reject(err)
})

export default axios
