const form = document.querySelector('form');

//if we collect the value before submitting then it will store empty value.
// const height = parseInt(document.querySelector('#height'));

form.addEventListener('submit', function(e){

    e.preventDefault(); //prevent it from submitting a form 
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');
    const guide = document.querySelector('#guide');

    if(height === '' || height < 0 || isNaN(height)){
        result.innerText = "Please enter a valid height";
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerText = "Please enter a valid weight";
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        //display results
        result.innerHTML = `<span>${bmi}</span>`;
        if(bmi < 18.6){
            guide.innerText = `Under Weight`;
        }else if(bmi >= 18.6 && bmi <= 24.9){
            guide.innerText = 'Normal Weight';
        }else{
            guide.innerText = `OverWeight`;
        }
    }
});

