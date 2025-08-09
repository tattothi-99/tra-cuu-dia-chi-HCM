const data = {
    "phuong ben nghe": "Phường Sài Gòn", 
    "phuong nguyen thai binh": ["Phường Sài Gòn","Phường Bến Thành"],
    "phuong da kao": ["Phường Sài Gòn","Phường Tân Định"],
    "phuong tan dinh": "Phường Tân Định",
    "phuong ben thanh": "Phường Bến Thành", "phuong pham ngu lao": "Phường Bến Thành",
    "phuong cau ong lanh": ["Phường Cầu Ông Lãnh","Phường Bến Thành"],
    "phuong nguyen cu trinh": "Phường Cầu Ông Lãnh", "phuong cau kho": "Phường Cầu Ông Lãnh", "phuong co giang": "Phường Cầu Ông Lãnh",
    "phuong 1 quan 3": "Phường Bàn Cờ", "phuong 2 quan 3": "Phường Bàn Cờ", "phuong 3 quan 3": "Phường Bàn Cờ", "phuong 5 quan 3": "Phường Bàn Cờ",
    "phuong 4 quan 3": ["Phường Bàn Cờ"," Phường Xuân Hòa"],
    "phuong vo thi sau": "Phường Xuân Hòa",
    "phuong 9 quan 3": "Phường Nhiêu Lộc", "phuong 11 quan 3": "Phường Nhiêu Lộc", "phuong 12 quan 3": "Phường Nhiêu Lộc", "phuong 14 quan 3": "Phường Nhiêu Lộc",
    "phuong 13 quan 4": "Phường Xóm Chiếu", "phuong 16 quan 4": "Phường Xóm Chiếu", "phuong 18 quan 4": "Phường Xóm Chiếu", 
    "phuong 15 quan 4": ["Phường Xóm Chiếu", "Phường Khánh Hội"],
    "phuong 8 quan 4": "Phường Khánh Hội", "phuong 9 quan 4": "Phường Khánh Hội", 
    "phuong 2 quan 4": ["Phường Khánh Hội", "Phường Vĩnh Hội"], 
    "phuong 4 quan 4": ["Phường Khánh Hội", "Phường Vĩnh Hội"],
    "phuong 1 quan 4": "Phường Vĩnh Hội", "phuong 3 quan 4": "Phường Vĩnh Hội",

    "phuong 2 quan 5": "Phường Chợ Quán",
    "phuong 7 quan 5": "Phường An Đông",
    "phuong 12 quan 5": "Phường Chợ Lớn",
    "phuong 2 quan 6": "Phường Bình Tây",
    "phuong 8 quan 6": "Phường Bình Tiên",
    "phuong 11 quan 6": "Phường Bình Phú",
    "phuong 14 quan 6": "Phường Phú Lâm",

    "phuong tan phu quan 7": "Phường Tân Mỹ",
    "phuong 4 quan 8": "Phường Chánh Hưng",
    "phuong 12 quan 10": "Phường Hòa Hưng",
    "phuong 15 quan 10": "Phường Hòa Hưng",
    "phuong 1 quan 11": "Phường Minh Phụng",
    "phuong hiep thanh quan 12": "Phường Tân Thới Hiệp",
    "phuong tan thoi nhat": "Phường Đông Hưng Thuận",
    "phuong 12 quan binh thanh": "Phường Bình Thạnh",
    "phuong 10 quan phu nhuan": "Phường Phú Nhuận",
    "phuong tan son nhi": "Phường Tân Sơn Nhì",
    "phuong truong thanh": "Phường Long Phước",
};

const resultBox = document.getElementById("result");

function removeVietnameseTones(str) {
  return str.normalize("NFD")                        // tách chữ và dấu
            .toLowerCase()                           // chữ thường
            .replace(/[\u0300-\u036f]/g, "")         // xóa dấu
            .replace(/đ/g, "d");                     // đ → d
        
};

document.getElementById("btnSearch").addEventListener("click", function() {
  let diachicu = document.getElementById("inputCu").value;
  let dulieu = removeVietnameseTones(diachicu.trim());
  let ketqua = data[dulieu];

  function formatKetQua(x) {
  if (Array.isArray(x)) 
    return "Có thể là:\n• " + x.join("\n• ");
    return "Địa chỉ mới: " + x;
  }

  if (ketqua) {
    resultBox.innerText = ketqua ? formatKetQua(ketqua) : "Không tìm thấy";
    resultBox.style.display = "block";
  }
  else {
    resultBox.innerText = "Không tìm thấy";
    resultBox.style.display = "block";
  }
});

document.getElementById("inputCu").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    document.getElementById("btnSearch").click();
  }
});


resultBox.innerText = ketqua ? formatKetQua(ketqua) : "Không tìm thấy";

