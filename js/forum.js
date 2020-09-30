function onLoad(){
    var name = new Array();
    var mel = new Array();
    var thrd = new Array();

    name = localStorage.getItem('nama');
    mel = localStorage.getItem('mail');
    thrd = localStorage.getItem('tred');

    for(i=0;i<i.length;i++){
        var result ="<img class=\"poto\" src=\"img/512px-Circle-icons-profile.svg.png\" alt=image /><br>"+name[i]+"<br>"+mel[i]+"<br>"+thrd[i]+"";
        document.getElementById('frm').innerHTML = result;

    }
    for (i = 0; i < localStorage.length; i++) {
        x = localStorage.key(i);
        document.getElementById("frm").innerHTML += x;
      }
}
function myFunciton(){


    var user = document.getElementById('uName').value;
    var e = document.getElementById('email').value;
    var thread = document.getElementById('txt').value;
    var at =  e.indexOf('@');
    var dot = e.lastIndexOf('.');
    if(user == ''){
       document.getElementById('nwerror').innerHTML = "Fullname Must be filled";
        return false;
    }
    
    
    else if(e == ''){
        document.getElementById('nwerror').innerHTML = "Email Must be filled";
        return false;
    }
    
    else if(at <1 || dot<at+2 || dot+2>=e.length){
        document.getElementById('nwerror').innerHTML = "email must be contain @ and .";
        return false;
    }
    else{
        alert("Data Saved");
       localStorage.setItem('nama', user);
       localStorage.setItem('mail', email);
       localStorage.setItem('tred', thread);
       for (i = 0; i < localStorage.length; i++) {
        x = localStorage.key(i);
        document.getElementById("frm").innerHTML += x;
      }
        return true;
       
        
    }
        

    
    
    
}

    


function show() {
    var x = document.getElementById('thrd');
    
      x.style.display = "block";
  }

function hide(){
    var x = document.getElementById('thrd');
    x.style.display = "none";
}

