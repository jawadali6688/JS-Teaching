const signupButton = document.getElementsByTagName("span")[1]
const loginButton = document.getElementsByTagName("span")[0]
const signupForm = document.getElementsByClassName("auth-signup")[0]
const loginForm = document.getElementsByClassName("auth-login")[0]

signupButton.addEventListener("click", ()=> {
    signupForm.style.display = "flex"
    loginForm.style.display = "none"
    signupButton.style.backgroundColor = "blueviolet"
    loginButton.style.backgroundColor = "rgb(48, 48, 48)"
})

loginButton.addEventListener("click", ()=> {
    loginForm.style.display = "flex"
    signupForm.style.display = "none"
    loginButton.style.backgroundColor = "blueviolet"
    signupButton.style.backgroundColor = "rgb(48, 48, 48)"
})

