let data2 = {};

fetch("data2.json")
  .then(response => response.json())
  .then(json2 => {
    data2 = json2;
  })
  // .catch(err => console.error("Lỗi tải JSON:", err));

const resultBox2 = document.getElementById("result2");

function normalizeQuery(s){
  return s
    // bỏ dấu tiếng Việt
    .normalize("NFD") 
    .toLowerCase().trim()
    .replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d")

    // GIỮ chữ trong ngoặc, chỉ bỏ ký tự ngoặc + dấu chấm "(tp.thu duc)" -> " tp thu duc "
    .replace(/[().]/g, " ")

    // mở rộng viết tắt p./q./x./p/q/x đứng MỘT MÌNH (không đụng 'phu', 'quan', 'xa' đầy đủ)
    .replace(/\b[pP]\.(?=[a-z0-9])/g, " phuong ")
    .replace(/\b[pP]\b/g, " phuong ")
    .replace(/\b[qQ]\.(?=[a-z0-9])/g, " quan ")
    .replace(/\b[qQ]\b/g, " quan ")
    .replace(/\b[xX]\.(?=\s*[a-z0-9])/g, " xa ")
    .replace(/\b[xX]\b/g, " xa ")

    // Bỏ 'tp hcm/tphcm'
    .replace(/\btp\s*hcm\b|\btphcm\b/g, " ")

    // gộp khoảng trắng
    .replace(/\s+/g, " ").trim();
}

function asBullets(text){
  return text.split(/\s*,\s*/).map(x => "• " + x).join("\n");
};

function tracuuMoi() {
  let diachimoi = document.getElementById("inputMoi").value;
  let dulieu2 = normalizeQuery(diachimoi);
  let ketqua2 = data2[dulieu2];

  if (ketqua2) {
    resultBox2.innerText = "Trước sáp nhập bao gồm:\n" + asBullets(ketqua2);
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

