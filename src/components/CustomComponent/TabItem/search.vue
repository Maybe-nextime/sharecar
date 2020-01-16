<template>
    <div>
        <div>
            <contentbar></contentbar>
        </div>
        <mu-container>
            <mu-auto-complete :data="fruits" label="请输入搜索内容" v-model="valueSearch" full-width error-text
                              prefix="Q"></mu-auto-complete>
            <template slot-scope="scope">
<!--                内容应显示标题-->
                <mu-list-item-action>
                    <mu-avatar color="primary">
                        {{scope.item.substring(0, 1)}}
                    </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content v-html="scope.highlight"></mu-list-item-content>
            </template>
        </mu-container>
    </div>
</template>

<script>
    const fruits = [
        'Apple', 'Apricot', 'Avocado',
        'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
        'Boysenberry', 'Blood Orange',
        'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry',
        'Coconut', 'Cranberry', 'Clementine',
        'Damson', 'Date', 'Dragonfruit', 'Durian',
        'Elderberry',
        'Feijoa', 'Fig',
        'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',
        'Honeydew', 'Huckleberry',
        'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',
        'Kiwi fruit', 'Kumquat',
        'Lemon', 'Lime', 'Loquat', 'Lychee',
        'Nectarine',
        'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine',
        'Olive', 'Orange',
        'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple',
        'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen',
        'Quince',
        'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant',
        'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry',
        'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine',
        'Ugli fruit',
        'Watermelon'
    ];
    import contentbar from '../ContentBar/ContentBar.vue'

    export default {
        name: "search",
        components: {
            contentbar
        },
        data() {
            return {
                fruits,
                valueSearch: '',
                found: false,
            }
        }
    }
</script>

<style scoped>

</style>
