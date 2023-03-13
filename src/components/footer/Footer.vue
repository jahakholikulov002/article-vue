<template lang="">
    <div class="footer">
        <div class="socials">
            <div class="circle"> <i class="fa-brands fa-instagram"></i></div>
            <div class="circle"><i class="fa-sharp fa-solid fa-paper-plane"></i></div>
            <div class="circle"><i class="fa-brands fa-youtube"></i></div>
            <div class="circle"><i class="fa-brands fa-facebook-f"></i></div>

        </div>
        <h6>Bizmi ijtimoiy tarmoqlarda kuzatib boring! </h6>
        <p>Uzbekistan 2023</p>
    </div>
</template>
<script>
export default {
    name: 'Footer'
}
</script>
<style scoped>
.footer {
    background: #000000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
}

.socials {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

}

.socials .circle {
    display: flex;
    width: 48px;
    height: 48px;
    border: none;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #ffffff;
    margin: 42px 10px 25px 10px;
    cursor: pointer;

}

.socials .circle i {
    color: #000000;
    margin: 0;
    padding: 0;
    font-size: 25px;
    -webkit-transition-duration: 1s;
    transition-duration: 1s;
    -webkit-transition-property: box-shadow, transform;
    transition-property: box-shadow, transform;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.347);
    transition: all .5s ease;
    
}
.circle:hover, .circle:focus, .circle:active{
    
    box-shadow:0 0 20px rgba(255, 255, 255, 0.884);
    /* -webkit-transform: scale(1.001);
    transform: scale(1.001); */
  }

.socials .circle .fa-instagram {
    font-weight: 600;
    font-size: 27px;
}

h6 {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 480;
    font-size: 16px;
    line-height: 17px;
    /* identical to box height */

    letter-spacing: 0.05em;

    color: rgba(255, 255, 255, 0.5);

}

p {
    margin-top: 42px;
    margin-bottom: 1rem;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.05em;

    color: #FFFFFF;

    opacity: 0.5;
}
@media (max-width:425px){
    h6{
        text-align: center;
    }
}
</style>