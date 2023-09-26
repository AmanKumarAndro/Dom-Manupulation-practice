var isat = document.querySelector("h5")
var fri = document.querySelector("#frien")

flag = 0

fri.addEventListener("click", function() {
    if (flag==0) {
        isat.innerHTML = "Friends"
        isat.style.color = "green"
        fri.innerHTML = "Remove Friend"
        fri.style.backgroundColor="#dadadd"
        fri.style.color="#111"
        flag=1;
    } else {
        isat.innerHTML = "Stranger"
        isat.style.color = "Red"
        fri.innerHTML = "Add Friend"
        fri.style.backgroundColor="cadetblue"
        fri.style.color="#fff"
        flag=0;
        
    }

})