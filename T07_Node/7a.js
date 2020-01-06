const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

///////////////http://localhost:3000/action=add&num1=5&num2=4 example link ////////////

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    let url = String(req.url);
    let urlQueries = url.split("&");
    let htmlContent;

    if (urlQueries.length === 3) {
        let action = urlQueries[0].replace("/", "").split("=")[1];
        let firstNumber = String(urlQueries[1].split("&")).split("=")[1] || "0";
        let secondNumber = String(urlQueries[2].split("&")).split("=")[1] || "0";

        let result = getResult(action.toLowerCase(), Number(firstNumber), Number(secondNumber));

        htmlContent = action + "(" + firstNumber + "," + secondNumber + ") = " + result;
    } else {
        htmlContent = "So yeah, it the query you need to set something like this: http://localhost:3000/action=div&num1=13&num2=4 \n UI is for losers";
    }

    res.end(htmlContent);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

function getResult(operation, number1, number2) {
    let result = 0;

    if (operation == "add")
        result = number1 + number2;

    else if (operation == "sub")
        result = number1 - number2;

    else if (operation == "mul")
        result = number1 * number2;

    else if (operation == "div" && number2 != 0)
        result = number1 / number2;

    return result;
}
