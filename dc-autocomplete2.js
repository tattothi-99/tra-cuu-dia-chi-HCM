let availableKeywords2 = [
    "Phường Sài Gòn",
    "Phường Tân Định",
    "Phường Bến Thành",
    "Phường Cầu Ông Lãnh",
    "Phường Bàn Cờ",
    "Phường Xuân Hòa",
    "Phường Nhiêu Lộc",
    "Phường Xóm Chiếu",
    "Phường Khánh Hội",
    "Phường Vĩnh Hội",
];

const atcpBox2 = document.querySelector(".atcp-box2");
const nhaplieu2 = document.getElementById("inputMoi");

nhaplieu2.onkeyup = function() {
    let atcpRS2 = [];
    let input2 = nhaplieu2.value;
    if (input2.length) {
        atcpRS2 = availableKeywords2.filter((keyword) => {
          return keyword.toLowerCase().includes(input2.toLowerCase())
        });
    }
    display2(atcpRS2);

    if (!atcpRS2.length) {
        atcpBox2.innerHTML = " ";
    }
};

function display2(atcpRS2) {
    const content2 = atcpRS2.map((list) => {
        return "<li onclick='selectInput2(this)'>" + list + "</li>";
    });

    atcpBox2.innerHTML = "<ul>" + content2.join(" ") + "</ul>";
}

function selectInput2(list) {
    nhaplieu2.value = list.innerHTML;
    atcpBox2.innerHTML = " ";
}