/*
  kが一文字なので、冠詞aと予想できる。
  したがって、10文字シフトを行う。

  答え：
  humpty dumpty sat on a wall,
  humpty dumpty had a great fall.
  all the king's horses and all the king's men
  couldn't put humpty together again.
*/

const str = `Rewzdi Newzdi ckd yx k gkvv,
Rewzdi Newzdi rkn k qbokd pkvv.
Kvv dro usxq'c rybcoc kxn kvv dro usxq'c wox
Myevnx'd zed Rewzdi dyqodrob kqksx.
`.toLowerCase();

const shiftNLetter = (letter, n) => {
  const alphabetList = "abcdefghijklmnopqrstuvwxyz";
  const index = alphabetList.indexOf(letter);

  if (index <= -1) {
    return letter;
  }

  const shiftedIndex = index - n;

  if (shiftedIndex < 0) {
    return alphabetList[shiftedIndex + alphabetList.length];
  }

  return alphabetList[shiftedIndex];
};

let result = "";
for (let i = 0; i < str.length; i++) {
  result += shiftNLetter(str[i], 10);
}

console.log(result);
