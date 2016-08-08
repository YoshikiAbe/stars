const getSequence = (length) => {
    const sequence = Array.from({length: length}, (value, index) => index + 1);
    return sequence;
};

const getMark = (value) => {
    if(value % 5 == 0) {
        return '^';
    }
    return '*';
}

const upSequence = getSequence(5)
const downSequece = getSequence(5).reverse();
upSequence.concat(downSequece).forEach((value, index) => {
    const line = (index + 1) + ':';
    const plots = getMark(value).repeat(value);
    console.log(line + '\t' + plots);
});
