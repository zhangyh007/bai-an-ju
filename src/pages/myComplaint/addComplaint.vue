<template>
  <div class="new-complaint">
    <van-form class="form" label-width="7.2em" @submit="onSubmit">
      <van-field
        v-model="state.username"
        name="username"
        label="投诉人"
        placeholder="请输入投诉人"
        maxlength="5"
        :rules="[{ required: true, message: '请输入投诉人' }]"
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
        v-model="state.respondent"
        type="text"
        name="respondent"
        label="被投诉人/项目"
        placeholder="请输入被投诉人"
        maxlength="11"
        :rules="[{ required: true, message: '请输入被投诉人' }]"
      />
      <van-field
        v-model="state.complaintContent"
        type="textarea"
        name="complaintContent"
        label="投诉内容"
        placeholder="请输入投诉内容"
        :rules="[{ required: true, message: '请输入投诉内容' }]"
        rows="1"
        autosize
      />
      <van-field name="uploader" label="附件" style="margin-bottom: 10px">
        <template #input>
          <van-uploader v-model="state.remark" />
        </template>
      </van-field>
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
import { Button, Form, Field, Uploader } from 'vant'
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import dayjs from 'dayjs'
export default {
  name: 'NewRepair',
  components: {
    VanButton: Button,
    VanForm: Form,
    VanField: Field,
    VanUploader: Uploader
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
.form {
  flex-shrink: 0;
  min-height: 100%;
}
.new-complaint {
  min-height: 100%;
  padding-top: 20px;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
}
.footer {
  width: 100%;
  padding: 0 15px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: calc(100vh - 400px);
}
</style>
