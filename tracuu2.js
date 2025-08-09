const data2 = {
   "phuong sai gon": "Phường Bến Nghé, một phần phường Đa Kao và Nguyễn Thái Bình",
   "phuong tan dinh": "Phường Tân Định và một phần phường Đa Kao",
   "phuong ben thanh": "Các phường Bến Thành, Phạm Ngũ Lão, một phần phường Cầu Ông Lãnh và Nguyễn Thái Bình",
   "phuong cau ong lanh": "Các phường Nguyễn Cư Trinh, Cầu Kho, Cô Giang, một phần phường Cầu Ông Lãnh",
   "phuong ban co": "Các phường 1, 2, 3, 5, một phần phường 4 (Quận 3)",
   "phuong xuan hoa": "Các phường Võ Thị Sáu, một phần phường 4 (Quận 3)",
   "phuong nhieu loc": "Các phường 9, 11, 12, 14 (Quận 3)",
   "phuong xom chieu": "Các phường 13, 16, 18, một phần phường 15 (Quận 4)",
   "phuong khanh hoi": "Các phường 8, 9, một phần phường 2, 4 và 15 (Quận 4)",
   "phuong vinh hoi": "Các phường 1, 3, một phần phường 2 và 4 (Quận 4)",
   "phuong cho quan": "Các phường 1, 2, 4 (Quận 5)",
   "phuong an dong": "Các phường 5, 7, 9 (Quận 5)",
   "phuong cho lon": "Các phường 11, 12, 13, 14 (Quận 5)",
   "phuong binh tay": "Các phường 2, 9 (Quận 6)",
   "phuong binh tien": "Các phường 1, 7, 8 (Quận 6)",
   "phuong binh phu": "Các phường 10, 11 (Quận 6), một phần phường 16 (Quận 8)",
   "phuong phu lam": "Các phường 12, 13, 14 (Quận 6)",
};

const resultBox2 = document.getElementById("result2");

function removeVietnameseTones(str) {
  return str.normalize("NFD")                        // tách chữ và dấu
            .toLowerCase()                           // chữ thường
            .replace(/[\u0300-\u036f]/g, "")         // xóa dấu
            .replace(/đ/g, "d");                     // đ → d
        
};

document.getElementById("btnSearch2").addEventListener("click", function() {
  let diachimoi = document.getElementById("inputMoi").value;
  let dulieu2 = removeVietnameseTones(diachimoi.trim());
  let ketqua2 = data2[dulieu2];

  if (ketqua2) {
    resultBox2.innerText = ketqua2;
    resultBox2.style.display = "block";
  } else {
    resultBox2.innerText = "Không tìm thấy";
    resultBox2.style.display = "block";
  }
});

document.getElementById("inputMoi").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    document.getElementById("btnSearch2").click();
  }
});
