const divideAndSort = (number) => {
  let stringNumber = String(number);
  let result = "";
  let num = [];

  // Fungsi untuk mengurutkan angkaArray karakter secara manual
  const sortingArrayNumbers = (numArray) => {
    for (let i = 0; i < numArray.length - 1; i++) {
      for (let j = i + 1; j < numArray.length; j++) {
        if (numArray[i] > numArray[j]) {
          let temp = numArray[i];
          numArray[i] = numArray[j];
          numArray[j] = temp;
        }
      }
    }
    return numArray;
  };

  // Iterasi setiap karakter dalam string
  for (let i = 0; i < stringNumber.length; i++) {
    if (stringNumber[i] === "0") {
      if (num.length > 0) {
        num = sortingArrayNumbers(num);
        for (let j = 0; j < num.length; j++) {
          result += num[j];
        }
        num = [];
      }
    } else {
      num[num.length] = stringNumber[i];
    }
  }

  // Urutkan dan tambahkan num terakhir jika ada
  if (num.length > 0) {
    num = sortingArrayNumbers(num);
    for (let j = 0; j < num.length; j++) {
      result += num[j];
    }
  }
  console.log(Number(result));
};
divideAndSort(5956560159466056);
