//document.getElementById("count").innerText = 5;
let count = 0

function increment(){
  count++;
  document.getElementById("count").innerText = count;
}

function reset(){
    count = 0;
    document.getElementById("count").innerText = count;
}

function save(){  
    let countStr = count + " - "
    document.getElementById("entries").textContent += countStr;
}



