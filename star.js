// class Numbers {
//   constructer(maxNum) {
//     this.nums: [],
//     this.maxNum: maxNum,
//     this.setNums: () => {
//   }
// };

const getSequence = (length) => {
  const sequence = Array.from({length: length}, (value, index) => index + 1);
  return sequence;
};

const prots = getSequence(100).forEach((value, index) => {
  const getMark = (value) => {
    if(value % 5 == 0) {
      return '^';
    }
    return '*';
  }

  const line = (index + 1) + ':';
  const stars = getMark(value).repeat(value);
  console.log(line + '\t' + stars);
});
