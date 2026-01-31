 let num1= prompt('Enter Number 1');
    let num2 = prompt('Enter Number 2');

    let sum = Number(num1) + Number(num2);
    let mult = num1 * num2;
    let sub = num1 - num2;
    let div = num1 / num2;

    console.log(num1 + ' + ' + num2 + ' = ' + sum);
    console.log(num1 + ' - ' + num2 + ' = ' + sub);
    console.log(num1 + ' * ' + num2 + ' = ' + mult);
    console.log(num1 + ' / ' + num2 + ' = ' + div);

    console.log('is' + num1 + '>'+ num2 + num1 > num2);
    console.log('is' + num1 + '>'+ num2 + num1 < num2);
    console.log('is' + num1 + '>'+ num2 + num1 == num2);
    console.log('is' + num1 + '>'+ num2 + num1 != num2);
