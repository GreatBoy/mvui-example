import Vue from 'vue';
import VueRouter from 'vue-router';



// 组件
import buttons from './components/button.vue';
import icons from './components/icon.vue';
import tip from './components/tip.vue';
import gotop from './components/gotop.vue';
import loadding from './components/loadding.vue';
import modal from './components/modal.vue';
import alert from './components/alert.vue';
import progress from './components/progress.vue';
import circle from './components/circle.vue';
// 表单
import inputbox from './components/inputbox.vue';
import radio from './components/radio.vue';
import checkbox from './components/checkbox.vue';
import selector from './components/selector.vue';
import Switch from './components/switch.vue';

// View
import Accordion from './components/accordion.vue';
import Scroll from './components/scroll.vue';
import PullRefresh from './components/pullRefresh.vue';
import PullRefreshWindow from './components/pullRefreshWindow.vue';
import PullRefreshElem from './components/pullRefreshElem.vue';
import PullRefreshScroll from './components/pullRefreshScroll.vue';
import PullLoad from './components/pullLoad.vue';
import PullLoadWindow from './components/pullLoadWindow.vue';
import PullLoadElem from './components/pullLoadElem.vue';
import PullLoadScroll from './components/pullLoadScroll.vue';
import Slider from './components/slider.vue';
import Uploader from './components/uploader.vue';
import Page from './components/page.vue';
import LazyLoad from './components/lazyLoad.vue';


//引入组件
import App from './app.vue';
import home from './components/home.vue';


Vue.use(VueRouter);


//var app=Vue.extend(App);

var router=new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
      { 
        path: '/', 
        component: home
      },
      { 
        path: '/button', 
        component: buttons
      },
      { 
        path: '/icon', 
        component: icons
      },
      { 
        path: '/tip', 
        component: tip
      },
      { 
        path: '/gotop', 
        component: gotop
      },
      { 
        path: '/loadding', 
        component: loadding
      },
      { 
        path: '/modal', 
        component: modal
      },
      { 
        path: '/alert', 
        component: alert
      },
      { 
        path: '/progress', 
        component: progress
      },
      { 
        path: '/circle', 
        component: circle
      },
      { 
        path: '/inputbox',
        component: inputbox
      },
      { 
        path: '/radio', 
        component: radio
      },
      { 
        path: '/checkbox', 
        component: checkbox
      },
      { 
        path: '/selector', 
        component: selector
      },
      { 
        path: '/switch', 
        component: Switch
      },
      { 
        path: '/accordion', 
        component: Accordion
      },
      { 
        path: '/scroll', 
        component: Scroll
      },
      { 
        path: '/pullrefresh', 
        component: PullRefresh
      },
      { 
        path: '/pullrefreshwindow', 
        component: PullRefreshWindow
      },
      { 
        path: '/PullRefreshElem', 
        component: PullRefreshElem
      },
      { 
        path: '/PullRefreshScroll', 
        component: PullRefreshScroll
      },
      { 
        path: '/PullLoad', 
        component: PullLoad
      },
      { 
        path: '/PullLoadWindow', 
        component: PullLoadWindow
      },
      { 
        path: '/PullLoadElem', 
        component: PullLoadElem
      },
      { 
        path: '/PullLoadScroll', 
        component: PullLoadScroll
      },
      { 
        path: '/Slider', 
        component: Slider
      },
      { 
        path: '/Uploader', 
        component: Uploader
      },
      { 
        path: '/Page', 
        component: Page
      },
      { 
        path: '/LazyLoad', 
        component: LazyLoad
      }
    ]
});


// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  router: router,
  render: h => h(App)
  // components: { firstcomponent, secondcomponent }
}).$mount('#app')

// // //设置默认情况下打开的页面
// // router.redirect({
// //   '/':'home'
// // });

// router.start(app,'#app');

// //暴露路由接口调试
// window.router = router;