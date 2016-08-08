((numberOfLines) => {
    const printStars = (args) => {
        args.forEach((value, index) => {
            console.log((index + 1) + ':\t' + value);
      });
    }

    const getMark = (value) => {
        if(value % 5 == 0) {
            return '^';
        }
        return '*';
    }

    const getSequence = (length) => {
        const sequence = Array.from({length: length}, (value, index) => index + 1);
        return sequence;
    };


    const sequence = getSequence(10);
    const plots = sequence.filter((value, index) => {
        const line = index + 1;
        if(line % 2 !== 0) return false;
        return '*'.repeat(value);
    });
})(5);
