<template>
  <div class="user-info">
    <van-cell title="用户信息" size="large" />
    <van-form>
      <van-field
        v-model="state.username"
        name="用户名"
        label="用户名"
        placeholder="请输入您的姓名"
        maxlength="5"
        readonly
        :rules="[{ required: true, message: '请输入您的姓名' }]"
      />
      <van-field
        v-model="state.phone"
        type="phone"
        name="手机号"
        label="手机号"
        placeholder="请输入手机号码"
        maxlength="11"
        readonly
        :rules="[{ required: true, message: '请输入手机号码' }]"
      />
      <footer class="footer">
        <van-button
          type="primary"
          size="large"
          color="#fe9505"
          style="height: 40px"
          @click="logout"
        >
          退出登录
        </van-button>
      </footer>
    </van-form>
  </div>
</template>

<script>
import { Button, Form, Field, Cell } from 'vant'
import { reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'UserInfo',
  components: {
    VanButton: Button,
    VanForm: Form,
    VanField: Field,
    VanCell: Cell
  },
  setup() {
    const router = useRouter()
    const state = reactive({
      username: '',
      phone: ''
    })
    // 退出登录
    const logout = () => {
      window.localStorage.username = ''
      window.localStorage.phone = ''
      router.push('/login')
    }
    onMounted(() => {
      state.username = window.localStorage.username
      state.phone = window.localStorage.phone
    })
    return {
      state,
      logout
    }
  }
}
</script>

<style lang="scss">
.user-info {
  min-height: 100%;
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
