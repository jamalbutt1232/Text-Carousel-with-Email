var i =  0;
function changeText_Back() {
  i=i-1;
  if (i==1){
    document.getElementById('text_here').innerHTML="India";
  }else if (i==2){
    document.getElementById('text_here').innerHTML="Khalistan";


  }

}
function changeText_New() {
  console.log('Yes')
  i=i+1;
  if (i==1){
    document.getElementById('text_here').innerHTML="India";
  }else if (i==2){
    document.getElementById('text_here').innerHTML="Khalistan";


  }

}