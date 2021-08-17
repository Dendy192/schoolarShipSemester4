
function cekForm(){
    var name = document.getElementById('fName').value;
    var e = document.getElementById('email').value;
    var uName = document.getElementById('uName').value;
    var psw = document.getElementById('pass').value;
    var cpsw = document.getElementById('cPass').value;
    var cek = document.getElementById('checkbox').checked;
    
    let userAccount = new Array();
    
  
    
    var at =  e.indexOf('@');
    var dot = e.lastIndexOf('.');
    
    if(name == ''){
        document.getElementById('regiserror').innerHTML = "Fullname Must be filled";
        return false;
    }
    
    else if(letter(name)==false){
        document.getElementById('regiserror').innerHTML ="Must consist of letters only";
        return false;
    }
    else if(e == ''){
        document.getElementById('regiserror').innerHTML ="Email Must be filled";
        return false;
    }
    
    else if(at <1 || dot<at+2 || dot+2>=e.length){
        document.getElementById('regiserror').innerHTML ="email must be contain @ and .";
        return false;
    }
    
    else if(uName <7){
        document.getElementById('regiserror').innerHTML ="Length must be greater than 6 characters";
        return false;
    }
    else if(uName.indexOf(' ') !== -1){
        document.getElementById('regiserror').innerHTML ="Cannot contain space character ";
         return false;
    }
    else if(psw.length <9){
        document.getElementById('regiserror').innerHTML ="Password must more than 8 Character";
        return false;
    }
     else if(alphanum(psw)==true){ 
        document.getElementById('regiserror').innerHTML ="Password Must be alphanumeric ";
        return false;
    }
     else if(cpsw != psw){
        document.getElementById('regiserror').innerHTML ="Confirm password not same";
        return false;
     }
    
    
    else if(cek == false){
        document.getElementById('regiserror').innerHTML ="Must be checked";
        return false;
        
    }

    else{
        let userA = new Array();
        userA.push({
                id: Date.now(),
                userName: uName,
                password: psw,
                fullName: name,
                email: e
                
               })
               let ua = JSON.stringify(userA);
               localStorage.setItem('userAccount', ua);
               let get = localStorage.getItem('userAccount');
            console.log(get);
        alert("register succes");
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
    
function alphanum(psw){
    for (var i= 0; i < psw.length; i++) {
        if (psw.charAt(i) >= 47 || psw.charAt(i) <= 56 &&
            psw.charAt(i) >= 64 || psw.charAt(i) <= 91 &&
            psw.charAt(i) >= 96 || psw.charAt(i) <= 123) { 
            return false;
          }
        }
        return true;
};