var nameInput = document.getElementById('name')
var emailInput = document.getElementById('email')
var passInput = document.getElementById('pass')

var userName=localStorage.getItem("Infoname")

var container=[];  
if(localStorage.getItem("Info")==null){
    var container=[];  
}
else{
    var container=JSON.parse(localStorage.getItem("Info"))    
}
function addData() {

  
   var data={
       name:nameInput.value,
       email:emailInput.value,
       pass:passInput.value
   }
   container.push(data);
    localStorage.setItem('Info', JSON.stringify(container));
    if(nameInput.value && emailInput.value&& passInput.value !=0){
        alert('sucess')
    }
    else{
        alert('empty value')
    }
} 

function login(){
  
    var emailinInput= document.getElementById('emailin')
    var passinInput= document.getElementById('passin')
    var loginBtn=document.getElementById("loginBtn")

    if(emailinInput.value!="" && passinInput.value!=""){

        for(var i=0;i<container.length;i++){
            if(emailinInput.value==container[i].email && passinInput.value==container[i].pass){
                localStorage.setItem("Infoname",container[i].name)
                loginBtn.setAttribute("href","wel.html")
            }
           
        }
    }
    else{
        alert('wrongg')
    }

}

function welcome(){
    document.getElementById("welcomName").innerHTML= "Welcome " + userName
}
function cl(){
    localStorage.removeItem("Infoname")
}