import axios from 'axios' // axios请求
import { Toast, Dialog } from 'vant' // vant
import store from '@/store' // 状态管理
// import { getToken } from '@/utils/auth' // 获取token

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API || '', // url = base url + request url
  // withCredentials: true, // cross-origin 设置
  // headers: {
  //   'Content-Type': 'application/x-www-form-urlencoded'
  // },
  timeout: 20000 // 接口超时时间
})
// eslint-disable-next-line
let pending = [] // 声明一个数组用于存储每个请求的取消函数和axios标识
// eslint-disable-next-line
let cancelToken = axios.CancelToken
// eslint-disable-next-line
let removePending = (config) => {
  // eslint-disable-next-line
  for (let i in pending) {
    if (pending[i].url === service.defaults.baseURL + config.url) {
      // 在当前请求在数组中存在时执行取消函数
      pending[i].f('cancelToken') // 执行取消操作
      pending.splice(i, 1) // 根据具体情况决定是否在这里就把pending去掉
    }
  }
}
let jump = null
// request interceptor 请求拦截器
service.interceptors.request.use(
  (config) => {
    jump = config.jump || null
    // 判断token是否存在
    // if (store.getters.token) {
    //   config.headers['X-Token'] = getToken()
    // }

    // 防重复请求

    removePending(config) // 在一个axios发送前执行一下判定操作，在removePending中执行取消操作
    // eslint-disable-next-line
    config.cancelToken = new cancelToken(function executor(c) {
      // 本次axios请求的配置添加cancelToken
      pending.push({
        url: service.defaults.baseURL + config.url,
        f: c
      })
      // 将本次的url添加到pending中，因此对于某个url第一次发起的请求不会被取消，因为还没有配置取消函数
    })
    return Promise.resolve(config)
  },
  (error) => {
    // 请求失败处理
    return Promise.reject(error)
  }
)

// response interceptor 响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data

    if (jump !== null) {
      return res
    }
    // 拦截返回码不是'0'
    if (res.code !== '0') {
      Toast({
        message: res.desc || 'Error',
        type: 'text',
        duration: 5 * 1000
      })

      // -3: 登录过期;
      if (res.code === '-2' || res.code === '-3') {
        // 登录过期，取消后面的请求
        for (const i in pending) {
          // eslint-disabled-line
          if (pending[i].url) {
            // 在当前请求在数组中存在时执行取消函数
            pending[i].f('cancelToken') // 执行取消操作
            // pending.splice(i, 1) // 根据具体情况决定是否在这里就把pending去掉
          }
        }
        // 重新登录
        Dialog.confirm('登录过期，请重新登录', '登录过期', {
          confirmButtonText: '登录',
          showCancelButton: false,
          showClose: false,
          closeOnClickModal: false,
          closeOnPressEscape: false,
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      if (res.code === '900404') {
        return Promise.reject(res)
      }
      if (res.code === '900405') {
        // 活动已开始，无法编辑
        return Promise.reject(res)
      }
      return Promise.reject(new Error(res.desc || 'Error'))
    } else {
      return res
    }
  },
  (error) => {
    const response = error.response
    const info = response.data
    if (error.message !== 'cancelToken') {
      // 取消请求的提示
      return Promise.reject(error)
    }
    if (response.status === 401 && info.status === 40001) {
      Dialog({ title: '禁止', message: info.message, type: 'error', duration: 2 * 1000 })
      return Promise.reject('error')
    }
    if (response.status === 403) {
      Dialog({ title: '禁止', message: info.message, type: 'error', duration: 2 * 1000 })
      return Promise.reject('error')
    }
    if (info.status === 30101) {
      Dialog({ title: '失败', message: info.message, type: 'error', duration: 2 * 1000 })
      return Promise.reject('error')
    }
    if (response.status === 504) {
      Toast({ message: '后端服务异常，请联系管理员！', type: 'fail', duration: 5 * 1000 })
      return Promise.reject(error)
    }
    if (info.error === 'unauthorized') {
      Toast({ message: '未经授权，请联系后台管理员', type: 'fail', duration: 5 * 1000 })
      return Promise.reject(error)
    }
    Toast({
      message: error.desc,
      type: 'fail',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
