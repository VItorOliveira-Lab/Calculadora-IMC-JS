let inputName = document.querySelector("#nome");
let inputHeight = document.querySelector("#altura");
let inputWeight = document.querySelector("#peso");
let buttonCalculate = document.querySelector("#calcular");


buttonCalculate.addEventListener("click", imc);

function imc() {
    if(inputName.value !== "" && inputHeight.value !== "" && inputWeight.value !== "") {
        openModal();
        showContent();
    }else {
        alert("Preencha Corretamente!")
    }
}

function showContent() {
    let imc = (inputWeight.value / (inputHeight.value * inputHeight.value)).toFixed(1);
    const text = document.querySelector("#innerText").innerHTML = `${inputName.value} seu IMC é de ${imc} e você está ${verificateImc(imc)}.`

}

function verificateImc(imc) {
    if(imc < 18.5) {
        return "abaixo do peso."
    }else if(imc < 25) {
        return "com peso ideal. Parabéns!"
    }else if(imc < 30) {
        return "levemente acima do peso."
    }else if(imc < 35) {
        return "com obesidade grau I."
    }else if(imc < 40) {
        return "com obesidade grau II."
    }else {
        return "obesidade grau III. Cuidado!"
    }
};
function openModal() {
    let modal = document.querySelector(".modal-result")
    modal.classList.add("active");
};

let buttonCloseModal = document.querySelector(".close-modal");
buttonCloseModal.addEventListener("click", closeModal)

function closeModal(){
    document.querySelector(".modal-result").classList.remove("active")
    clearInputs();
};

function clearInputs() {
    inputName.value = "";
    inputHeight.value = "";
    inputWeight.value = "";
};


// Scroll Reveal

const scrollReveal = ScrollReveal({
    origin: 'left',
    distance: '40px',
    duration: 500,
    reset: true
});
  
scrollReveal.reveal(
    `body h1, body p,
    .container, .container-wrapper
    `, { interval: 100});