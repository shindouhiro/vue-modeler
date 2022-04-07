<template>
  <div ref="lfRef"></div>
</template>
<script lang="ts" setup>
import { onMounted, ref, nextTick, unref } from 'vue'
import type { Ref } from 'vue'
import LogicFlow from '@logicflow/core'
// import '@logicflow/core/dist/style/index.css'
// import '@logicflow/extension/lib/style/index.css'
const lf = ref(null) as Ref<LogicFlow | null>
const lfRef = ref(null)
const data = {
  // 节点
  nodes: [
    {
      id: 50,
      type: 'rect',
      x: 100,
      y: 150,
      text: '你好'
    },
    {
      id: 21,
      type: 'circle',
      x: 300,
      y: 150
    }
  ],
  // 边
  edges: [
    {
      type: 'polyline',
      sourceNodeId: 50,
      targetNodeId: 21
    }
  ]
}

async function init() {
  await nextTick()
  const lfEl = unref(lfRef)
  if (!lfEl) {
    return
  }
  lf.value = new LogicFlow({
    container: lfEl,
    width: 500,
    height: 500
  })
  onRender()
}
function onRender() {
  lf.value?.render(data)
}
onMounted(init)
</script>
