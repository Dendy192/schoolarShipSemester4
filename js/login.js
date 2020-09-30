function cekForm(){
    var uName = document.getElementById('uName').value;
    var psw = document.getElementById('pass').value;
   var user = localStorage.getItemetItem("user",uName);
   
    var pss = localStorage.getItemetItem("pass",psw);
    
    

    
    
    if(uName == ''){
        document.getElementById('lerror').innerHTML = "Username Must be filled";
        return false;
    }
    
   
    else if(uName.indexOf(' ') !== -1){
        document.getElementById('lerror').innerHTML ="Cannot contain space character ";
         return false;
    }

    else if(uName != user && psw != pss){
        document.getElementById('lerror').innerHTML ="username/passwoord infalid ";
         return false;
    }
   
    

    else{
     alert("Login succes");  
        return true;
        
    }
}   