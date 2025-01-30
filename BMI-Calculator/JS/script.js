//BMI Calculator Javascript//

function validateForm() {
    let inputBodyWeight = document.getElementById('body-weight-input').value;
    let inputAge = document.getElementById('age-input').value;
    let inputBodyHeight = document.getElementById('body-height-input').value;

    console.log ('Body Weight:' + inputBodyWeight);
    console.log ('Age:' + inputAge);
    console.log ('Body Height:' + inputBodyHeight);

    if (inputBodyWeight !='' && inputAge !='' && inputBodyHeight !='') {
        let calculate = parseInt(inputBodyWeight) + parseInt(inputBodyHeight);
        updateResult(calculate);
    } else {
        alert('Your input is empty, Please Check Again!');
        }
    }

    function updateResult(value) {
        document.getElementById('result-calculation').innerHTML = value;
    }