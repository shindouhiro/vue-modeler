import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'Unocss/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`
    }
  },
  plugins: [
    vue({
      reactivityTransform: true //https://juejin.cn/post/7052522319066955790
    }),
    Unocss(),
    AutoImport({
      imports: ['vue']
    }),
    Components({
      dts: true, //支持自定义文件的路径
      resolvers: [AntDesignVueResolver()]
    })
  ]
})
