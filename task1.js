const cekPalindrome = (name) => {
  const cek = name.length;
  for (let i = 0; i < name.length; i++) {
    if (name[i] != name[name.length - 1 - i]) {
      console.log("Not Palindrome");
      return;
    }
  }
  console.log("Palindrome");
};
cekPalindrome("malam"); //palindrom
