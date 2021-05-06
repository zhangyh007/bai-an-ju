import { Toast } from 'vant'

/**
 * @description 接口加载loading
 */
export function toastLoading() {
  return Toast.loading({
    message: '加载中...',
    forbidClick: true,
    duration: 0
  })
}
/**
 * @description 清除Toast
 */
export function toastClear() {
  return Toast.clear()
}
