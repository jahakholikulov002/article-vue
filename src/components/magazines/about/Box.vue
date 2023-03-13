<template>
    <div class="box">
        <img src="@/assets/images/about.png" alt="@/assets/images/about.png">
        <div class="content">
            <h3>Atomic Habits</h3>
            <div class="inner-content">
                <div class="row">
                    <p>Ishalab chiqarilgan sana: </p>
                    <span>2021</span>
                </div>
                <div class="row">
                    <p>Chop etilgan tillari:</p>
                    <span>O'zbek, Rus va Ingliz tillari</span>
                </div>
            </div>
            <div class="inner-content">
                <div class="row2">
                    <i class="icons fa-solid fa-book-open"></i>
                    <div class="inner-row">
                        <p> Kitob yuklaganlar soni: </p>
                        <span>55342</span>
                    </div>
                </div>
                <div class="row2 mar15">
                    <i class="icons fa-solid fa-location-dot"></i>
                    <div class="inner-row">

                        <p>Nashriyot nomi:</p>
                        <span>Research Innavation center</span>
                    </div>
                </div>
            </div>
            <div class="inner-content">
                <div class="row2">
                    <i class="icons fa-solid fa-book"></i>
                    <div class="inner-row">
                        <p>Ishalab chiqarilgan sana: </p>
                        <span>Texnika fanlari, Psihologiya, Inson taraqiyoti, <br> Inson resurslari</span>

                    </div>
                </div>

            </div>
            <div class="inner-content">
                <div class="row mar10 ">
                    <p>Ulanish uchun: </p>
                    <span class="social-networks">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-telegram"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </span>
                </div>
                <div class="row mar15">
                    <p>Jurnal Muallifi:</p>
                    <span>James Clear</span>
                </div>
            </div>
            <div class="download"> <span> <i class="fa-solid fa-file-arrow-down"></i>Faylni yuklash</span> </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Box'

}
</script>
<style scoped>
.box {
    margin: 1.5rem;
    padding: 0;
    display: flex;
    /* width: 100%; */

    /* flex-wrap: nowrap; */
    flex-direction: row;
    justify-content: flex-start;
    background: #F3F3F3;
    border: 1.45406px solid rgba(148, 148, 148, 0.5);
}

.box:hover {
    box-shadow: 0 0 20px rgba(69, 68, 68, 0.347);
}

img {
    padding: 0;
    margin: 0;
}

.content {
    display: flex;
    flex-direction: column;
    margin-right: 2rem !important;
    margin: 0;
    padding: 0;

}

.content h3 {
    margin: 0;
    padding: 18px 24px;
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    letter-spacing: 5%;
    align-items: center;
    /* text-align: center; */
}

.content .inner-content {
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;

}

.content .inner-content .mar15 {
    /* margin-left: 184px !important; */
}

.content .inner-content .mar10 {
    /* margin-left: 2rem !important; */
}

.inner-content .row {
    display: flex;
    flex-direction: column;
    margin-left: 24px !important;
    margin-bottom: 2rem !important;
    margin: 0;
    padding: 0;

}

.row p {
    color: #949494;
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 14.3883px;
    line-height: 18px;
    letter-spacing: 0.05em;
    margin: 0;
    padding: 0;
}

.row span {
    padding: 0;
    margin: 0;
    color: #000000;
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 14.3883px;
    line-height: 18px;
    letter-spacing: 0.05em;
}

.inner-content .row2 {
    display: flex;
    flex-direction: row;
    margin-left: 24px !important;
    margin-bottom: 2rem !important;
    margin: 0;
    padding: 0;

}

.icons {
    color: #33363F;
    font-size: 1.5rem;
    margin-right: 10px;
}

i {
    font-size: 1.5rem;
    cursor: pointer;
}

/* i:hover{
    transform: scale(1.02);
    cursor: pointer;
    box-shadow:0 0 20px rgba(50, 126, 193, 0.884);
} */
.fa-facebook {
    color: #3B5998;
}

.fa-telegram {
    color: #3787e2;
}

.fa-twitter {
    color: #37b1e2;
}

.fa-instagram {
    color: #d9753f;
}


.row2 p {
    color: #949494;
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 14.3883px;
    line-height: 18px;
    letter-spacing: 0.05em;
    margin: 0;
    padding: 0;
}

.row2 span {
    padding: 0;
    margin: 0;
    color: #000000;
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 14.3883px;
    line-height: 18px;
    letter-spacing: 0.05em;
}

.download {
    margin: 0;
    padding: 0;
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

.download span {
    transition: all .2s ease;
    cursor: pointer;
    margin: 0;
    padding: 0;
}

.download span:hover {

    transform: scale(1.01);
    color: #1499ec;
}

.download i {
    padding: 2px 3px;
    margin: 0;

}

.social-networks {
    display: flex;
    flex-direction: row;
    margin-top: .5rem !important;
    margin: 0;
    padding: 0;

}

@media (max-width: 760px) {
    .box {
        flex-direction: column;
        align-items: center;
    }

    img {
        height: 250px;
        width: 200px;
    }
    .download span{
        margin-bottom: 1.5rem;
    }



}

@media (max-width: 520px) {
    .content {
        justify-content: center;
        align-items: center;
        padding: 0 !important;
        margin: 0 !important;
    }

    img {
        display: none;
    }

    .inner-row {
        margin-left: 1rem;
    }

    .inner-content {
        justify-content: center;
        align-items: center;
    }

    .mar15 {
        margin: 1rem;
    }

    .row2 {
        justify-content: center;
        align-items: center;
        margin: 0;

    }

    .inner-content .row {
        margin: 0 1rem 1rem 1rem !important;
        /* padding: 0 !important; */
    }
}</style>