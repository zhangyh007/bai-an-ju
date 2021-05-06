<template>
  <div class="login">
    <header class="header">商户认证</header>
    <div class="content">
      <van-form @submit="onSubmit">
        <van-field
          v-model="state.username"
          name="username"
          label="姓名"
          placeholder="请输入您的姓名"
          maxlength="5"
          :rules="[{ required: true, message: '请输入您的姓名' }]"
        />
        <van-field
          v-model="state.phone"
          type="phone"
          name="phone"
          label="手机号"
          placeholder="请输入手机号码"
          maxlength="11"
          :rules="[{ required: true, message: '请输入手机号码' }]"
        />
        <footer class="footer">
          <van-button
            type="primary"
            size="large"
            color="#fe9505"
            style="height: 40px"
            native-type="submit"
          >
            确定
          </van-button>
        </footer>
      </van-form>
    </div>
  </div>
</template>

<script>
import { Button, Form, Field } from 'vant'
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
export default {
  name: 'Login',
  components: {
    VanButton: Button,
    VanForm: Form,
    VanField: Field
  },
  setup() {
    const router = useRouter()
    const state = reactive({
      username: '',
      phone: ''
    })
    const goLogin = () => {
      router.push('/login')
    }
    const onSubmit = (val) => {
      console.log(val)
      window.localStorage.username = val.username
      window.localStorage.phone = val.phone
      router.push('/my')
    }
    return {
      state,
      goLogin,
      onSubmit
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  min-height: 100%;
  background-color: #ffffff;
}
.header {
  font-size: 36px;
  height: 250px;
  color: #fe9505;
  text-align: center;
  font-weight: bold;
  line-height: 200px;
}
.content {
  padding: 0 10%;
}

.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0 10%;
  padding-bottom: 20px;
}
</style>
