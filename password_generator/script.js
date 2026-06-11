const generateBtn = document.getElementById('generateBtn');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const passwordLength = document.getElementById('passwordLength');
const charType = document.getElementById('charType');

const charsets = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*'
};

function getCharset() {
    const selected = charType.value;
    const sets = {
        all: charsets.uppercase + charsets.lowercase + charsets.numbers + charsets.symbols,
        alphanumeric: charsets.uppercase + charsets.lowercase + charsets.numbers,
        letters: charsets.uppercase + charsets.lowercase,
        numbers: charsets.numbers,
        symbols: charsets.symbols,
        lettersNumbers: charsets.uppercase + charsets.lowercase + charsets.numbers,
        lettersSymbols: charsets.uppercase + charsets.lowercase + charsets.symbols
    };
    return sets[selected] || sets.all;
}

function generatePassword() {
    const length = parseInt(passwordLength.value);
    const charset = getCharset();
    let password = '';
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
}

generateBtn.addEventListener('click', () => {
    password1.textContent = generatePassword();
    password2.textContent = generatePassword();
});

// Copy to clipboard functionality
password1.addEventListener('click', () => {
    if (password1.textContent) {
        navigator.clipboard.writeText(password1.textContent);
        password1.style.backgroundColor = '#00CC00';
        password1.style.color = '#000000';
        setTimeout(() => {
            password1.style.backgroundColor = '#3a3a3a';
            password1.style.color = '#00CC00';
        }, 300);
    }
});

password2.addEventListener('click', () => {
    if (password2.textContent) {
        navigator.clipboard.writeText(password2.textContent);
        password2.style.backgroundColor = '#00CC00';
        password2.style.color = '#000000';
        setTimeout(() => {
            password2.style.backgroundColor = '#3a3a3a';
            password2.style.color = '#00CC00';
        }, 300);
    }
});
