<template>
    <div>
        <div>
            <mu-appbar style="width: 100%;height: 1.226rem;background-color:#0069CB" color="primary">
                <img :src="ttI" class="titleImg"/>
                <mu-menu slot="left" @click="open = !open" cover placement="left-start">
                    <mu-button icon @click="open = !open">
                        <mu-icon value="reorder"></mu-icon>
                    </mu-button>
                </mu-menu>
            </mu-appbar>
            <mu-drawer :open.sync="open" :docked="docked" :right="position === 'right'">
                <mu-list>
                    <mu-list-item button>
                        <mu-list-item-title>协会介绍</mu-list-item-title>
                        <mu-list-item-action>
                            <mu-icon value="keyboard_arrow_right"></mu-icon>
                        </mu-list-item-action>
                    </mu-list-item>
                    <mu-list-item button>
                        <mu-list-item-title>协会公告</mu-list-item-title>
                        <mu-list-item-action>
                            <mu-icon value="keyboard_arrow_right"></mu-icon>
                        </mu-list-item-action>
                    </mu-list-item>
                    <mu-list-item button>
                        <mu-list-item-title>协会动态</mu-list-item-title>
                        <mu-list-item-action>
                            <mu-icon value="keyboard_arrow_right"></mu-icon>
                        </mu-list-item-action>
                    </mu-list-item>
                    <mu-divider shallow-inset></mu-divider>
                    <!--                    //分割线-->
                    <mu-list-item button>
                        <mu-list-item-title>会长单位</mu-list-item-title>
                        <mu-list-item-action>
                            <mu-icon value="keyboard_arrow_right"></mu-icon>
                        </mu-list-item-action>
                    </mu-list-item>
                    <mu-list-item button>
                        <mu-list-item-title>常务副会长单位</mu-list-item-title>
                        <mu-list-item-action>
                            <mu-icon value="keyboard_arrow_right"></mu-icon>
                        </mu-list-item-action>
                    </mu-list-item>
                    <mu-list-item button>
                        <mu-list-item-title>副会长单位</mu-list-item-title>
                        <mu-list-item-action>
                            <mu-icon value="keyboard_arrow_right"></mu-icon>
                        </mu-list-item-action>
                    </mu-list-item>
                    <mu-list-item button>
                        <mu-list-item-title>常务理事单位</mu-list-item-title>
                        <mu-list-item-action>
                            <mu-icon value="keyboard_arrow_right"></mu-icon>
                        </mu-list-item-action>
                    </mu-list-item>
                    <mu-list-item button>
                        <mu-list-item-title>团体会员单位</mu-list-item-title>
                        <mu-list-item-action>
                            <mu-icon value="keyboard_arrow_right"></mu-icon>
                        </mu-list-item-action>
                    </mu-list-item>
                    <mu-divider shallow-inset></mu-divider>
                    <!--                    分隔线-->
                    <mu-list-item button>
                        <mu-list-item-title>协会风采</mu-list-item-title>
                        <mu-list-item-action>
                            <mu-icon value="keyboard_arrow_right"></mu-icon>
                        </mu-list-item-action>
                    </mu-list-item>
                    <mu-list-item button>
                        <mu-list-item-title>精彩视频</mu-list-item-title>
                        <mu-list-item-action>
                            <mu-icon value="keyboard_arrow_right"></mu-icon>
                        </mu-list-item-action>
                    </mu-list-item>
                    <mu-divider shallow-inset></mu-divider>
                    <!--                    分割线-->
                    <mu-list-item button @click="toSingleVue">
                        <mu-list-item-title>搜索</mu-list-item-title>
                        <mu-list-item-action>
                            <mu-icon value="keyboard_arrow_right"></mu-icon>
                        </mu-list-item-action>
                    </mu-list-item>
                    <mu-list-item @click="open = false" button>
                        <mu-list-item-title>关闭</mu-list-item-title>
                    </mu-list-item>
                </mu-list>
            </mu-drawer>
        </div>
    </div>
</template>

<script>
    import titleImg from "../../assets/pictures/titleName1.png"

    export default {
        name: "AppBar",
        data() {
            return {
                ttI: titleImg,
                open: false,
                docked: false,
                position: 'left'
            }
        },
        methods: {
            toSingleVue() {
                this.$router.push({ path: '/search'})
            }
        }
    }
</script>

<style scoped>
    .titleImg {
        position: relative;
        right: 0.8rem;
        top: 0.08rem;
    }
    .mu-icon {
        opacity: 0.3;
    }
</style>
