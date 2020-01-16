<template>
    <div>
        <div class="mainTitle">
            <img :src="a" class="img">
            <div><span class="span1">{{name}}</span></div>
            <span class="span2" @click="toDetail()">更多</span>
<!--            传ID，axios取日志更好-->
        </div>
    </div>
</template>

<script>
    import titleImg from "../../assets/pictures/subtitle.png"
    export default {
        name: "subModule",
        props:["name"],
        data() {
            return {
                a:titleImg,
            }
        },
        methods: {
            toDetail() {
                this.$router.push({ path: '/combine'})
            }
        }
    }
</script>

<style scoped>
    .img {
        width: 10rem;
        height: 1rem;
    }
    .mainTitle {
        display: flex;
        position: relative;
        margin-bottom: 18px;
    }
    .span1 {
        font-size: 14px;
        color: #FFFFFF;
        position: absolute;
        left: 0.573rem;
        top: 0.293rem;
    }
    .span2 {
        color: #0069CB;
        font-size: 14px;
        position: absolute;
        left: 9.04rem;
        top: 0.293rem;
    }
</style>
