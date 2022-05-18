const STEP_COUNT = 3
const multiStepForm = 
    document.querySelector("form[data-multi-step]");
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")]

let currentStep = formSteps.findIndex(step=>{
    return step.classList.contains("active");
})

if (currentStep < 0){
    currentStep = 0;
    formSteps[currentStep].classList.add('active')
}

formSteps.forEach(step=>{
    step.addEventListener("click", e=>{
        if (e.target.matches("[data-next]")){
            e.preventDefault()
            formSteps[currentStep].classList.remove("active")            
            currentStep += 1;
            renderStep()
        }
        else if (e.target.matches("[data-previous]")){
            e.preventDefault()
            formSteps[currentStep].classList.remove("active")
            currentStep -= 1;
            renderStep()
        }
    })
})

function renderStep(){
    if (currentStep < 0){
        currentStep = 0;
    }
    if (currentStep > STEP_COUNT){
        currentStep = 3;
    }
    formSteps[currentStep].classList.add('active')
}
