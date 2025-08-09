let availableKeywords = [
    "Phường Bến Nghé",
    "Phường Nguyễn Thái Bình",
    "Phường Đa Kao",
    "Phường Tân Định",
    "Phường Bến Thành", "Phường Phạm Ngũ Lão",
    "Phường Cầu Ông Lãnh",
    "Phường Nguyễn Cư Trinh", "Phường Cầu Kho", "Phường Cô Giang",
    "Phường 1 Quận 3", "Phường 2 Quận 3", "Phường 3 Quận 3", "Phường 5 Quận 3",
    "Phường 4 Quận 3",
    "Phường Võ Thị Sáu",
    "Phường 9 Quận 3", "Phường 11 Quận 3", "Phường 12 Quận 3", "Phường 14 Quận 3",
    "Phường 13 Quận 4", "Phường 16 Quận 4", "Phường 18 Quận 4",
    "Phường 15 Quận 4", 
    "Phường 8 Quận 4", "Phường 9 Quận 4",
    "Phường 2 Quận 4", "Phường 4 Quận 4",
    "Phường 1 Quận 4", "Phường 3 Quận 4",
    
    "Phường 2 Quận 5",
    "Phường 7 Quận 5",
    "Phường 12 Quận 5",
    "Phường 2 Quận 6",
    "Phường 8 Quận 6",
    "Phường 11 Quận 6",
    "Phường 14 Quận 6",

    "Phường Tân Phú Quận 7",
    "Phường 4 Quận 8",  
    "Phường 12 Quận 10",
    "Phường 15 Quận 10",
    "Phường 1 Quận 11",
    "Phường Hiệp Thành Quận 12",
    "Phường Tân Thới Nhất",
    "Phường 12 Quận Bình Thạnh",
    "Phường 10 Quận Phú Nhuận",
    "Phường Tân Sơn Nhì",
    "Phường Trường Thạnh",
];

const atcpBox = document.querySelector(".atcp-box");
const nhaplieu = document.getElementById("inputCu");

nhaplieu.onkeyup = function() {
    let atcpRS = [];
    let input = nhaplieu.value;
    if (input.length) {
        atcpRS = availableKeywords.filter((keyword) => {
          return keyword.toLowerCase().includes(input.toLowerCase())
        });
        // console.log(atcpRS);
    }
    display(atcpRS);

    if (!atcpRS.length) {
        atcpBox.innerHTML = "";
    }
};

function display(atcpRS) {
    const content = atcpRS.map((list) => {
        return "<li onclick = selectInput(this)>" + list + "</li>";
    });

    atcpBox.innerHTML = "<ul>" + content.join(" ") + "</ul>"
};

function selectInput(list) {
    nhaplieu.value = list.innerHTML;
    atcpBox.innerHTML = "";
};