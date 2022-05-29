toastIcons = {
    success:'fa-regular fa-circle-check',
    info: 'fa-solid fa-circle-info',
    error: 'fa-solid fa-circle-exclamation',
    warn: 'fa-solid fa-exclamation'

}

function toast({selector, title, type, message, duration} = {
    selector: '#toast',
    title: '',
    message: '',
    type: 'info',
    duration: 4000
}){
    const toastContainer = document.querySelector(selector)
    if (toastContainer){
        const toast = document.createElement('div')
        toast.classList.add('toast')
        toast.innerHTML = 
        `<div class="toast__icon">
            <i class="${toastIcons[type]}"></i>
        </div>
        <div class="toast__body">
            <h3 class="title">${title}</h3>
            <p class="toast_msg">${message}</p>
        </div>
        <div class="toast__close">
            <i class="fa-solid fa-circle-xmark"></i>
        </div>`
        toastContainer.appendChild(toast)
        setTimeout(() => {
            toast.classList.add(type)
        },0);

        const autoDelete = setTimeout(() => {
            removeToast(toast, type)
        }, duration);

        closeBtn = toast.querySelector('.toast__close')
        closeBtn.addEventListener('click',e=>{
            clearTimeout(autoDelete)
            removeToast(toast, type)
        })
    }
}

function removeToast(toast, type){
    setTimeout(() => {
        toast.remove()
    }, 400);
    toast.classList.remove(type)
}
