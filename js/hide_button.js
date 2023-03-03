(function () {
    vota_btn = document.querySelector('#vota');
    const congress = new Date("May 05, 2020 15:25:00");

    let now = new Date().getTime(),
              distance = congress - now;
    
    console.log(distance);
    if(distance>0){
        vota_btn.classList.add('invisible-btn');
    }else{
        vota_btn.classList.remove('invisible-btn'); 
        vota_btn.classList.add('visible-btn');
        vota_btn.classList.add('mt-5');
    }
    console.log(vota_btn.classList);          

}());