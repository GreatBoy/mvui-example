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
import ScrollY from './components/scrollY.vue';
import ScrollX from './components/scrollX.vue';
import PullRefresh from './components/pullRefresh.vue';
import PullRefreshWindow from './components/pullRefreshWindow.vue';
import PullRefreshElem from './components/pullRefreshElem.vue';
import PullRefreshScroll from './components/pullRefreshScroll.vue';
import PullLoad from './components/pullLoad.vue';
import PullLoadWindow from './components/pullLoadWindow.vue';
import PullLoadElem from './components/pullLoadElem.vue';
import PullLoadScroll from './components/pullLoadScroll.vue';
import Slider from './components/slider.vue';
import SliderY from './components/sliderY.vue';
import SliderX from './components/sliderX.vue';
import Uploader from './components/uploader.vue';
import Page from './components/page.vue';
// import LazyLoad from './components/lazyLoad.vue';


//引入组件
import App from './app.vue';
import home from './components/home.vue';


Vue.use(VueRouter);


var app=Vue.extend(App);

var router=new VueRouter();

//配置路由
router.map({
  '/home': {
    component: home
  },
  '/button': {
    component: buttons
  },
  '/icon': {
    component: icons
  },
  '/tip': {
    component: tip
  },
  '/gotop': {
    component: gotop
  },
  '/loadding': {
    component: loadding
  },
  '/modal': {
    component: modal
  },
  '/alert': {
    component: alert
  },
  '/progress': {
    component: progress
  },
  '/circle': {
    component: circle
  },
  // 表单
  '/inputbox': {
    component: inputbox
  },
  '/radio': {
    component: radio
  },
  '/checkbox': {
    component: checkbox
  },
  '/selector': {
    component: selector
  },
  '/switch': {
    component: Switch
  },
  '/accordion': {
    component: Accordion
  },
  '/scroll': {
    component: Scroll
  },
  '/pullRefresh': {
    component: PullRefresh
  },
  '/pullRefreshWindow': {
    component: PullRefreshWindow
  },
  '/pullRefreshElem': {
    component: PullRefreshElem
  },
  '/pullRefreshScroll': {
    component: PullRefreshScroll
  },
  '/pullLoad': {
    component: PullLoad
  },
  '/pullLoadWindow': {
    component: PullLoadWindow
  },
  '/pullLoadElem': {
    component: PullLoadElem
  },
  '/pullLoadScroll': {
    component: PullLoadScroll
  },
  '/slider': {
    component: Slider
  },
  '/uploader': {
    component: Uploader
  },
  '/page': {
    component: Page
  },
  '/scrollX': {
    component: ScrollX
  },
  '/scrollY': {
    component: ScrollY
  },
  '/sliderX': {
    component: SliderX
  },
  '/sliderY': {
    component: SliderY
  },

});


//设置默认情况下打开的页面
router.redirect({
  '/':'home'
});

router.start(app,'#app');

//暴露路由接口调试
window.router = router;







