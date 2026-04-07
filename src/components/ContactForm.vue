<template>
  <div class="contact-form">
    <el-form
      ref="formRef"
      :model="formData"
      :rules="formRules"
      :disabled="submitting"
      @submit.prevent="handleSubmit"
    >
      <el-form-item prop="name">
        <el-input
          v-model="formData.name"
          placeholder="请输入您的姓名"
          size="large"
          :prefix-icon="User"
        />
      </el-form-item>

      <el-form-item prop="phone">
        <el-input
          v-model="formData.phone"
          placeholder="请输入您的手机号"
          size="large"
          :prefix-icon="Phone"
          maxlength="11"
          @input="handlePhoneInput"
        />
      </el-form-item>

      <el-form-item prop="service">
        <el-select
          v-model="formData.service"
          placeholder="请选择您需要的服务"
          size="large"
          style="width: 100%"
        >
          <el-option label="代理记账" value="代理记账" />
          <el-option label="税务申报" value="税务申报" />
          <el-option label="工商变更" value="工商变更" />
          <el-option label="公司注册" value="公司注册" />
          <el-option label="财税咨询" value="财税咨询" />
          <el-option label="其他" value="其他" />
        </el-select>
      </el-form-item>

      <el-form-item prop="message">
        <el-input
          v-model="formData.message"
          type="textarea"
          placeholder="请简单描述您的问题或需求（选填）"
          :rows="4"
          maxlength="500"
          show-word-limit
        />
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          size="large"
          :loading="submitting"
          class="submit-btn"
          native-type="submit"
        >
          {{ submitting ? '提交中...' : '立即提交' }}
        </el-button>
      </el-form-item>
    </el-form>

    <div class="form-tips">
      <p><el-icon><Clock /></el-icon> 工作时间：周一至周六 9:00-18:00</p>
      <p><el-icon><Phone /></el-icon> 咨询热线：138-8888-8888</p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { User, Phone, Clock } from '@element-plus/icons-vue'

const emit = defineEmits(['success'])

const formRef = ref(null)
const submitting = ref(false)
const submitted = ref(false)

const formData = reactive({
  name: '',
  phone: '',
  service: '',
  message: ''
})

const validatePhone = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入手机号'))
  } else if (!/^1[3-9]\d{9}$/.test(value)) {
    callback(new Error('请输入正确的手机号'))
  } else {
    callback()
  }
}

const formRules = {
  name: [
    { required: true, message: '请输入您的姓名', trigger: 'blur' },
    { min: 2, max: 50, message: '姓名长度在 2 到 50 个字符', trigger: 'blur' }
  ],
  phone: [
    { required: true, validator: validatePhone, trigger: 'blur' }
  ],
  service: [
    { required: true, message: '请选择您需要的服务', trigger: 'change' }
  ]
}

const handlePhoneInput = () => {
  formData.phone = formData.phone.replace(/\D/g, '')
}

const handleSubmit = async () => {
  if (!formRef.value) return

  await formRef.value.validate(async (valid) => {
    if (valid) {
      if (submitted.value) {
        ElMessage.warning('您已提交过，请勿重复提交')
        return
      }

      submitting.value = true

      try {
        await new Promise(resolve => setTimeout(resolve, 1500))

        submitted.value = true
        submitting.value = false

        ElMessage.success('提交成功！我将尽快与您联系')

        formRef.value.resetFields()

        emit('success', formData)
      } catch (error) {
        submitting.value = false
        ElMessage.error('提交失败，请稍后重试')
      }
    }
  })
}
</script>

<style lang="scss" scoped>
.contact-form {
  max-width: 400px;
  margin: 0 auto;
}

:deep(.el-input__wrapper) {
  padding: 4px 16px;
}

:deep(.el-button) {
  width: 100%;
}

.submit-btn {
  background: linear-gradient(135deg, #005A9E 0%, #0078D4 100%);
  border: none;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    background: linear-gradient(135deg, #004A8E 0%, #006EC4 100%);
  }
}

.form-tips {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #E5E5E5;

  p {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: #666666;
    margin-bottom: 8px;

    .el-icon {
      color: #005A9E;
    }
  }
}
</style>
