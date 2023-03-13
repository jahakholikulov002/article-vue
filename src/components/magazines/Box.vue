<template>
    <div class="box">

        <img src="@/assets/images/magazine.jpg" alt="@/assets/images/magazine.jpg">
        <div class="info ">
            <div class="title">{{ magazine.title }}<br> {{ magazine.titleYear }}</div>
            <div class="desctiption"> {{ magazine.description }}</div>
            <div class="type"> Jurnal turi: {{ magazine.type }}</div>
            <div class="download"> <span> <i class="fa-solid fa-file-arrow-down"></i>Faylni yuklash</span> </div>
            <div class="more"> <span>
                    Batafsil ma'lumot uchun...
                </span></div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Box",
    props: {
        magazine: {
            type: Object,
            required: true,
        }
    }
}

</script>
<style scoped>
.box {
    /* position: absolute; */
    /* width: 1000px; */
    margin: 2rem 0;
    padding: 0;
    /* height: 270px; */
    border: 1px solid #34333393;
    display: flex;
    justify-content: space-between;
    flex-direction: row;


}

.box:hover {
    box-shadow: 0 0 20px rgba(69, 68, 68, 0.347);
}

.box:first-child {
    margin: 0 !important;
}

.info {
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */
    flex-direction: column;
    align-items: left;
    margin: 0;

}

.info .title {
    font-family: 'Montserrat';
    font-style: italic;
    font-size: 24px;
    font-weight: 600;
    line-height: 29px;
    letter-spacing: 5%;
    padding: 0;
    margin: 0;
    color: #0F00B4;
    /* padding: 10px; */
}

.info .desctiption {
    font-family: 'Montserrat';
    font-size: 15px;
    font-weight: 400;
    line-height: 18.5px;
    padding-top: 10px;
    letter-spacing: 5%;
}

.info .type {
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 15px;
    line-height: 28px;
    /* align-items: left; */
    margin: 0;
    padding: 0;
    color: #0F00B4;
    cursor: pointer;
}

span {
    margin: 0;
    padding: 0;
}

.info .download {
    justify-content: right;

    font-family: 'Montserrat';
    display: flex;
    flex-direction: row;
    align-items: right;
    padding: 0;
    margin: 0;
    font-size: 17px;
    font-weight: 700;
    color: #0F00B4;
    /* cursor: pointer; */

}

.info .download span {
    transition: all .2s ease;
    cursor: pointer;
}

.info .download span:hover {
    /* text-shadow: 0 0 1px #4437d1,
 0 0 2px #42aaeb,
 0 0 3px  #42aaeb,
 0 0 4px  #42aaeb; */
    transform: scale(1.01);
    color: #1499ec;
}

.info .download i {
    padding: 2px 3px;
    margin: 0;

}

.info .more {
    font-family: 'Montserrat';
    font-weight: 400;
    font-style: italic;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: 0.05rem;
    color: #000000;
    margin: 0;
    padding: 0;
    margin-top: 10px;

}

.info .more span {
    cursor: pointer;
}

.info .more span:hover {
    font-weight: 500;
}

@media (max-width: 580px) {
    .box {
        display: flex;
        flex-direction: column;
    }

    .info .title {
        font-family: 'Montserrat';
        font-style: italic;
        font-size: 18px;
        font-weight: 600;
        line-height: 29px;

    }

    .info .desctiption {
        font-family: 'Montserrat';
        font-size: 13px;
        font-weight: 400;
        line-height: 18.5px;
    }

    .info .type {
        margin-top: 1rem;
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 13px;
        line-height: 16px;
    }
    .info .download {
        margin-top: 5px!important;

    font-family: 'Montserrat';
    padding: 0;
    margin: 0;
    font-size: 15px;
    font-weight: 600;
    }
    .info .more {
    font-family: 'Montserrat';
    font-weight: 400;
    font-style: italic;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.03rem;}
    img {
        height: 200px;

    }
}

@media (max-width: 425px) {
    img {
        display: none;
    }

}</style>