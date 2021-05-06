// !  正则验证

// 应用英文名正则, 数据库名字正则, 用户账号 允许英文,数字,中划线,下划线
export const letterNumberDashUnderlinePattern = /^[a-zA-Z0-9-_]+$/

// QQ正则
export const qqPattern = /^[1-9][0-9]{4,10}$/

// TODO 总结分组捕获
// eslint-disable-next-line
export const packageNamePattern = /^([a-zA-Z]+[\.][a-zA-Z]+)*$/
// eslint-disable-next-line
export const contextPattern = /^\/[a-zA-Z\-]*$/

// artifactId正则 数字,字母,中划线
export const numberLetterDashPattern = /^[a-zA-Z0-9-]+$/

// 允许英文,数字,下划线的正则
export const letterNumberUnderlinePattern = /^\w+$/

// 版本校验
export const versionPattern = /^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/

// 密码校验 6-16位数 仅为字母和数字
export const pswPattern = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/

// 仅为小写字母和中划线
export const letterDashPattern = /^[a-z-]+$/

// 应用名 工程名校验
export const namePattern = /^[a-z0-9][a-z0-9_-]{0,18}[a-z0-9]$/

// 手机号码验证(新增167/191号段)
export const phonePattern = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[67]|7[0135678]|9[189])\d{8}$/

// 金额校验(格式可以为浮点数)
export const amountPattern = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/

// 数字校验
export const numberPattern = /^[0-9]+$/

//浮点型数字校验  最多两位小数
export const floatPattern = /^\d+(\.\d{0,2})?$/

// 中文字符校验
export const chineseCharPattern = /[\u4e00-\u9fa5]/gm

// 邮箱校验
export const emailPattern = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/

// 身份证校验
export const idCardPattern = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/

// 邮编校验
export const zipCodePattern = /^[1-9]\d{5}(?!\d)$/

// 天数正则校验
export const dayPattern = /(^[1-9]([0-9]){0,2}?(\.[0-9]{0,1})?$)|(^(0){1,1}[0-9]*[1-9][0-9]*$)|(^[0-9]\.[0-9]{0,0}([0-9])?$)/

// 会员名中文、英文、数字验证
export const memberPattern = /^[(\u4e00-\u9fa5)0-9a-zA-Z]+$/

/**
 * 验证网址
 */
export const isRightWebsite = /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#!-]*[\w@?^=%&/~+#!-])?$/g

// 验证微信
export const wechatPattern = /^[a-zA-Z][a-zA-Z0-9_-]{5,19}$/

// 职业校验
export const jobPattern = /^[\u4e00-\u9fa5]+$/

// 全空格校验
export const allSpace = /^[ ]+$/

// 字母、数字校验
export const letterNumberPattern = /^[a-zA-Z0-9]+$/

// 中文
export const ChinesePattern = /[\u4e00-\u9fa5]/
