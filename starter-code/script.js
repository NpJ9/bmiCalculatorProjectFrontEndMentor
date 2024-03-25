// Switch Styles for Metric/Imperial  

function UnitofMeasurement(){
    
let imperial = document.getElementById("imperial__radio");
let metric = document.getElementById("metric__radio");
let imperialWrapper = document.getElementById("imperial__wrapper");
let metricWrapper = document.getElementById("metric__wrapper");

    if(imperial.checked === true){
        imperialWrapper.classList.add("activate");
        imperialWrapper.classList.remove("deactivate");
        metricWrapper.classList.add("deactivate");
        metricWrapper.classList.remove("activate");
        console.log("Checked Imperial")
        calculateBMI()
    } else {
        metricWrapper.classList.add("activate");
        metricWrapper.classList.remove("deactivate");
        imperialWrapper.classList.add("deactivate");
        imperialWrapper.classList.remove("activate");
        console.log("Checked Metric")
        calculateBMI()
    }
}

// Calculate BMI

function calculateBMI(){
let metric = document.getElementById("metric__radio");

// Metric Calculator

if (metric.checked === true){
        let metricHeightInput = document.getElementById("metric__height").value;
        let metricWeightInput = document.getElementById("metric__weight").value;
        let result = document.getElementById("result");
        let heightMeterConversion = metricHeightInput / 100;
        result = 0
        result =  (metricWeightInput / (heightMeterConversion * heightMeterConversion)).toFixed(1);
        document.getElementById("result").innerHTML = result;

        if(result < 18.5) {
            document.getElementById("result__BMI__group").innerHTML = "you are underweight"
        } else if (result >= 18.5 && result <= 24.9){
            document.getElementById("result__BMI__group").innerHTML = "you are normal weight"
        } else if (result >= 25 && result <= 29.9){
            document.getElementById("result__BMI__group").innerHTML = "you are overweight"
        } else if (result >= 30 && result <= 34.9){
            document.getElementById("result__BMI__group").innerHTML = "you are obese"
        }else if (result >= 35){
            document.getElementById("result__BMI__group").innerHTML = "you are extremely obese"
        }
    
} else {

// Imperial Calculator

        let imperialHeightftInput = parseInt(document.getElementById("height__ft").value);
        let imperialHeightinInput = parseInt(document.getElementById("height__inches").value);
        let imperialWeightStInput = parseInt(document.getElementById("weight__st").value);
        let imperialWeightLbsInput = parseInt(document.getElementById("weight__lbs").value);
        let totalImperialheight = (imperialHeightftInput * 12) + imperialHeightinInput;
        let totalImperialWeight = (imperialWeightStInput * 14) + imperialWeightLbsInput
        let imperialBMIResult = (totalImperialWeight / (totalImperialheight * totalImperialheight)) * 703

        document.getElementById("result").innerHTML = imperialBMIResult.toFixed(1);
        console.log(totalImperialheight)
        console.log("FT = " + imperialHeightftInput);
        console.log("Inches = " + imperialHeightinInput);
        console.log("Total height in inches = " + totalImperialheight);
        console.log("ST = " + imperialWeightStInput);
        console.log("Lbs = " + imperialWeightLbsInput);
        console.log("Total weigth in lbs = " + totalImperialWeight);
        console.log("Imperial BMI is = " + imperialBMIResult)

        if(imperialBMIResult < 18.5) {
            document.getElementById("result__BMI__group").innerHTML = "you are underweight"
        } else if (imperialBMIResult >= 18.5 && imperialBMIResult <= 24.9){
            document.getElementById("result__BMI__group").innerHTML = "you are normal weight"
        } else if (imperialBMIResult >= 25 && imperialBMIResult <= 29.9){
            document.getElementById("result__BMI__group").innerHTML = "you are overweight"
        } else if (imperialBMIResult >= 30 && imperialBMIResult <= 34.9){
            document.getElementById("result__BMI__group").innerHTML = "you are obese"
        }else if (imperialBMIResult >= 35){
            document.getElementById("result__BMI__group").innerHTML = "you are extremely obese"
        }
}
}




