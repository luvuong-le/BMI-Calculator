let resultOutput = document.getElementById("resultOutput");
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let modalBody = document.getElementById("modal-bod");
let modal = document.getElementById("modalJ");
let modalFoot = document.getElementById("modal-foot");
let closeBtn = document.querySelector(".closeBtn");
let submitBtn = document.getElementById("submit");


submitBtn.addEventListener("click", (e) => {
    if (height.value && weight.value != "") {
        e.preventDefault();

        /* Get the height and width and do the calculation */
        let weightValue = weight.value;
        let heightValue = height.value;

        /* Convert height to metres */
        let heightInM = parseInt(heightValue) / 100;

        let BMIValue = Number(parseInt(weightValue) / (heightInM * heightInM)).toFixed(2);

        modalBody.innerHTML = "Our results have given us... " + BMIValue.toString();

        /* If statements */
        if (BMIValue < 15) {
            modalFoot.innerHTML = "Very Severly Underweight";
        } else if (BMIValue >= 16 && BMIValue < 16) {
            modalFoot.innerHTML = "Severly Underweight";
        } else if (BMIValue >= 16 && BMIValue < 18.5) {
            modalFoot.innerHTML = "Underweight";
        } else if (BMIValue >= 18.5 && BMIValue < 25) {
            modalFoot.innerHTML = "Normal (Healthy Weight)";
        } else if (BMIValue >= 25 && BMIValue < 30) {
            modalFoot.innerHTML = "Overweight";
        } else if (BMIValue >= 30 && BMIValue < 35) {
            modalFoot.innerHTML = "Moderately Obese";
        } else if (BMIValue >= 35 && BMIValue < 40) {
            modalFoot.innerHTML = "Severly Obese";
        } else if (BMIValue > 40) {
            modalFoot.innerHTML = "Very Severly Obese";
        } else {
            // Do nothing
        }

        modal.style.display = "block";
    }
});


closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
