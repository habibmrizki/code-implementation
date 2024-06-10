const reverseWords = (kalimat) => {
  let hasil = "";
  let ba = 0;
  let bb = 0;

  for (let i = 0; i <= kalimat.length; i++) {
    if (kalimat[i] === " " || i === kalimat.length) {
      for (let j = bb - 1; j >= ba; j--) {
        hasil = kalimat[j] + hasil;
      }

      if (i === kalimat.length) {
        hasil = hasil;
      } else {
        hasil = " " + hasil;
      }
      ba = i + 1;
    }
    bb++;
  }
  return hasil;
};

console.log(reverseWords("Saya Belajar Javascript"));
