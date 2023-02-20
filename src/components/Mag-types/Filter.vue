<template >
    <div class="left-filter">
        <div class="input">
            <input type="text" placeholder="Jurnal turini tanlang"> <i class="fa-solid fa-caret-left"></i>

        </div>
        <div class="category">
            <ul>
                <li>Jurnal turi</li>
                <li>Jurnal turi</li>
                <li>Jurnal turi</li>
                <li>Jurnal turi</li>
                <li>Jurnal turi</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
 
    name: 'Filter',
    data() {
        return {
            // categories:[

            // ]
        }
    },
}
</script>
<style>
.left-filter {
    width: 400px;
    /* height: 700px; */
    /* background: #775353; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    margin-left: 1rem ;
    height: 300px;

}

.input {
    /* position: absolute; */

    margin-top: 30px;
    width: 300px;
    height: 38px;
    box-sizing: border-box;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    /* transition: all .2s ease; */
}

.input:hover {
    border: 1px solid #000;
    box-shadow: 2px 2px 2px #544a4aa5;
}


.input input {
    width: 250px;
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
    
    /* border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 5px; */
    
}
.category ul{
    padding: 0;
    position: relative;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 5px;
}
.category ul li{
    font-size: 10px;
    font-family: 'Roboto';
    font-weight: 400;
    list-style: none;
    padding: 10px;
    width: 100%;
    background: #fff;
    box-shadow: 0 5px 25px rgba(0,0,0,.1);
    transition: transform .5s;
    cursor: pointer;
    height: 45px;
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

ul li:hover {}</style>