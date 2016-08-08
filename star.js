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

const sequence = getSequence(5)
const sequenceReversed = sequence.slice().reverse();

sequence.concat(sequeceReversed).forEach((value, index) => {
    const line = (index + 1) + ':';
    const plots = getMark(value).repeat(value);
    console.log(line + '\t' + plots);
});
