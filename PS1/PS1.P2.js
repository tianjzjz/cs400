const evaluate = str =>{
    const s = str.split('');
    var left = parseInt(s[0]);
    var right = parseInt(s[2]);
    const operator = s[1];

    switch(operator){
        case'+':
            return left + right;
            break;
        case'-':
            return left-right;
            break;
        case'*':
            return left*right;
        case'/':
            return left/right;

    }
  }   

  const expression1 = '8+2';
  console.log(`${expression1} = ${evaluate(expression1)}`);
  const expression2 = '8*2';
  console.log(`${expression2} = ${evaluate(expression2)}`);
  const expression3 = '8/2';
  console.log(`${expression3} = ${evaluate(expression3)}`);
  const expression4 = '8-2';
  console.log(`${expression4} = ${evaluate(expression4)}`);