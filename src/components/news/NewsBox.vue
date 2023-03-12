<template>
    <div class="news-item">
        <NewsItem v-for="news in newses" :news="news"></NewsItem>


    </div>
</template>
<script>
import NewsItem from "@/components/news/NewsItem.vue"
export default {
    name: 'NewBox',
    components: {
        NewsItem,
    },
    data() {
        return {
            newses: [
                {
                    date: '12/03/2023',                   
                    title: "O’zbekiston sportida eng yaxshilari aniqlandi!"
                },
                {
                    date: '12/03/2023',                   
                    title: "O’zbekiston sportida eng yaxshilari aniqlandi!"
                },
                {
                    date: '12/03/2023',                   
                    title: "O’zbekiston sportida eng yaxshilari aniqlandi!"
                },
                {
                    date: '12/03/2023',                   
                    title: "O’zbekiston sportida eng yaxshilari aniqlandi!"
                },
                {
                    date: '12/03/2023',                   
                    title: "O’zbekiston sportida eng yaxshilari aniqlandi!"
                },
                {
                    date: '12/03/2023',                   
                    title: "O’zbekiston sportida eng yaxshilari aniqlandi!"
                },
                {
                    date: '12/03/2023',                   
                    title: "O’zbekiston sportida eng yaxshilari aniqlandi!"
                },
                {
                    date: '12/03/2023',                   
                    title: "O’zbekiston sportida eng yaxshilari aniqlandi!"
                },
                {
                    date: '12/03/2023',                   
                    title: "O’zbekiston sportida eng yaxshilari aniqlandi!"
                },
                {
                    date: '12/03/2023',                   
                    title: "O’zbekiston sportida eng yaxshilari aniqlandi!"
                },
                {
                    date: '12/03/2023',                   
                    title: "O’zbekiston sportida eng yaxshilari aniqlandi!"
                },
                {
                    date: '12/03/2023',                   
                    title: "O’zbekiston sportida eng yaxshilari aniqlandi!"
                },
            ]
        }
    },


}
</script>
<style scoped>
.news-item {
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    padding: 2rem;
    align-items: center;
    justify-content: center;
}
</style>