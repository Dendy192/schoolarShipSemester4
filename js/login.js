function cekForm(){
    var uName = document.getElementById('uName').value;
    var psw = document.getElementById('pass').value;
//     let accounValid = JSON.parse(localStorage.getItem('userAccount'));
//    console.log(accounValid);
    
    
    if(uName == ''){
        document.getElementById('lerror').innerHTML = "Username Must be filled";
        return false;
    }
    
   
    else if(uName.indexOf(' ') !== -1){
        document.getElementById('lerror').innerHTML ="Cannot contain space character ";
         return false;
    }
    else if(psw == ''){
        document.getElementById('lerror').innerHTML ="Password Must be filled";
        return false;
    }

    // else if(accounValid.findIndex(uName)){
    //     document.getElementById('lerror').innerHTML ="username/passwoord infalid ";
    //      return false;
    // }
   
    

    else{
     alert("Login succes");  
        return true;
        
    }
}   