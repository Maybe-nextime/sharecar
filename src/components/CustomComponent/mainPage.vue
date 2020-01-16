<template>
    <div>
        <div class="diva">
            <img :src="goldenText" class="imgb"/>
            <div class="divb">
                <p>
                    天空微微下起了小雨，看一看四周烟雨如画的风景，听一听细雨拂面的自然，
                    闻<br>一闻草木森森的绿清。把心中的丝丝烦恼交给清风吹散残存的落霞。
                    把快乐寄予阳光温暖甜美的时光，留下云的淡雅雨的潇洒，<br>困顿事纵有千百斗，邂逅美丽的苏大后且陪我晾衣袖。
                    夜色真美，倚在情人坡清风徐徐，笑对星辰，<br>甜美的记忆随着隐现的星闪烁在无垠的天空，酿造一月的诗韵依偎在这幽静
                </p>
            </div>
            <div class="divc">
                <p>深度开展江宁区域商会发展</p>
            </div>
        </div>
    </div>
</template>

<script>
    import goldenText from "../../assets/pictures/goldentext.png"

    export default {
        name: "mainPage",
        data() {
            return {
                goldenText: goldenText
            }
        }
    }
</script>

<style scoped>
    .diva {
        width: 100%;
        height: 5.6rem;
        background: url("../../assets/pictures/backImg.png") no-repeat;
        background-size: 100% 100%;
        position: relative;
        margin-bottom: 0.4rem;
    }
    .imgb {
        width: 6.667rem;
        height: 0.84rem;
        z-index: 10;
        position: relative;
        top: 0.5rem;
    }
    .divb {
        position: relative;
        top: 0.267rem;
    }
    .divb p {
        font-size:6px;
        color: #EEF3FF;
    }
    .divc {
        width: 100%;
        height: 0.8rem;
        background-color: #000000;
        color: white;
        opacity: 0.6;
        /*position:relative;*/
        /*top: 2.45rem;*/
        /*line-height: 0.8rem;*/
        position: absolute;
        bottom: 0;
    }
    .divc p{
        font-size: 10px;
        text-align: left;
        padding-left: 0.333rem;
    }
</style>
