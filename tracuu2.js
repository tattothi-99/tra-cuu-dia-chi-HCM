let data2 = {};

fetch("data2.json")
  .then(response => response.json())
  .then(json2 => {
    data2 = json2;
  })
  .catch(err => console.error("Lỗi tải JSON:", err));

const resultBox2 = document.getElementById("result2");

function removeVietnameseTones(str) {
  return str.normalize("NFD")                        // tách chữ và dấu
            .toLowerCase()                           // chữ thường
            .replace(/[\u0300-\u036f]/g, "")         // xóa dấu
            .replace(/đ/g, "d");                     // đ → d
        
};

function tracuuMoi() {
  let diachimoi = document.getElementById("inputMoi").value;
  let dulieu2 = removeVietnameseTones(diachimoi.trim());
  let ketqua2 = data2[dulieu2];

  if (ketqua2) {
    resultBox2.innerText = "Trước sáp nhập bao gồm:\n" + ketqua2;
    resultBox2.style.display = "block";
  } else {
    resultBox2.innerText = "Không tìm thấy";
    resultBox2.style.display = "block";
  }
};

document.getElementById("btnSearch2").onclick = tracuuMoi;

document.getElementById("inputMoi").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    tracuuMoi();
  }
});

