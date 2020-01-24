window.onload = () => {
    const calcBtn = document.querySelector('#calcBtn');
    calcBtn.addEventListener('click', (e) => {
        const input = document.querySelector('#input');
        let output = document.querySelector('#output');
        let values = input.value.split(' ');
        if (validate(values)) {
            output.value = JSON.stringify({
                "num1": values[0],
                "sign": values[1],
                "num2": values[2],
            });
        }else output.value = "error";
        return true;
    });


    function validate(values) {
        return !(values === null || values === undefined || values.length !== 3 || isNaN(values[0]) || isNaN(values[2]));
    }
};
