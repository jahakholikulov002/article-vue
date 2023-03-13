<template>
  <div class="search-bar">
    <div class="main-section">


      <div class="content">
        <div class="title">Jurnallar</div>
        <div class="content-text">Sizga barcha elektron jurnallarni topishda <br>
          yordam beramiz! </div>
      </div>
      <form class="form-input">
        <input type="text" placeholder="Jurnal qidirish...">
        <i class="fas fa-search"></i>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SearcBar'
}
</script>
<style scoped>
.search-bar {
  /* width: 100%; */
  position: relative;
  height: 556px;
  
  background-image: url(@/assets/images/map-bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;

  margin: 0;
  padding: 0;



}

.search-bar .main-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.form-input {
  margin: 0;
  padding: 0;
  /* position: absolute; */
  border: 1px solid #ffffff3a;
  display: flex;
  flex-direction: row;
  /* row-gap: ; */
  /* width: 810px; */
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  background-color: #eee;
  border-radius: 10px;
  top: 21.5rem;
  -webkit-transition-duration: .3s;
  transition-duration: .3s;
  -webkit-transition-property: box-shadow, transform;
  transition-property: box-shadow, transform;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.347);

  /* left: ; */

}

.form-input:hover,
.form-input:focus,
.form-input:active {

  box-shadow: 0 0 20px rgba(255, 255, 255, 0.559);
  /* -webkit-transform: scale(1.005); */
  /* transform: scale(1.005); */
}

input {
  margin: 0;
  padding: 0;
  width: 500px;
  border: none;
  outline: none;
  background: none;
  font: 18px;
  /* height: 60px; */

}


i {
  /* position: absolute; */
  color: black;
  cursor: pointer;
  font-size: 23px;
  margin-left: 19rem;
  transition: all .2s ease;
}

i:hover {
  transform: scale(1.2);
}

.content {
  margin: 0;
  padding: 0;
  /* position: absolute; */
  margin-top: 80px !important;
  /* height: 100px; */
  padding: 2rem !important;
  position: relative;
}

.title {

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 59px;
  /* identical to box height */
  text-align: center;
  letter-spacing: 0.05em;
  color: #FFFFFF;
}


.content-text {
  margin-top: 1rem;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #FFFFFF;

}
@media (max-width: 910px){
  .form-input{
    max-width: 500px;
  }
  input{
    max-width: 400px;
  }
  i{
    margin-left: 2rem;
  }
}
@media (max-width: 520px){
  .form-input{
    width: 300px ;
    /* margin: 0 3rem; */
    height: 40px;
  }
  i{
    font-size: 18px;
  }
  .title{
    font-weight: 600;
  font-size: 37px;
  line-height: 59px;
  }
  .content-text {
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 20px;}
  }

</style>