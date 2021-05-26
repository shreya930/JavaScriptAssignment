const  fahrenheitToCelcius = (temp) => {
    let value;
    value = (temp*(9/5))+32;
    console.log(`${value}*C`);
}
const  celciustoFahrenhite = (temp) => {
    let value;
    value = (temp-32)*(5/9);
    console.log(`${value}*F`);
}

fahrenheitToCelcius(3);
celciustoFahrenhite(43);