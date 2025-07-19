const prompt = require('prompt-sync')();
const kiemTraThang = (month) => {

  if (month == null || month == "") {
    console.error("vui lòng nhập tháng không được để trống");
    return;
  }

  let num = Number(month);
  if (!Number.isFinite(num)) {
    console.error("tháng là số vui lòng nhập lại");
    return;
  }

  if (num > 12 || num <= 0 || !Number.isInteger(num)) {
    console.error(
      "Tháng là số thực dương và bé hơn hoặc bằng 12 vui lòng kiểm tra lại"
    );
    return;
  }

  switch (num) {
    case 1:
      console.log("Tháng Một");
      break;
    case 2:
      console.log("Tháng Hai");
      break;
    case 3:
      console.log("Tháng Ba");
      break;
    case 4:
      console.log("Tháng Tư");
      break;
    case 5:
      console.log("Tháng Năm");
      break;
    case 6:
      console.log("Tháng Sáu");
      break;
    case 7:
      console.log("Tháng Bảy");
      break;
    case 8:
      console.log("Tháng Tám");
      break;
    case 9:
      console.log("Tháng Chín");
      break;
    case 10:
      console.log("Tháng Mười");
      break;
    case 11:
      console.log("Tháng Mười Một");
      break;
    default:
      console.log("Tháng Mười Hai");
  }

  if (num == 4 || num == 5 || num == 6) {
    console.log("đây là tháng thuộc quý 2");
  } else {
    console.log("đây là tháng không thuộc quý 2");
  }
  return num;
};

kiemTraThang(prompt("vui lòng nhập tháng "));