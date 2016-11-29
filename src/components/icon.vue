<template>  
    <div class="body-wrapper icon-wrapper wrapper-example-icon">
        <Hometitle>Icon</Hometitle>
        <div class="wrapper-example">
            
            <li>
                <Icon class="mv-icon-arrow-down-c"></Icon>
                <br/>
                <span>mv-icon-arrow-down-c</span>
            </li>
            <li>
                <Icon class="mv-icon-arrow-up-c"></Icon>
                <br/>
                <span>mv-icon-arrow-up-c</span>
            </li>
            <li>
                <Icon class="mv-icon-add"></Icon>
                <br/>
                <span>mv-icon-add</span>
            </li>
            <li>
                <Icon class="mv-icon-reduce"></Icon>
                <br/>
                <span>mv-icon-reduce</span>
            </li>


            <li>
                <Icon class="mv-icon-round-add"></Icon>
                <br/>
                <span>mv-icon-round-add</span>
            </li>
            <li>
                <Icon class="mv-icon-round-add-fill"></Icon>
                <br/>
                <span>mv-icon-round-add-fill</span>
            </li>
            <li>
                <Icon class="mv-icon-round-close"></Icon>
                <br/>
                <span>mv-icon-round-close</span>
            </li>
            <li>
                <Icon class="mv-icon-round-close-fill"></Icon>
                <br/>
                <span>mv-icon-round-close-fill</span>
            </li>


           




            <li>
                <Icon class="mv-icon-square-check"></Icon>
                <br/>
                <span>mv-icon-square-check</span>
            </li>
            <li>
                <Icon class="mv-icon-square"></Icon>
                <br/>
                <span>mv-icon-square</span>
            </li>
            <li>
                <Icon class="mv-icon-square-check-fill"></Icon>
                <br/>
                <span>mv-icon-square-check-fill</span>
            </li>
            <li>
                <Icon class="mv-icon-notification"></Icon>
                <br/>
                <span>mv-icon-notification</span>
            </li>



            <li>
                <Icon class="mv-icon-notificationfill"></Icon>
                <br/>
                <span>mv-icon-notificationfill</span>
            </li>
            <li>
                <Icon class="mv-icon-round-check-fill"></Icon>
                <br/>
                <span>mv-icon-round-check-fill</span>
            </li>
            <li>
                <Icon class="mv-icon-round"></Icon>
                <br/>
                <span>mv-icon-round</span>
            </li>
            <li>
                <Icon class="mv-icon-round-radio"></Icon>
                <br/>
                <span>mv-icon-round-radio</span>
            </li>



            <li>
                <Icon class="mv-icon-favor"></Icon>
                <br/>
                <span>mv-icon-favor</span>
            </li>
            <li>
                <Icon class="mv-icon-favor-fill"></Icon>
                <br/>
                <span>mv-icon-favor-fill</span>
            </li>
            <li>
                <Icon class="mv-icon-close"></Icon>
                <br/>
                <span>mv-icon-close</span>
            </li>
            <li>
                <Icon class="mv-icon-check"></Icon>
                <br/>
                <span>mv-icon-check</span>
            </li>

    

            <li>
                <Icon class="mv-icon-caret-top"></Icon>
                <br/>
                <span>mv-icon-caret-top</span>
            </li>
            <li>
                <Icon class="mv-icon-caret-right"></Icon>
                <br/>
                <span>mv-icon-caret-right</span>
            </li>
            <li>
                <Icon class="mv-icon-caret-left"></Icon>
                <br/>
                <span>mv-icon-caret-left</span>
            </li>
            <li>
                <Icon class="mv-icon-caret-bottom"></Icon>
                <br/>
                <span>mv-icon-caret-bottom</span>
            </li>

    

            <li>
                <Icon class="mv-icon-arrow-top"></Icon>
                <br/>
                <span>mv-icon-loading-3</span>
            </li>
            <li>
                <Icon class="mv-icon-arrow-bottom"></Icon>
                <br/>
                <span>mv-icon-loading-4</span>
            </li>
            <li>
                <Icon class="mv-icon-arrow-left"></Icon>
                <br/>
                <span>mv-icon-arrow-left</span>
            </li>
            <li>
                <Icon class="mv-icon-arrow-right"></Icon>
                <br/>
                <span>mv-icon-arrow-right</span>
            </li>


            <li>
                <Icon class="mv-icon-loading-1"></Icon>
                <br/>
                <span>mv-icon-loading-1</span>
            </li>
            <li>
                <Icon class="mv-icon-loading-2"></Icon>
                <br/>
                <span>mv-icon-loading-2</span>
            </li>
            <li>
                <Icon class="mv-icon-loading-3"></Icon>
                <br/>
                <span>mv-icon-loading-3</span>
            </li>
            <li>
                <Icon class="mv-icon-loading-4"></Icon>
                <br/>
                <span>mv-icon-loading-4</span>
            </li>



            <li>
                <Icon class="mv-icon-loading-5"></Icon>
                <br/>
                <span>mv-icon-loading-5</span>
            </li>
            <li>
                <Icon class="mv-icon-loading-6"></Icon>
                <br/>
                <span>mv-icon-loading-2</span>
            </li>
            <li>
                <Icon class="mv-icon-loading-7"></Icon>
                <br/>
                <span>mv-icon-loading-7</span>
            </li>
            <li>
                <Icon class="mv-icon-home"></Icon>
                <br/>
                <span>mv-icon-home</span>
            </li>
    
        </div>
    </div>
</template> 
<script>
    import Hometitle from './common/hometitle.vue';
    import { Icon } from 'mvui';
    export default{   
        components: { 
            Hometitle,
            Icon,
        },
        data(){
            return {
                test: {
                    'font-size': '12px',
                    'color': 'red'
                }
            }
        }
    }
</script>
<style lang="less">
    .wrapper-example-icon .wrapper-example{
        li{
            box-sizing: border-box;
            -webkit-box-sizing: border-box;
            width: 25%;
            color: #5e6d82;
            float: left;
            text-align: center;
            border-right: 1px solid #eee ;
            border-bottom: 1px solid #eee ;
            background: white;
            height: 0.9rem;
            padding: 0.1rem 0px;
            &:nth-child(4n+4){
                border-right: 0px;
            }
            span{
                font-size: 0.11rem;
            }
        }
    }
</style>