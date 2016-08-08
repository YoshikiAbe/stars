//
// const getMark = (value) => {
//     if(value % 5 == 0) {
//         return '^';
//     }
//     return '*';
// }

const getSequence = (length) => {
    const sequence = Array.from({length: length}, (value, index) => index + 1);
    return sequence;
};

const printEvenLines = (args) => {
    args.forEach((value, index) => {
        const line = index + 1;
        if(line % 2 !== 0) return;
        console.log(line + ':\t' + value);
    });
}

const sequence = getSequence(10);
const plots = sequence.map((value, index) => {
    return '*'.repeat(value);
});
printEvenLines(plots);
