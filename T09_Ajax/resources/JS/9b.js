const url = "http://127.0.0.1:9999/t2_result";
window.onload = () => {
    const calcBtn = document.querySelector('#calcBtn');
    const output = document.querySelector('#output');

    calcBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let num1 = document.querySelector('#num1').value;
        let sign = document.querySelector('#sign').value;
        let num2 = document.querySelector('#num2').value;
        let expr = [num1, sign, num2];

        if (validate(expr) && (sign === '+' || sign === '-' || sign === '*' || sign === '/')) {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', url, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    const resultObject = JSON.parse(xhr.responseText);
                    output.innerHTML = resultObject.result;
                }
            };
            xhr.send(
                JSON.stringify({
                    "num1": expr[0],
                    "sign": expr[1],
                    "num2": expr[2],
                })
            );
        }
        else {
            output.innerHTML = 'Wrong input!';
        }
        return false;
    });

    function validate(values) {
        return !(values === null || values === undefined || values.length !== 3 || isNaN(values[0]) || isNaN(values[2]));
    }
};
