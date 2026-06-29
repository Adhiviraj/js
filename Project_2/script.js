const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const form = document.querySelector("#bmi-form");
const result = document.querySelector("#result");


form.addEventListener("submit",function(event) {
    event.preventDefault();
    const h = parseFloat(height.value);
    const w = parseFloat(weight.value);

   if (!h || !w || h <= 0 || w <= 0) {
    result.textContent = "Please enter valid height and weight.";
    return;
}

    const bmi = w / (h * h);

    let category = "";

    if(bmi < 18.5){
        category = "Underweight";
    }else if(bmi < 25){
        category = "Normal Weight";
    }else if(bmi < 30){
        category = "OverWeight";
    }else{
        category = "Obese";
    }

    result.textContent = `${bmi.toFixed(2)} (${category})`

})