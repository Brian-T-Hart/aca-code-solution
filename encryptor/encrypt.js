const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ?.!";
const cypher  = "defghijklmnopqrstuvwxyzabcDEFGHIJKLMNOPQRSTUVWXYZABC1234";

function encrypt(text) {
    let result = '';

    for (let i = 0; i < text.length; i++) {
        let letter = text[i];
        let letterIndex = letters.indexOf(letter);

        if (letterIndex < 0) {
            result += letter;
        } else {
            result += cypher[letterIndex];
        }
    }

    return result;
}

function decrypt(text) {
    let result = '';

    for (let i = 0; i < text.length; i++) {
        let letter = text[i];
        let letterIndex = cypher.indexOf(letter);

        if (letterIndex < 0) {
            result += letter;
        } else {
            result += letters[letterIndex];
        }
    }

    return result;
}

document.getElementById('encrypt-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let message = document.getElementById('encrypt');
    document.getElementById('encoded-message').innerHTML = encrypt(message.value);
    message.value = "";
});

document.getElementById('decrypt-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let message = document.getElementById('decrypt').value;
    document.getElementById('decoded-message').innerHTML = decrypt(message);
    message.value = "";
});
