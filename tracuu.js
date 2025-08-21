let data = {};

fetch("data.json")
  .then(response => response.json())
  .then(json => {
    data = json;
  })
  .catch(err => console.error("Lỗi tải JSON:", err));

const resultBox = document.getElementById("result");
const countBadge = document.getElementById("countBadge");
const noteTip = document.getElementById("noteTip");

function removeVietnameseTones(str) {
  return str.normalize("NFD")                        // tách chữ và dấu
            .toLowerCase()                           // chữ thường
            .replace(/[\u0300-\u036f]/g, "")         // xóa dấu
            .replace(/đ/g, "d");                     // đ → d
        
};

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
  let dulieu = removeVietnameseTones(diachicu.trim());
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

