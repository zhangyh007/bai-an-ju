<template>
  <div class="login">
    <div class="content">
      <header class="header">商户认证</header>
      <van-form ref="form" class="form">
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
          style="margin-bottom: 10px;"
          maxlength="11"
          :rules="[{ required: true, message: '请输入手机号码' }]"
        />
      </van-form>
    </div>
    <footer class="footer">
      <van-button
        type="primary"
        size="large"
        color="#fe9505"
        style="height: 40px"
        native-type="submit"
        @click="onSubmit"
      >
        确定
      </van-button>
    </footer>
  </div>
</template>

<script>
import { Button, Form, Field } from 'vant'
import { useRouter } from 'vue-router'
import { reactive, ref } from 'vue'
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
    const form = ref(null)
    const goLogin = () => {
      router.push('/login')
    }
    const onSubmit = () => {
      form.value.validate().then(() => {
        window.localStorage.username = state.username
        window.localStorage.phone = state.phone
        router.push('/my')
      }).catch(err => {
        console.log(err)
      })

    }
    return {
      state,
      goLogin,
      onSubmit,
      form
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  min-height: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  flex-shrink: 0;
  margin-bottom: 20px;
}

.footer {
  width: 100%;
  padding: 0 10%;
  padding-bottom: 20px;
  flex-shrink: 0;
}
</style>
