<template>
    <div class="mag-container">
        <Box></Box>
    </div>
</template>
<script>
import Box from "@/components/magazines/Box.vue"
export default {
  name: "Magazine",
    components:{
        Box,
    }
}
</script>
<style>
    .mag-container{
        padding: 2rem;
        margin: 0;
    }
</style>