<template>
    <div>
        <mu-container>
            <mu-flex  justify-content="start">
                <mu-flex justify-content="center"><span class="spana">title</span></mu-flex>
            </mu-flex>
            <mu-flex justify-content="start">
                <mu-flex justify-content="center"><span class="spanb">date</span></mu-flex>
            </mu-flex>
            <div v-show="imgtrue">
                <img/>
            </div>
            <mu-flex justify-content="start">
                <mu-flex justify-content="center"><span class="spanc">{{contents}}</span></mu-flex>
            </mu-flex>
        </mu-container>
    </div>
</template>

<script>
    export default {
        name: "contentDetails",
        data() {
            return {
                imgtrue: false,
                contents:'2018年4月2日，主题为 “外地在宁企业共谋发展”暨欢迎南京市外地在宁企业协会加盟座谈会，在南京市外地驻宁机构协会召开。\n' +
                    ' 参加会议的有：外地驻宁机构协会名誉会长蒋裕德、会长吕金航、执行会长盛伍茂、副会长张慕刚、副会长陈立秋、副会长姜有能、办公室张慧、张佩；南京市在宁外地企业协会会长（深圳苏建投资有限公司董事长）陈德璋、常务副会长（南京优能集团董事长）杨健、执行会长（南京时间商标事务所代理人）吴茂新、副会长（冶金工业部基础勘察工程总公司南京分公司副总经理）张署、秘书长王旭庚。\n' +
                    ' 会议由执行会长盛伍茂主持，名誉会长蒋裕德发表讲话并致欢迎词。在坐的会长、副会长们也进行了交流，会议在友好的气氛中结束。\n' +
                    '\n'
            }
        }
    }
</script>

<style scoped>
    mu-container {
        position: relative;
    }
    .mu-flex{
        margin-top: 0.333rem;
    }
    .spana{
        color: #333333;
        font-size: 18px;
        font-weight: 500;
    }
    .spanb {
        color: #999999;
        font-size: 12px;
    }
    .spanc {
        color:#999999;
        font-size: 11px;
    }
</style>
