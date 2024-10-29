function validateForm() {

    const inputs = document.querySelectorAll('.a');
    const btn = document.querySelector('.bt')
    let allFilled = true;

    inputs.forEach(input => {

        if (input.value.trim() === '') {
            input.style.borderColor = 'red';
            allFilled = false; 
        } else {
            input.style.borderColor = '';
        }
    });

   
        if(!allFilled) {
            btn.style.backgroundColor = 'red';
        } else {
            btn.style.backgroundColor = 'blue' ;

        }
    }


