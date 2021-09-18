// Validate formulario
const inputs = document.querySelectorAll('.field__input');

// Inputs listener
inputs.forEach(input => {
    input.addEventListener('blur', validateInput);
});

inputs.forEach(input => {
    input.addEventListener('input', validateInput);
});

// Validate function
function validateInput(e) {
    const state = ['is-valid', 'is-invalid'];

    let classState;
    if(e.target.value.length === 0) {
        classState = state[1];
    } else {
        classState = state[0];
    }

    e.target.classList.remove(...state);
    e.target.nextElementSibling.classList.remove(...state);
            
    e.target.classList.add(classState);
    e.target.nextElementSibling.classList.add(classState);

    // Inject the div of error dinamically if it's neccesary
    if(classState === 'is-invalid') {
        // Error message
        if(e.target.parentElement.nextElementSibling.classList[0] !== 'alert') {
            const errorDiv = document.createElement('div');
            errorDiv.appendChild(document.createTextNode('This field is mandatory'));
            errorDiv.classList.add('alert');

            // Insert the error
            e.target.parentElement.parentElement.insertBefore(errorDiv, e.target.parentElement.nextElementSibling);
        }
    } else {
        // Clean the message if exists
        if(e.target.parentElement.nextElementSibling.classList[0] === 'alert') {
            e.target.parentElement.nextElementSibling.remove();
        }
    }
}

// Show and hide password
const showPasswordBtn = document.querySelector('.field__input-show');
showPasswordBtn.addEventListener('click', e => {
    const passwordInput = document.querySelector('#password');

    if(e.target.classList.contains('show')) {
        // Show text
        e.target.classList.remove('show');
        // Change text
        e.target.textContent = 'hide';
        // Change to "show password"
        passwordInput.type = 'text';
        
    } else {
        // Show password
        e.target.classList.add('show');
        // Change text
        e.target.textContent = 'show';
        // Change to "show password"
        passwordInput.type = 'password';
    }
})