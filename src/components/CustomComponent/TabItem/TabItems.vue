<template>
    <div class="main">
        <div class="mainSub1">
            <span>南京市外地驻宁机构协会召开第五届一次会员代表……</span>
            <img :src="rightArrow">
        </div>
        <div class="divider"><mu-divider></mu-divider></div>
    </div>
</template>

<script>
    import rightArrow from "../../../assets/pictures/img-right-arrow.png"

    export default {
        name: "newsTitle",
        data() {
            return {
                rightArrow: rightArrow
            }
        }
    }
</script>

<style scoped>
    .mainSub1 {
        width: 100%;
        height: 1.426rem;
        display: flex;
        justify-content: space-around;
        position: relative;
    }

    .mainSub1 span {
        color: #666666;
        font-size: 12px;
        font-weight: 500;
        position: relative;
        top: 0.6rem;
    }

    .mainSub1 img {
        width: 0.213rem;
        height: 0.4rem;
        position: relative;
        top: 0.6rem;
        right: 0.3rem;
    }
</style>
