<template>
  <a-space style="width: 100%">
    <a-button type="primary" loading>Loading</a-button>
    <a-button type="primary" size="small" loading>Loading</a-button>
  </a-space>
  <a-space style="width: 100%">
    <a-button type="primary" :loading="loading" @mouseenter="loading = true">
      mouseenter me!
    </a-button>
    <a-button type="primary" :loading="iconLoading" @click="enterIconLoading">
      <template #icon><PoweroffOutlined /></template>
      延迟1s
    </a-button>
  </a-space>
  <a-divider />
  <a-space style="width: 100%">
    <a-button type="primary" loading />
    <a-button type="primary" shape="circle" loading />
    <a-button danger shape="round" loading />
    <a-button type="primary" @click="info">Display normal message</a-button>
  </a-space>
</template>
<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { PoweroffOutlined } from '@ant-design/icons-vue'

interface DelayLoading {
  delay: number
}

const iconLoading = ref<boolean | DelayLoading>(false)
const enterIconLoading = () => {
  iconLoading.value = { delay: 1000 }

  setTimeout(() => {
    iconLoading.value = false
  }, 6000)
}

const info = () => {
  message.info('This is a normal message')
}
const loading = ref(false)
</script>
