<template>
    <div>
        <mu-container>
            <mu-tabs :value.sync="active1" color="blue" indicator-color="blue" inverse="inverse" full-width>
                <mu-tab>会长单位</mu-tab>
                <mu-tab>常务副会长单位</mu-tab>
                <mu-tab>副会长单位</mu-tab>
                <mu-tab>常务理事单位</mu-tab>
            </mu-tabs>
            <div class="demo-text" v-if="active1 === 0">
                <tabitems></tabitems>
                <tabitems></tabitems>
                <tabitems></tabitems>
                <tabitems></tabitems>
                <div v-show="!buttonShow">
                    <tabitems></tabitems>
                    <tabitems></tabitems>
                    <tabitems></tabitems>
                    <tabitems></tabitems>
                </div>
            </div>
            <!--            可选项-->
            <div v-show="buttonShow">
                <mu-button flat full-width @click="showMore">查看更多>></mu-button>
            </div>
        </mu-container>
    </div>
</template>

<script>
    import tabitems from "./TabItem/TabItems"

    export default {
        name: "TabMenu",
        data() {
            return {
                active1: 0,
                buttonShow: true
            }
        },
        components: {
            tabitems
        },
        methods: {
            showMore() {
                this.buttonShow = !this.buttonShow
            }
        }
    }
</script>

<style scoped>
    .mu-tab {
        white-space:nowrap;
    }
</style>
