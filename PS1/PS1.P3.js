const foo = (str,func) => func(str);
const expression1 = 'supercalifragilisticexpialidocious';

const modified = foo(
    str=expression1,
    func1=>{
        var temp = '';
        const result = '';
        const resultArray = new Array;
        const s = str.split('');
        for(let i = 0; i<s.length; i ++){
            if(s[i] != 'c'){
               temp=temp+s[i];
            }
            else{
                resultArray.push(temp);
                temp='';
                temp+=s[i];
            }
        }
        resultArray.push(temp);
        return resultArray;
    }
)

    
}

const upperA = foo(
    str=expression1,
    func2=>{
        const s = str.split('');
        var result = '';
        var count = 0;
        for(let i =0; i<s.length; i++){
            if(s[i] == 'a'){
                result+='A'; 
                count++;
            }
            else{
                result+=s[i];
            }


        }
        let res = {
            originalString: str,
            modifiedString: result,
            numberReplaced: count,
            length: result.length
        }
        return res;
    }
)


console.log(modified);
console.log(upperA);