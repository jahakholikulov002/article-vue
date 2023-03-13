<template>
    <div class="main">
        <AuthorItem></AuthorItem>
        <AuthorItem></AuthorItem>
        <AuthorItem></AuthorItem>
        <AuthorItem></AuthorItem>

    </div>
</template>
<script>
import AuthorItem from "@/components/authors/AuthorItem.vue"
export default {
    name: 'Author',
    components: {
        AuthorItem,
    }
}
</script>
<style scoped>
.main {
    padding: 0;
    margin: 0;
    justify-content: center;
    align-items: center;

}

@media (max-width: 1230px){
    .main{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        
    }
}
</style>