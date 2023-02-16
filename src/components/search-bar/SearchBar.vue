<template>
  <div class="search-bar">
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
</template>
<script>
export default {
  name: 'SearcBar'
}
</script>
<style scoped>
.search-bar {
  /* width: 100%; */
  height: 556px;
  background-image: url(@/assets/images/map-bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


}

.form-input {
  position: absolute;
  border: 1px solid #ffffff3a;
  display: flex;
  flex-direction: row;
  /* row-gap: ; */
  width: 810px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  background-color: #eee;
  border-radius: 10px;
  top: 21.5rem;
  /* left: ; */

}

input {
  width: 400px;
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
.content{
  /* position: absolute; */
  margin-top: 80px;
  /* height: 100px; */
  padding: 2rem;
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

}</style>