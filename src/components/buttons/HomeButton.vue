<template lang="">
    <div class="button">
        <button @click="$router.push('/magazines')"> Barcha Jurnallar</button>
    </div>
</template>
<script>

export default {
    name: 'HomeButton',
}
</script>
<style scoped>  
.button{
    display: flex;
    align-items: center;
    justify-content: center;
}
button {
      /* position: absolute; */
      width: 85%;
      height: 38.8px;
      /* left: 63.86px; */
      /* top: 1648.4px; */
      background: #D84B4B;
      font-size: 18px;
      font-family: 'Roboto';
      font-weight: 700;
      line-height: 21px;
      align-items: center;
      color: #ffffff;
      border: none;
      padding: 0;
      margin: 0;
      margin-bottom: 2rem!important;
      -webkit-transition-duration: .3s;
      transition-duration: .3s;
      -webkit-transition-property: box-shadow, transform;
      transition-property: box-shadow, transform;
      box-shadow:0 0 10px rgba(0,0,0,0.1);
  }
  button:hover, button:focus, button:active{
    
    box-shadow:0 0 20px rgba(0,0,0,0.5);
    -webkit-transform: scale(1.005);
    transform: scale(1.005);
  }
  
</style>
