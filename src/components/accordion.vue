<template>
    <div class="body-wrapper">
        <Hometitle>Accordion</Hometitle>
        <div class="wrapper-example wrapper-example-accordion">
            <div class="wrapper-area">
                <div class="wrapper-area-title">默认</div>
                <div class="wrapper-area-content">
                    <Accordion>
                        <Panel>
                            <div slot="title">测试啦啦啦</div>
                            
                          她坦白了我们所虚伪的 她单纯了我们所复杂的
                          五年以来…
                          5年的等待，是个漫长也是耗损的过程。
                          看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！
                          她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，
                          这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，
                          是我们唯一相信且期待杨乃文的理由。
                        </Panel>
                        <Panel>
                            <div slot="title">测试啦啦啦</div>
                            
                              她坦白了我们所虚伪的 她单纯了我们所复杂的
                              五年以来…
                              5年的等待，是个漫长也是耗损的过程。
                              看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！
                              她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，
                              这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，
                              是我们唯一相信且期待杨乃文的理由。
                        </Panel>
                    </Accordion>
                </div>
            </div>
             <div class="wrapper-area">
                <div class="wrapper-area-title">accordion</div>
                <div class="wrapper-area-content">
                    <Accordion accordion>
                        <Panel>
                            <div slot="title">测试啦啦啦</div>
                            
                          她坦白了我们所虚伪的 她单纯了我们所复杂的
                          五年以来…
                          5年的等待，是个漫长也是耗损的过程。
                          看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！
                          她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，
                          这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，
                          是我们唯一相信且期待杨乃文的理由。
                        </Panel>
                        <Panel>
                            <div slot="title">测试啦啦啦</div>
                            
                              她坦白了我们所虚伪的 她单纯了我们所复杂的
                              五年以来…
                              5年的等待，是个漫长也是耗损的过程。
                              看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！
                              她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，
                              这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，
                              是我们唯一相信且期待杨乃文的理由。
                        </Panel>
                    </Accordion>
                </div>
            </div>

            <div class="wrapper-area">
                <div class="wrapper-area-title">默认打开</div>
                <div class="wrapper-area-content">
                    <Accordion accordion>
                        <Panel :open="true">
                            <div slot="title">测试啦啦啦</div>
                          她坦白了我们所虚伪的 她单纯了我们所复杂的
                          五年以来…
                          5年的等待，是个漫长也是耗损的过程。
                          看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！
                          她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，
                          这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，
                          是我们唯一相信且期待杨乃文的理由。
                        </Panel>
                        <Panel>
                            <div slot="title">测试啦啦啦</div>
                            
                              她坦白了我们所虚伪的 她单纯了我们所复杂的
                              五年以来…
                              5年的等待，是个漫长也是耗损的过程。
                              看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！
                              她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，
                              这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，
                              是我们唯一相信且期待杨乃文的理由。
                        </Panel>
                    </Accordion>
                </div>
            </div>
            
            
        </div>
    </div>
</template>
<script>
import Hometitle from './common/hometitle.vue';
import {
    Panel,
    Accordion,
    Button
} from 'mvui';
export default {
    components: {
        Hometitle,
        Panel,
        Accordion,
        Button
    },
    data() {
        return {
            selected: true,
        }
    }
}
</script>
<style lang="less">
    .wrapper-example-accordion .wrapper-area-content,.wrapper-example-accordion .wrapper-area{
        background: transparent;
    }
</style>