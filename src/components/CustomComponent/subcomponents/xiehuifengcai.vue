<template>
    <div style="margin-bottom: 18px;">
        <mu-grid-list class="gridlist-inline-demo" :cols=1.5>
            <mu-grid-tile v-for="index in 4" :key="index">
                <img :src="testImg">
                <span slot="title">外地在宁企业共谋发展</span>
            </mu-grid-tile>
        </mu-grid-list>
    </div>
</template>

<script>
    import testImg from "../../../assets/pictures/testImg.png"

    export default {
        name: "xiehuifengcai",
        data() {
            return {
                testImg: testImg
            }
        },
    }
</script>

<style scoped>
    .gridlist-inline-demo {
        padding-left: 0.346rem;
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
    }

    img {
        width: 100%;
        height: 100%;
    }
</style>
