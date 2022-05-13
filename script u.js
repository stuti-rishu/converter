var form = document.querySelector('form');
form.addEventListener('submit',function(e){
    //grab content form input
    var  feet = document.querySelector('#feet');
    var  centi = document.querySelector('#centi');

    e.preventDefault();
    feet = parseInt(feet.value);

    if (isNaN(feet)){
        centi.textContent = "please enter a valid number!";
    }
    else if (feet <= 0){
        centi.textContent = "please enter a feet value > 0";
    }
    else {
        var  converted_value = feet*30.48;
        centi.textContent = `${converted_value}cm`;
        document.querySelector('#feet').value = '';
        document.querySelector('#centi').value = '';
    }
})
