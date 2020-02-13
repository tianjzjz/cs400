function* emitword(str){
    list = str.split(' ');
    let len = list.length;
    let index = 0;
    while(len -- > 0){
        yield list[index];
        index++;
    }

}
const str = 'All I know is something like a bird within her sang';

test = emitword(str);
word=test.next();
while(word.done==false){
    console.log(word.value);
    word=test.next();
}