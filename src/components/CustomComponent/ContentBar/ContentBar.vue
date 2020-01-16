<template>
    <div>
<!--        //比较好的标题栏方式-->
        <mu-appbar color="#0069CB">
            <mu-button icon slot="left" @click="stepup">
                <mu-icon value="keyboard_arrow_left"></mu-icon>
            </mu-button>
            <mu-button icon slot="right" @click="toMainPage">
                <mu-icon value="home"></mu-icon>
            </mu-button>
        </mu-appbar>
    </div>
</template>

<script>
    export default {
        name: "ContentBar",
        methods: {
            stepup() {
                this.$router.go(-1);
            },
            toMainPage() {
                this.$router.push({ path: '/'})
            }
        },
    }
</script>

<style scoped>
    .divA {
        width: 100%;
        height: 1.226rem;
        background-color: #0069CB;
    }

    .mu-button {
        color: white;
        height: 100%;
    }
</style>
