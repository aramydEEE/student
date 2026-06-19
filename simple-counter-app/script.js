let current = 0;
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

btn1.addEventListener("click", increase);
btn2.addEventListener("click", decrease);
btn3.addEventListener("click", reset);
function increase(){
  current++;
  document.getElementById("output").innerText = current;
}
function decrease(){
  if(current === 0){
    document.getElementById("output").innerText = current;
  }
  else{
    current--;
    document.getElementById("output").innerText = current;
  }
  
}
function reset(){
  current = 0;
  document.getElementById("output").innerText = current;
}

