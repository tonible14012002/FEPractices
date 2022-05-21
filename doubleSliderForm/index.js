const overlayContainer = document.querySelector(".container")
const form = [...document.querySelectorAll(".form-container")]
const signInBtn = document.getElementById("sign-in-btn")
const signUpBtn = document.getElementById("sign-up-btn")


signInBtn.addEventListener("click", e => {
    overlayContainer.classList.remove("right-panel-active")
})

signUpBtn.addEventListener("click", e=>{
    overlayContainer.classList.add("right-panel-active")

})