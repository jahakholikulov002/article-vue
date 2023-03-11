<template>
    <div class="mag-container">
        <Box v-for="magazine in magazines" :magazine="magazine"/>
    </div>
</template>
<script>
import Box from "@/components/magazines/Box.vue"
export default {
    name: "Magazine",
    components: {
        Box,
    },
    data() {
        return {
            magazines: [
                {
                    title: "Urban Agriculture Magazine #38:",
                    titleYear: "20+ years of RUAF",
                    description: "The new issue of the Urban Agriculture Magazine analyses five key work areas for the coming decade: Resilience, Social inclusion, Urban and Peri- urban Agriculture, Urban Planning, and Governance.Resilience Food systems around the globe are highly vulnerable to the impacts of multiple hazards, including climate shocks, natural events, global warming, and political instability.People, assets […]",
                    type: "PDF",
                },
                {
                    title: "Urban Agriculture Magazine #38:",
                    titleYear: "20+ years of RUAF",
                    description: "The new issue of the Urban Agriculture Magazine analyses five key work areas for the coming decade: Resilience, Social inclusion, Urban and Peri- urban Agriculture, Urban Planning, and Governance.Resilience Food systems around the globe are highly vulnerable to the impacts of multiple hazards, including climate shocks, natural events, global warming, and political instability.People, assets […]",
                    type: "PDF",
                },
                {
                    title: "Urban Agriculture Magazine #38:",
                    titleYear: "20+ years of RUAF",
                    description: "The new issue of the Urban Agriculture Magazine analyses five key work areas for the coming decade: Resilience, Social inclusion, Urban and Peri- urban Agriculture, Urban Planning, and Governance.Resilience Food systems around the globe are highly vulnerable to the impacts of multiple hazards, including climate shocks, natural events, global warming, and political instability.People, assets […]",
                    type: "PDF",
                },
            ]

        }
    }

}
</script>
<style>
.mag-container {
    padding: 2rem;
    margin: 0;
}
</style>