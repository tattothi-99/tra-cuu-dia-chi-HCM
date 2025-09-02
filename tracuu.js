let data = {};

fetch("data.json")
  .then(response => response.json())
  .then(json => {
    data = json;
  })
  // .catch(err => console.error("Lỗi tải JSON:", err));

const resultBox = document.getElementById("result");
const countBadge = document.getElementById("countBadge");
const noteTip = document.getElementById("noteTip");

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

function formatKetQua(obj){
  if (!obj) return "Không tìm thấy";
  let arr = [];
  let note = "";
  if (Array.isArray(obj)) {
    arr = obj;
  } else if (typeof obj === "string") {
    arr = [obj];
  } else if (typeof obj === "object" && obj.new) {
    arr = obj.new;
    note = obj.note || "";
  }
  const header = arr.length > 1 ? `Tìm thấy ${arr.length} phương án:` : "Địa chỉ mới:";
  let body = arr.length > 1 
    ? `<ul>${arr.map(x=>`<li>${x}</li>`).join("")}</ul>` 
    : arr[0] || "";
  return header + "<br>" + body /*+ "<br>" + (note?`(i) ${note}`:"")*/;
}

function tracuuCu() {
  let diachicu = document.getElementById("inputCu").value;
  let dulieu = normalizeQuery(diachicu);
  let ketqua = data[dulieu];

  resultBox.innerHTML = ketqua ? formatKetQua(ketqua) : "Không tìm thấy";
  resultBox.style.display = "block";

  if (ketqua && typeof ketqua === "object") {
    const len = (ketqua.new||[]).length;
    if (len>0) { 
      countBadge.style.display="inline-block"; countBadge.textContent = `${len} kết quả`; 
    } else { 
      countBadge.style.display="none"; 
      }
    if (ketqua.note) { 
      noteTip.style.display="inline-block"; 
      noteTip.title = ketqua.note; 
    } else { 
      noteTip.style.display="none"; 
      }
  } else  {
      countBadge.style.display="none";
      noteTip.style.display="none";
    }
};

document.getElementById("btnSearch").onclick = tracuuCu;

document.getElementById("inputCu").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    tracuuCu();
  }
});

