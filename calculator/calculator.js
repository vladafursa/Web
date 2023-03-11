

function sum(){
  a=parseInt(document.getElementById('x').value);
  b=parseInt(document.getElementById('y').value);
  result=a+b;
  document.getElementById('result').value=result;
}
function sub(){
  a=parseInt(document.getElementById('x').value);
  b=parseInt(document.getElementById('y').value);
  result=a-b;
  document.getElementById('result').value=result;
}
function multiplication(){
  a=parseInt(document.getElementById('x').value);
  b=parseInt(document.getElementById('y').value);
  result=a*b;
  document.getElementById('result').value=result;
}
function division(){
  a=parseInt(document.getElementById('x').value);
  b=parseInt(document.getElementById('y').value);
  if(b===0){
    alert("No division by 0");
  }
  else{result=a/b;
  document.getElementById('result').value=result;
}
}
function power(){
  a=parseInt(document.getElementById('x').value);
  b=parseInt(document.getElementById('y').value);
  result=Math.pow(a,b);
  document.getElementById('result').value=result;
}
function remainder(){
  a=parseInt(document.getElementById('x').value);
  b=parseInt(document.getElementById('y').value);
  result=a%b;
  document.getElementById('result').value=result;
}
