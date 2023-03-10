<template>
    <div class="main-content">
        <Filter></Filter>
        <Magazine :magazines="magazines"></Magazine>

    </div>
    <Pagination :current-page="currentPage" :page-count="pageCount" :page-range="pageRange" @page-changed="changePage" />

</template>
<script>
import Filter from "@/components/Mag-types/Filter.vue"
import Magazine from "@/components/magazines/Magazine.vue"
import Pagination from "@/components/buttons/Pagination.vue"

export default {
    components: {
        Filter,
        Magazine,
        Pagination
    },
    data() {
        return {
            currentPage: 1,
            pageCount: 5,
            pageRange: 5
        };
    },
    methods: {
        changePage(pageNumber) {
            this.currentPage = pageNumber;
            // fetch data for new page here
        }
    }

}
</script>
<style>
.main-content {
    display: flex;
    flex-direction: row;

}
</style>