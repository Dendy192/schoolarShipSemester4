//initial setup
document.addEventListener('DOMContentLoaded', function(){
    let stars = document.querySelectorAll('.star');
    stars.forEach(function(star){
        star.addEventListener('click', setRating); 
    });
    
    let rating = parseInt(document.querySelector('.stars').getAttribute('data-rating'));
    let target = stars[rating - 1];
    target.dispatchEvent(new MouseEvent('click'));
});

function setRating(ev){
    let span = ev.currentTarget;
    let stars = document.querySelectorAll('.star');
    let match = false;
    let num = 0;
    stars.forEach(function(star, index){
        if(match){
            star.classList.remove('rated');
        }else{
            star.classList.add('rated');
        }
        
        if(star === span){
            match = true;
            num = index + 1;
        }
    });
    document.querySelector('.stars').setAttribute('data-rating', num);
}

function cekForm(){
    var name = document.getElementById('uName').value;
    var e = document.getElementById('email').value;
   
    
    

    
    var at =  e.indexOf('@');
    var dot = e.lastIndexOf('.');
    
    if(name == ''){
        document.getElementById('rerror').innerHTML = "Fullname Must be filled";
        return false;
    }
    
    else if(letter(name)==false){
        document.getElementById('rerror').innerHTML ="Must consist of letters only";
        return false;
    }
    else if(e == ''){
        document.getElementById('rerror').innerHTML ="Email Must be filled";
        return false;
    }
    
    else if(at <1 || dot<at+2 || dot+2>=e.length){
        document.getElementById('rerror').innerHTML ="email must be contain @ and .";
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