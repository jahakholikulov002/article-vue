<template>
    <div class="box">
        <img src="@/assets/images/author1.png" alt="">
        <div class="content">
            <h4>Stiven King mashhur nashrlari</h4>
            <p>Stiven King mashhur nashrlari
                2022 yilda eng<br> ko’p daromad oluvchi dunyoning TOP 3 chartiga...</p>

        </div>
    </div>
</template>
<script>
export default {
    name: 'AuthorItem'

}
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
}

.box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    padding: 1rem;
    /* width: 400px; */
    border: 1.45406px solid rgba(148, 148, 148, 0.5);
    cursor: pointer;
    border-radius: 4px;

}
.box:hover{
    box-shadow: 0 0 20px rgba(69, 68, 68, 0.347);
}

img {
    width: 346px;
}

h4 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 20.409px;
    line-height: 25px;
    letter-spacing: 0.05em;

    color: #000000;
}

p {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14.409px;
    line-height: 18px;
    letter-spacing: 0.05em;

    color: #949494;
}
@media (max-width: 410px){
img{
    width: 300px;
}
}
</style>