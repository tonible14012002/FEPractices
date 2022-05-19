const STEP_COUNT = 3
const multiStepForm = 
    document.querySelector("form[data-multi-step]");
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")]

let currentStep = formSteps.findIndex(step=>{
    return step.classList.contains("active");
})

formSteps.forEach(e=>{
    e.classList.add('deactive')
})

if (currentStep < 0){
    currentStep = 0;
    formSteps[currentStep].classList.add('active')
    formSteps[currentStep].classList.remove('deactive')
}

formSteps.forEach(step=>{
    step.addEventListener("click", e=>{
        if (e.target.matches("[data-next]")){
            e.preventDefault()
            if (e.target.classList.contains('deactive'))
                return;
            else {
              formSteps[currentStep].classList.remove("active") 
            formSteps[currentStep].classList.add('deactive')
            formSteps[currentStep+1].classList.add('active')   
            formSteps[currentStep+1].classList.remove('deactive')  
            lessTheOppacity(formSteps[currentStep])
            increaseTheOppacity(formSteps[currentStep+1])
            currentStep += 1;
            renderStep()  
            }
            
        }
        else if (e.target.matches("[data-previous]")){
            e.preventDefault()
            if (e.target.classList.contains('deactive'))
                return;
            else{
                formSteps[currentStep].classList.remove("active")
                formSteps[currentStep].classList.add('deactive')
                formSteps[currentStep-1].classList.add('active')
                formSteps[currentStep-1].classList.remove('deactive')  
                lessTheOppacity(formSteps[currentStep])
                increaseTheOppacity(formSteps[currentStep-1])
                currentStep -= 1;
                renderStep()
            }
            
            
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
    formSteps[currentStep].classList.remove('deactivate')
}


function lessTheOppacity(node)
{
    var oppArray = ["0.9", "0.8", "0.7", "0.6", "0.5", "0.4", "0.3", "0.2", "0.1", "0"];
    var x = 0;
    (function next() {
        node.style.opacity = oppArray[x];
        if(++x < oppArray.length) {
            setTimeout(next, 0.001); //depending on how fast you want to fade
        }
    })();

}

function increaseTheOppacity(node)
{
    var oppArray = ["0.9", "0.8", "0.7", "0.6", "0.5", "0.4", "0.3", "0.2", "0.1", "0"];
    oppArray = oppArray.reverse()
    var x = 0;
    (function next() {
        node.style.opacity = oppArray[x];
        if(++x < oppArray.length) {
            setTimeout(next, 0.001); //depending on how fast you want to fade
        }
    })();
    
}