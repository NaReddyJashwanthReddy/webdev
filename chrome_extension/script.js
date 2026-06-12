let user_input = document.getElementById('user-input');
let save_button = document.getElementById('save-button');
let reset_button = document.getElementById('reset-button');
let saved_data = document.getElementById('saved-data');


save_button.addEventListener('click', () => {
    if(user_input.value.trim() !== '') {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = user_input.value;
        a.target = '_blank';
        a.textContent = user_input.value;
        li.appendChild(a);
        saved_data.appendChild(li);
        user_input.value = '';
    }
});

reset_button.addEventListener('click', () => {
    saved_data.innerHTML = '';
    user_input.value = '';
});
