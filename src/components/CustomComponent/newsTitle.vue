<template>
    <div style="margin-bottom:16px">
        <div class="divaa">
            <mu-list>
                <mu-list-item button :ripple="false">
                    <mu-list-item-action>
                        <mu-icon value="lens" size="12" color="blue"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>{{titles}}</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-icon value="keyboard_arrow_right" style="opacity: 0.3;" size="30"></mu-icon>
                    </mu-list-item-action>
                </mu-list-item>
            </mu-list>
            <div class="divab">{{date}}</div>
        </div>
        <div><mu-divider></mu-divider></div>
    </div>
</template>

<script>
    export default {
        name: "newsTitle",
        data() {
            return {
                titles:'内容随意',
                date:'2019-12-24'
            }
        }
    }
</script>

<style scoped>
    .divaa {
        width: 100%;
        height: 2.133rem;
    }
    .divab {
        position: absolute;
        left: 1.9rem;
    }
</style>
