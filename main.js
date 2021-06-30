let searchBtn = document.querySelector("#searchBtn");
let searchUser= document.querySelector("#searchUser");
let ui=new UI();

//add Event 
searchBtn.addEventListener("click",(e)=>{
    let userInput = searchUser.value
    if(userInput!=''){
        fetch(`https://api.github.com/users/${userInput}`)
        .then(res=>res.json())
        .then(data=>{
            //console.log(data);
            if(data.message=="Not Found")
            {
                ui.showAlert("user not Found", "alert alert-danger")
            }else{
                ui.showProfile(data)
            }
        })
    }else{
        ui.clearProfile()
    }
})