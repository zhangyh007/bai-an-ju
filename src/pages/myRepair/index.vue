<template>
  <div class="myRepair">
    <van-nav-bar title="我的报修" />
    <van-list
      v-model:loading="state.loading"
      :finished="state.finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in state.list" :key="item" :title="item" />
    </van-list>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { List, Cell, NavBar } from 'vant'
export default {
  components: {
    VanList: List,
    VanCell: Cell,
    VanNavBar: NavBar
  },
  setup() {
    const state = reactive({
      list: [],
      loading: false,
      finished: false
    })

    const onLoad = () => {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          state.list.push(state.list.length + 1)
        }

        // 加载状态结束
        state.loading = false

        // 数据全部加载完成
        if (state.list.length >= 10) {
          state.finished = true
        }
      }, 1000)
    }

    return {
      state,
      onLoad
    }
  }
}
</script>

<style>
.myRepair {
  min-height: 100%;
}
</style>
