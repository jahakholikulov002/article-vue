<template >
    <div class="box">
        <img src="@/assets/images/NewsItem.png" alt="">
        <div class="content">
            <div class="date">{{news.date}} </div>
            <div class="title">{{news.title}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NewsItem',
  props:{
    news:{
        type: Object,
        required: true,
    }
  }
}
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
}

.box {
    margin: 1rem;
    /* width: 500px; */
    padding: 5px;
    display: flex;
    flex-direction: row;
    border: 1px solid #94949480;
}

.content {
    display: flex;
    flex-direction: column;
}

.content .date {
    padding: 0 10px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.05em;

    color: #949494;
}

.title {
       max-width: 250px;
    padding: 15px 10px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.05em;

    color: #000000;
}
</style>