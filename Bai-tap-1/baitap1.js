function nhapDiem(tenMonHoc, nhap) {
  let num = Number(nhap);
  console.log("Điểm môn " + tenMonHoc + " : " + num);
  if (nhap == null || nhap == "") {
    console.error("vui lòng nhập số không được để trống ");
    process.exit(1);
  } else {
    if (!Number.isFinite(num)) {
      console.error("điểm là số vui lòng nhập lại ");
      process.exit(1);
    } else {
      if (num <= 0 || num > 10) {
        console.error("điểm không hợp lệ vui lòng kiểm tra lại");
        process.exit(1);
      }
    }
  }
  return num;
}
/*const xuLyDiem = (tenMonHoc, nhapDiem) => {
  let num = Number(nhapDiem);
  console.log("Điểm môn " + tenMonHoc + " " + num);
  return num;
};*/
function phanLoai(diemTB) {
  if (diemTB >= 8.5) {
    console.log("Xếp loại Giỏi");
  } else if (diemTB >= 7 && diemTB <= 8.5) {
    console.log("Xếp loại Khá");
  } else if (diemTB <= 7 && diemTB >= 5) {
    console.log("Xếp loại Trung bình");
  } else {
    console.log("Xếp loại Yếu");
  }
}
const diemToan = nhapDiem("Môn Toán", prompt("nhập điểm Toán "));
const diemVan = nhapDiem("Môn Văn", prompt("nhập điểm Văn "));
const diemAnh = nhapDiem("Môn Anh", prompt("Nhập điểm Anh "));

const tb = (diemToan + diemVan + diemAnh) / 3;
console.log("điểm trung bình là " + tb);

phanLoai(tb);
