<template>
    <div class="navbar">
        <div class="logo">
            <span>Elektron <br> Jurnallar</span>
        </div>
        <ul class="nav">
            <li @click="$router.push('/')">Bosh sahifa</li>
            <li @click="$router.push('/magazines')">Jurnallar</li>
            <li @click="$router.push('/about')">Jurnal haqida ma'lumot</li>
            <li @click="$router.push('/news')">Yangiliklar</li>
            <li @click="$router.push('/login')">Profilga kirish <i class="fa-solid fa-user"></i></li>
            <div class="btnHamburger" @click="toggleNav">
                <i class="fa-solid fa-bars"></i>
            </div>

        </ul>
        <div class="navlink" :class="{ 'is-toggle': isToggle }">
            <li @click="$router.push('/')">Bosh sahifa</li>
            <li @click="$router.push('/magazines')">Jurnallar</li>
            <li @click="$router.push('/about')">Jurnal haqida ma'lumot</li>
            <li @click="$router.push('/news')">Yangiliklar</li>
            <li @click="$router.push('/login')">Profilga kirish <i class="fa-solid fa-user"></i></li>
        </div>





    </div>
    
</template>
<script>

export default {
    name: 'Navbar',
    data() {
        return {
            isToggle: false
        }
    },
    methods: {
        toggleNav() {
            this.isToggle = !this.isToggle;
        }
    }
}
</script>
<style scoped>
.navbar {
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 5rem;
    background: #000000;
    display: flex;
    flex-direction: row;
    /* margin-bottom: 5rem; */
    justify-content: space-between;
    margin-top: -5rem!important;
}



.btnHamburger i {
    display: none;
    top: 25px;
    right: 20px;
    position: absolute;
    z-index: 10;
    color: #ffffff;
    font-size: 30px;
    transition: all .2s ease;
    /* margin-right: -100%; */
}

.navlink {
    display: none;
}

.btnHamburger i:hover {
    text-shadow: 0 0 20px rgb(255, 255, 255, 0.999);
}

.logo {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo span {
    font-size: 24px;
    font-weight: 600;
    color: #ffffff;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    margin-left: 2rem;
}

.nav {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: start;
    /* width: 0%; */
    list-style: none;
}

.nav li {
    padding: 10px;
    margin: 1rem;

    /* list-style: none; */
    color: #cfcbcb;
    font-size: 16px;
    font-weight: 500;
    font-family: 'Montserrat';
    transition: all .2s ease;
    line-height: 19px;
    letter-spacing: 5%;

}

.nav li:hover {
    transform: scale(1.01);
    cursor: pointer;
    color: #ffffff;
    text-shadow: .5px 1px .5px rgb(255, 255, 255)
}

li i {
    font-size: 16px;
    margin-left: 5px;

}



@media (max-width: 1076px) {

    .nav li {
        font-size: 14px;
    }
}

@media (max-width: 910px) {
    /* .navbar {
        height: auto;
    } */

    .btnHamburger i {
        display: block;
    }

    .nav li {
        display: none;
    }

    .navlink {
        margin-top: 5rem;
        display: flex;
        position: absolute;
        /* background: #000; */
        z-index: 10;
        list-style: none;
        width: 100%;
        height: 90vh;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(10, 10, 10, 0.299);
        backdrop-filter: blur(30px);
        margin-left: -100%;
        transition: all .5s ease;


    }

    .navlink.is-toggle {
        margin-left: 0;
    }

    .navlink li {
        padding: 10px;
        margin: 2rem;

        /* list-style: none; */
        color: #ffffff;
        font-size: 20px;
        font-weight: 600;
        font-family: 'Montserrat';
        transition: all .2s ease;
        line-height: 19px;
        letter-spacing: 5%;

    }

    .navlink li:hover {
        /* transform: scale(1.01); */
        cursor: pointer;
        color: #ffffff;
        text-shadow: 0 0 20px rgb(255, 255, 255, 0.885)
    }


    /* .navlink {
        display: block;
        list-style: none;
        position: absolute;
        background: red;
        width: 100%;
        height: 100vh;
        z-index: 10;

    } */

}

@media (max-width: 520px) {
    .logo span {
        font-size: 20px;
    }
}
</style>