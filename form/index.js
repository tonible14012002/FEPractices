const STEP_COUNT = 3
const multiStepForm = 
    document.querySelector("form[data-multi-step]");
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")]

let currentStep = getActiveCard()

if (currentStep < 0){
    currentStep = 0;
    formSteps[currentStep].classList.add('active')
}

formSteps.forEach(step=>{
    step.addEventListener("click", e=>{
        if (e.target.matches("[data-next]")){
            e.preventDefault()
            
            formSteps[currentStep].classList.remove("active")
            Fade(currentStep)
            currentStep += 1;
            renderStep()  
            
        }
        else if (e.target.matches("[data-previous]")){
            e.preventDefault()

            formSteps[currentStep].classList.remove("active")
            Fade(currentStep)
            currentStep -= 1;
            renderStep()

        }
    })
})

function renderStep(){
    if (currentStep < 0){
        currentStep = 0;
    }
    if (currentStep >= STEP_COUNT){
        currentStep = STEP_COUNT-1;
    }
    formSteps[currentStep].style.display = "block"
    setTimeout(()=>{
        formSteps[currentStep].classList.add('active')
    }, 100)
    
}

function Fade(step){
    setTimeout(() => {
        formSteps[step].style.display = "none";
    },200);
}

function getActiveCard(){
    return formSteps.findIndex(step=>{
        return step.classList.contains("active");
    })
}
