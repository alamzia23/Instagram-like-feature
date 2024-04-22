//double click krne pr mera dil dikhna chaiye
var imageSelection= document.querySelector("img");
imageSelection.addEventListener("dblclick",function(){
   var selectContainer= document.querySelector('#container');
   var doubleClick=selectContainer.querySelector('i');
   
   
    doubleClick.style.transform="translate(-50%,-50%) scale(1)";
    setTimeout(() => {
        doubleClick.style.transform="translate(-50%,-50%) scale(0)";
        
    },1000);
  
   
   

})
//this is the code of the JS