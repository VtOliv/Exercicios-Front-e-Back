let inputCrm = document.getElementById('crm');
let inputNomeMedico = document.getElementById('nomeMedic');
let inputDataRec = document.getElementById('dataRece');
let inputQtd = document.getElementById('qtdCaix');
let inputNomePaciente = document.getElementById('nomePacie');
let inputCpf = document.getElementById('cpf');
let inputDataNasc = document.getElementById('dn');


inputCpf.addEventListener('keyup',(event) => {
    if(isNaN(inputCpf.value)) {
        inputCpf.value = inputCpf.value.substring(0, inputCpf.value.length -1)
    }

    if (inputCpf.value.length >= 11) {
        inputCpf.value = inputCpf.value.substring(0, 11)
    }
})

inputCrm.addEventListener('keyup',(event) => {
    if(isNaN(inputCrm.value)) {
        inputCrm.value = inputCrm.value.substring(0, inputCrm.value.length -1)
    }

    if (inputCrm.value.length >= 6) {
        inputCrm.value = inputCrm.value.substring(0, 6)
    }
})

