
let txt = document.querySelector('.text')
 let hedding = "khan|"

let  endValue = 1;
isForword = true

let id = setInterval(function(){
  txt.textContent = hedding.substring(0,endValue)
  if(isForword){
    endValue++
  }else{
    endValue--;
  }
  

 

  if(endValue > hedding.length ){
    isForword = false
  }
  
    if(endValue < 0){
        isForword = true
    }
},200)

// dark button start
const btn = document.querySelector('.circle')



let cont = document.querySelector('.hero-section')

let text = document.querySelector('.p1')
let text1 = document.querySelector('.white')




btn.addEventListener('click',function(){
 

if(isForword){
  cont.style.backgroundColor = "black";
  cont.style.color = "white";
  text.style.color = "white";
  text1.style.color = "white";
  
  
}else{
  cont.style.backgroundColor = "aliceblue";
  cont.style.color = "black";
  text.style.color = "black";
  text1.style.color = "black";
}

})


// dark mood btn end