<template>
    <div class="filter">
        <div class="input">
            <input type="text" placeholder="Jurnal turini tanlang"> <i class="fa-solid fa-caret-left"></i>

        </div>
        <div class="category">
            <ul>
                <li>So'ngi 10 kunlik jurnallar</li>
                <li>So'ngi 1 oylik jurnallar</li>
                <li>So'ngi eng ko'p o'qilgan jurnallar </li>
               
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AboutFilter'
}
</script>
<style scoped>
    .filter {
   
    display: flex;
    flex-direction: column;
    margin: 0 ;
    padding: 2rem 0 1rem 3rem;

}

.input {
    margin-top: 30px;
    height: 38px;
    box-sizing: border-box;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0;
}

.input:hover {
    border: 1px solid #000;
    box-shadow: 2px 2px 2px #544a4aa5;
}


.input input {
    height: 32px;
    border: none;
    outline: none;
}

.input i {
    width: 14.92px;
    height: 10.98px;
    margin-top: 10px;
    color: rgba(0, 0, 0, 0.63);
    transition: all .2s ease;
    
}

.category {  
    margin-top: 10px;
    width: 300px;
    margin: 10px 0;
}
.category ul{
    padding: 0;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 5px;
}
.category ul li{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-family: 'Roboto';
    font-weight: 500;
    list-style: none;
    padding: 10px;
    background: #fff;
    box-shadow: 0 5px 25px rgba(0,0,0,.1);
    transition: transform .5s;
    cursor: pointer;
    height: 45px;
    border-bottom: 1px solid #544a4aa5;
}
.category ul li:first-child{
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
.category ul li:last-child{
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}
.category ul li:hover{
    background:  #544a4aa5;
}
</style>