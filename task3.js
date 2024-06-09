function fazzFood(harga, voucher, jarak, pajak) {
  // HARGA
  if (typeof harga == "number") {
    console.log("Harga = " + harga);
  }

  //  VOUCHER
  if (voucher == "FAZZFOOD50" && harga >= 50000) {
    if (0.5 * harga >= 50000) {
      disc = 50000;
      console.log("Potongan = " + disc);
    } else {
      disc = harga * 0.5;
      console.log("Potongan = " + disc);
    }
  } else if (voucher == "DITRAKTIR60" && harga >= 25000) {
    if (0.6 * harga >= 30000) {
      disc = 30000;
      console.log("Potongan = " + disc);
    } else {
      disc = harga * 0.6;
      console.log("Potongan = " + disc);
    }
  } else {
    console.log("Tidak bisa klaim voucher, tidak memenuhi persyaratan");
  }

  // JARAK
  if (typeof jarak == "number") {
    if (jarak <= 2) {
      console.log("Biaya Antar = " + 5000);
    } else {
      jarak = 5000 + (jarak - 2) * 3000;
      console.log("Biaya Antar = " + jarak);
    }
  }
  // PAJAK

  if (pajak == true) {
    pajak = 0.05 * harga;
    console.log("Pajak = " + pajak);
  } else {
    console.log("Harga sudah termasuk pajak");
  }

  const subTotal = harga - disc + (jarak + pajak);
  console.log("SubTotal = " + subTotal);
}

fazzFood(75000, "DITRAKTIR60", 5, true);
