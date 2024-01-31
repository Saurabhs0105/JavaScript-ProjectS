let isStatus = document.querySelector("h5");

let btn = document.querySelector("#add");

let check = 0;



btn.addEventListener("click", function(){
    if(check==0){
        isStatus.innerHTML= "Friends";
        isStatus.style.color= "green";
        btn.innerHTML = "Remove Friend";
        btn.style.backgroundColor = "#dadada";
        btn.style.color = "#111";
        check = 1;
    }
    else{
        isStatus.innerHTML= "Stranger";
        isStatus.style.color= "Red";
        btn.innerHTML = "Add Friend";
        btn.style.backgroundColor = "cadetblue";
        btn.style.color = "#fff";
    
        check = 0;
    }
  
})