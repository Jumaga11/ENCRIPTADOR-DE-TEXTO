document.getElementById('encrypt-btn').addEventListener('click', encryptText);
document.getElementById('decrypt-btn').addEventListener('click', decryptText);
document.getElementById('copy-btn').addEventListener('click', copyToClipboard);

function encryptText() {
    const inputText = document.getElementById('input-text').value;
    const warningMsg = document.getElementById('warning-msg');

    if (!validateInput(inputText)) {
        warningMsg.textContent = "Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.";
        return;
    }

    warningMsg.textContent = "";
    const encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    
    document.getElementById('output-text').value = encryptedText;
}

function decryptText() {
    const inputText = document.getElementById('input-text').value;
    const warningMsg = document.getElementById('warning-msg');

    if (!validateInput(inputText)) {
        warningMsg.textContent = "Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.";
        return;
    }

    warningMsg.textContent = "";
    const decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    document.getElementById('output-text').value = decryptedText;
}

function validateInput(text) {
    const regex = /^[a-z\s]*$/;
    return regex.test(text);
}

function copyToClipboard() {
    const outputText = document.getElementById('output-text');
    outputText.select();
    outputText.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand('copy');
    alert("Texto copiado al portapapeles");
}
