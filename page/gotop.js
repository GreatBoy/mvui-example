
//es6加载模块  
import Vue from 'vue'  
import App from '../components/gotop.vue'  

//创建一个vue实例,挂载在body上面  
new Vue({   
    el: 'body',  
    components: { 
        App: App
    }  
});
