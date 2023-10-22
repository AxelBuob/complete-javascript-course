let bill = 40;

console.log(`
    The bill was ${bill}, the tip was
    ${tip = bill < 50 || bill > 300 ? bill * 0.20 : bill * 0.15}
    , and the total value ${tip + bill}
`);
