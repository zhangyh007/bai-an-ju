<template>
  <div class="home">
    <header class="header">
      <img class="img" src="@/assets/img/icon1.png" alt="" />
    </header>
    <div class="content">
      <p class="item">您好！本功能需要先进性<strong class="color">身份认证!</strong></p>
      <p class="item">认证后，即可享受以下服务</p>
      <p class="item">1、查看的会员信息</p>
      <p class="item">2、进行房屋问题的在线报修</p>
      <p class="item">3、查看您的报修进度信息</p>
      <p class="item">4、费用缴付推送</p>
    </div>
    <footer class="footer">
      <van-button type="primary" size="large" color="#fe9505" style="height: 40px" @click="goLogin">
        立即进行身份认证
      </van-button>
    </footer>
  </div>
</template>

<script>
import { Button } from 'vant'
import { useRouter } from 'vue-router'
export default {
  name: 'Home',
  components: {
    VanButton: Button
  },
  setup() {
    const router = useRouter()
    function goLogin() {
      router.push('/login')
    }
    return {
      goLogin
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  min-height: 100%;
  background-color: #ffffff;
}
.header {
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  .img {
    width: 160px;
  }
}
.content {
  color: #666666;
  .item {
    padding-left: 10%;
    line-height: 30px;
  }
}
.color {
  color: #851a1c;
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
