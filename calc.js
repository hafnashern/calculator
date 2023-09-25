//for 1,2,3,4,..0,+,-,*,/
function displaydata(data){
    //result.value=result.value+data
    result.value+=data
}

//for AC
function allclear(){
    result.value=""
}
//for =
function findout(){
  result.value=eval(result.value)
}

//for backspace
function backspace(){
    result.value=result.value.slice(0,-1)
}
//"abc"
//slicing-slice(0,-1) -1(last element not included)