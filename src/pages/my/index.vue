<template>
  <div class="my">
    <van-button class="mar-20" plain size="large" @click="navigateTo('/userInfo')">
      个人资料
    </van-button>
    <van-button class="mar-20" plain size="large" @click="navigateTo('/addRepair')">
      我的报修
    </van-button>
    <van-button class="mar-20" plain size="large" @click="navigateTo('/addComplaint')">
      我的投诉
    </van-button>
  </div>
</template>

<script>
import { Button } from 'vant'
import { useRouter } from 'vue-router'

export default {
  name: 'My',
  components: {
    VanButton: Button
  },
  setup() {
    const router = useRouter()
    const navigateTo = (path) => {
      if (path) {
        router.push(path)
      }
    }
    return {
      navigateTo
    }
  }
}
</script>

<style>
.mar-20 {
  margin-bottom: 20px;
}
.my {
  min-height: 100%;
  background-color: #fcfcfc;
}
</style>
