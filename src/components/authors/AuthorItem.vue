<template>
    <div class="box">
        <img src="@/assets/images/author1.png" alt="">
        <div class="content">
            <h4>Stiven King mashhur nashrlari</h4>
            <p>Stiven King mashhur nashrlari
                2022 yilda eng<br> ko’p daromad oluvchi dunyoning TOP 3 chartiga...</p>

        </div>
    </div>
    <div class="box">
        <img src="@/assets/images/author2.png" alt="">
        <div class="content">
            <h4>Jon Grishem</h4>
            <p>Jon Grishem
                Oddiy yozuv stategiyasi Jon <br> Grishemga
                muvaffaqiyyatga erishishda yordam....</p>

        </div>
    </div>
    <div class="box">
        <img src="@/assets/images/author3.png" alt="">
        <div class="content">
            <h4>Майкл Вульф и его <br> «Тысяча дорог в Мекку»
               </h4>
            <p> Майкл Вульф родился 3 апреля 1945 г. <br> в американском городе...</p>

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

    margin: 0 0 1rem 1rem;
    padding: 0;
    width: 500px;
}

img {
    width: 376px;
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
</style>