function onLoad(){
    // let post = JSON.parse(localStorage.getItem('Forum'));
    // for(let i = 0;i<post.length;i++){
    //     var result ="<img class=\"poto\" src=\"img/512px-Circle-icons-profile.svg.png\" alt=image /><br>"+post[i]+"<br>"+post[i]+"<br>"+post[i]+"<br>"+post[i];
    //     document.getElementById('frm').innerHTML = result;

    // }
    // const string = localStorage.getItem('Forum');
    // const array = JSON.parse(string);
    
    // const ul = document.createElement('ul');
    // let data = '';
    // for(let i = 0; i < array.length; i++){
    //   const li = document.createElement('li');
    //   const text = document.createTextNode(array[i]);
    //   li.appendChild(text);
    //   ul.appendChild(li);
    // }
    // // assuming you have id of 'root' where you want to display these items
    // document.getElementById('frm').appendChild(ul);
    // console.log("retrieve records");
     
    // var records = Json.parse(localStorage.getItem('Forum'));
    // var paragraph = document.createElement("p");
    // var infor = document.createTextNode(records);
    // paragraph.appendChild(infor);
    // var element = document.getElementById('frm');
    // element.appendChild(paragraph);
    const fr = document.getElementById('frm');
    const p = JSON.parse(localStorage.getItem('Form'));
    for(let i =0; i < p.length; i++){
        
        const data = p[i];
      
        fr.innerHTML = data;
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
        var forum = new Array();
        forum.push({
            id: Date.now(),
            username: user,
            email: e,
            thread: thread
        });
      
        localStorage.setItem('Forum', JSON.stringify(forum));
        alert("Data Saved");
        var get = json.parse(localStorage.getItem('Forum'));
        console.log(get);
        localStorage.reload();
        
        
       
        
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

