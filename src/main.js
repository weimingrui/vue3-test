import { createApp, h, } from 'vue'
import page from 'page'
import routes from './routes'
import '@/assets/style/common.less'

const DefaultComponent = {
  render: () => h('div', 'Loading…')
}

const SimpleRouterApp = {
  data: () => ({
    ViewComponent: null
  }),

  render () {
    return h(this.ViewComponent || DefaultComponent)
  },

  created () {
    for (let route in routes) {
      page(route, () => {
        // this.ViewComponent = markRaw(require('./pages/' + routes[route] + '.vue').default)
        this.ViewComponent = require('./pages/' + routes[route] + '.vue').default
        
      })
    }

    page()
  }
}

createApp(SimpleRouterApp).mount('#app')
