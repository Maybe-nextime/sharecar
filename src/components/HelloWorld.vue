<template>
    <div>
        <appbar></appbar>
        <mainPage></mainPage>
        <div>
            <subM :name="titleName[0]"></subM>
            <introS></introS>
        </div>
        <div>
            <subM :name="titleName[1]"></subM>
            <newstitle></newstitle>
            <newstitle></newstitle>
        </div>
        <subM :name="titleName[2]"></subM>
        <newstitle></newstitle>
        <newstitle></newstitle>
        <tabmenu></tabmenu>
        <subM :name="titleName[3]"></subM>
        <xhfc></xhfc>
        <subM :name="titleName[4]"></subM>
        <videoController></videoController>

        <friendly-bar></friendly-bar>
    </div>
</template>

<script>
    import videoController from "./CustomComponent/subcomponents/cusVideo"
    import xhfc from "./CustomComponent/subcomponents/xiehuifengcai"
    import introS from "./CustomComponent/subcomponents/introductions"
    import mainPage from "./CustomComponent/mainPage"
    import newstitle from "./CustomComponent/newsTitle"
    import friendlyBar from "./CustomComponent/friendlyBar"
    import appbar from "./CustomComponent/AppBar"
    import tabmenu from "./CustomComponent/TabMenu"
    import subM from "./CustomComponent/subModule"
    import App from "../App";

    export default {
        name: 'HelloWorld',
        data() {
            return {
                titleName:["协会介绍","协会公告","协会动态","协会风采","精彩视频"]
            }
        },
        components: {
            App,
            subM,
            tabmenu,
            appbar,
            friendlyBar,
            newstitle,
            mainPage,
            introS,
            xhfc,
            videoController
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
