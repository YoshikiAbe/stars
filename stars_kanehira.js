((numberOfLines) => {
    // *の数が指定された配列をぐるぐるして、指定された数の分だけ*を出力
    // [
    //   1, => *
    //   2, => **
    //   3, => ***
    //   4, => ****
    //   5  => *****
    // ]
    function printStars(stars) {
        stars.forEach((length) => {
            console.log('*'.repeat(length));
        });
    }
    // ピラミッド[1, 2, 3, 4, 5]
    // *
    // **
    // ***
    // ****
    // *****
    printStars(Array(numberOfLines).fill(null).map((value, i) => 1 + i));
    // 逆門松？[3, 2, 1, 2, 3]
    // ***
    // **
    // *
    // **
    // ***
    printStars(Array(numberOfLines).fill(null).map((value, i) => Math.abs(i - 2) + 1));
})(5);
