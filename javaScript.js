const clock = document.querySelector('#clock') ;
//const clock = document.getElementbyId('clock) ;

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString() ;
}, 1000) ;