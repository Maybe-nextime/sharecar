<template>
    <div>
        <div>
            <mu-flex>
                <mu-button class="demo-button" color="primary">友情链接</mu-button>
                <div class="logo">
                    <a href=""><img :src="companyLogo" class="logo"></a>
                    <a href=""><img :src="companyLogo" class="logo"></a>
                    <a href=""><img :src="companyLogo" class="logo"></a>
                </div>
            </mu-flex>
        </div>
        <div class="divA">
            <p>版权所有：南京云亭宝网络科技有限公司<br>
                苏ICP备17055073号-2</p>
        </div>
        <div class="divB">
            <p>技术支持：南京云亭宝网络科技有限公司</p>
        </div>
    </div>
</template>

<script>
    import companyLogo from "../../assets/pictures/subier.png"

    export default {
        name: "friendlyBar",
        data() {
            return {
                companyLogo: companyLogo
            }
        }
    }
</script>

<style scoped>
    .logo {
        width: 100%;
        height: 1.52rem;
        line-height: 1.52rem;
        justify-content: space-around;
    }

    .logo img {
        width: 1.706rem;
        height: 0.64rem;
        margin-left: 0.5rem;
    }

    .divA {
        width: 100%;
        height: 1.6rem;
        background-color: #BDD3FF;
        color: #666666;
        font-size: 12px;
        /*水平垂直居中*/
        display: flex;
        justify-content:center;
        align-items: center;
    }
    .divB {
        width: 100%;
        height: 1.067rem;
        color: #666666;
        font-size: 12px;
        display: flex;
        justify-content:center;
        align-items: center;
    }
</style>
