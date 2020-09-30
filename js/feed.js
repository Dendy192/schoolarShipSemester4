function cekForm(){
    var name = document.getElementById('rName').value;
    var e = document.getElementById('email').value;
   
    
    

    
    var at =  e.indexOf('@');
    var dot = e.lastIndexOf('.');
    
    if(name == ''){
        document.getElementById('lerror').innerHTML = "Fullname Must be filled";
        return false;
    }
    
    else if(letter(name)==false){
        document.getElementById('lerror').innerHTML ="Must consist of letters only";
        return false;
    }
    else if(e == ''){
        document.getElementById('lerror').innerHTML ="Email Must be filled";
        return false;
    }
    
    else if(at <1 || dot<at+2 || dot+2>=e.length){
        document.getElementById('lerror').innerHTML ="email must be contain @ and .";
        return false;
    }
 

    else{
       
        alert("Thankyou for submit")
        return true;
        
    }
}   
function letter(name) {
      for (var i= 0; i < name.length; i++) {
       
        if (name.charAt(i) >= 48 || name.charAt(i) <= 57) { 
          return false;
        }
      }
      return true;
    };