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
        </ul>



    </div>
</template>
<script>

export default {
    name: 'Navbar',
}
</script>
<style scoped>
.navbar {
    width: 100%;
    height: 5rem;
    background: #000000;
    display: flex;
    flex-direction: row;

    justify-content: space-between;
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
    justify-content: start ;
    /* width: 0%; */
    list-style: none;
}

li {
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

li:hover {
    transform: scale(1.01);
    cursor: pointer;
    color: #ffffff;
    text-shadow: .5px 1px .5px rgb(255, 255, 255)
}

li i {
    font-size: 16px;
    margin-left: 5px;

}

li:last-child {
    /* margin-bottom: 1.9rem; */
}

@media (max-width: 1076px) {
    li {
        font-size: 14px;
    }
}
@media (max-width: 910px) {
    li {
        display: none;
    }
}

</style>