<template>
  <div class="new-repair">
    <van-form class="form" @submit="onSubmit">
      <van-field
        v-model="state.username"
        name="username"
        label="报修人"
        placeholder="请输入报修人姓名"
        maxlength="5"
        :rules="[{ required: true, message: '请输入报修人姓名' }]"
      />
      <van-field
        v-model="state.date"
        type="text"
        name="date"
        label="报修日期"
        placeholder="请输入报修日期"
        maxlength="20"
        :rules="[{ required: true, message: '请输入报修日期' }]"
      />
      <van-field
        v-model="state.phone"
        type="phone"
        name="phone"
        label="联系电话"
        placeholder="请输入联系电话"
        maxlength="11"
        :rules="[{ required: true, message: '请输入联系电话' }]"
      />
      <van-field
        v-model="state.projectName"
        type="text"
        name="projectName"
        label="项目名称"
        placeholder="请输入项目名称"
        maxlength="11"
        :rules="[{ required: true, message: '请输入项目名称' }]"
      />
      <van-field
        v-model="state.projectCharge"
        type="text"
        name="projectCharge"
        label="项目负责人"
        placeholder="请输入项目负责人"
        maxlength="11"
        :rules="[{ required: true, message: '请输入项目负责人' }]"
      />
      <van-field
        v-model="state.address"
        type="textarea"
        name="address"
        label="报修地址"
        placeholder="请输入报修地址"
        :rules="[{ required: true, message: '请输入报修地址' }]"
        rows="1"
        autosize
      />
      <van-field
        v-model="state.repairProject"
        type="text"
        name="repairProject"
        label="报修项目"
        placeholder="请输入报修项目"
        :rules="[{ required: true, message: '请输入报修项目' }]"
      />
      <van-field
        v-model="state.repairContent"
        type="textarea"
        name="repairContent"
        label="报修内容"
        placeholder="请输入报修内容"
        :rules="[{ required: true, message: '请输入报修内容' }]"
        rows="1"
        autosize
        style="margin-bottom: 10px"
      />
      <footer class="footer">
        <van-button
          type="primary"
          size="normal"
          color="#fe9505"
          style="width: 120px"
          native-type="submit"
        >
          提交
        </van-button>
        <van-button
          type="primary"
          size="normal"
          color="#cccccc"
          style="width: 120px"
          @click="goBack"
        >
          取消
        </van-button>
      </footer>
    </van-form>
  </div>
</template>

<script>
import { Button, Form, Field } from 'vant'
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import dayjs from 'dayjs'
export default {
  name: 'NewRepair',
  components: {
    VanButton: Button,
    VanForm: Form,
    VanField: Field
  },
  setup() {
    const router = useRouter()
    const state = reactive({
      username: localStorage.username || '',
      phone: localStorage.phone || '',
      date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      projectName: '水电部',
      projectCharge: '周普军',
      address: '深圳市福田区北环大道青海大厦',
      repairProject: '工程维修',
      repairContent: '水管破裂',

    })
    const onSubmit = (val) => {
      console.log(val)
      router.push('/my')
    }
    const goBack = () => {
      router.go(-1)
    }
    return {
      state,
      onSubmit,
      goBack
    }
  }
}
</script>

<style lang="scss" scoped>
.new-repair {
  min-height: 100%;
  padding-top: 20px;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
}
.form {
  flex-shrink: 0;
  min-height: 100%;
}

.footer {
  width: 100%;
  padding: 0 15px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: calc(100vh - 470px);
}
</style>
