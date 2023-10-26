console.log('sahil khan');
const randomColor = function(){
    let hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0 ; i<6 ; i++ ){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color ; 
}

let startChangingColor = function(){
       let bgcolor = document.body.style.backgroundColor = randomColor();  
}

let startColor ;
document.querySelector('#start').addEventListener( 'click' , function(){
   startColor = setInterval(startChangingColor , 1000) ;
})

document.querySelector('#stop').addEventListener( 'click' , function(){
    clearInterval(startColor);
   startColor = null ;

});

