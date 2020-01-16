<template>
    <div>
        <mu-container>
            <img :src="introPic">
            <p>
                回顾过去，业绩辉煌。1994年9月，一个顺应国内经济联合与协作潮流的新生社会组织——南京市外地驻宁机构协会诞生了……
            </p>
        </mu-container>
    </div>
</template>

<script>
    import introPic from "../../../assets/pictures/introduction.png"

    export default {
        name: "introductions",
        data() {
            return {
                introPic: introPic
            }
        }
    }
</script>

<style scoped>
    div {
        width: 100%;
        height: 4.48rem;
    }

    div img {
        width: 9.36rem;
        height: 2.667rem;
        /*position: relative;*/
        /*top: 0.453rem;*/
    }

    div p {
        color: #999999;
        font-size: 12px;
        font-family: PingFang-SC-Regular;
    }
</style>
