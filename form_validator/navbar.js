const userNameTag = document.getElementById('user-name')
const subnav = document.querySelector('#user-name > .subnav')

console.log(userNameTag)
console.log(subnav)

userNameTag.onclick = ()=>{
    subnav.style.display = 'block'
}