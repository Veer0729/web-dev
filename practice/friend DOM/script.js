var istatus = document.querySelector("h1")

var friends = document.querySelector("#Add")

var click = 1

friends.addEventListener("click", function(){
    if(click == 1){
    istatus.innerHTML = "Friends"
    istatus.style.color = "green"
    friends.innerHTML = "Remove"
    click = 0
    }
    else{
        istatus.innerHTML = "stranger"
        istatus.style.color = "red"
        friends.innerHTML = "Add friend"
        click = 1
    }
})
