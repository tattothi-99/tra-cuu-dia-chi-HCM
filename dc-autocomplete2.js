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
    "Phường Chợ Quán",
    "Phường An Đông",
    "Phường Chợ Lớn",
    "Phường Bình Tây",
    "Phường Bình Tiên",
    "Phường Bình Phú",
    "Phường Phú Lâm",
    "Phường Tân Thuận",
    "Phường Phú Thuận",
    "Phường Tân Mỹ",
    "Phường Tân Hưng",
    "Phường Chánh Hưng",
    "Phường Phú Định",
    "Phường Bình Đông",
    "Phường Diên Hồng",    
    "Phường Vườn Lài",
    "Phường Hòa Hưng",
    "Phường Minh Phụng",
    "Phường Bình Thới",
    "Phường Hòa Bình",
    "Phường Phú Thọ",
    "Phường Đông Hưng Thuận",
    "Phường Trung Mỹ Tây",
    "Phường Tân Thới Hiệp",
    "Phường Thới An",
    "Phường An Phú Đông",
    "Phường An Lạc",
    "Phường Bình Tân",
    "Phường Tân Tạo",
    "Phường Bình Trị Đông",
    "Phường Bình Hưng Hòa",
    "Phường Gia Định",
    "Phường Bình Thạnh",
    "Phường Bình Lợi Trung",
    "Phường Thạnh Mỹ Tây",
    "Phường Bình Quới",
    "Phường Hạnh Thông",
    "Phường An Nhơn",
    "Phường Gò Vấp",
    "Phường An Hội Đông",
    "Phường Thông Tây Hội",
    "Phường An Hội Tây",
    "Phường Đức Nhuận",
    "Phường Cầu Kiệu",
    "Phường Phú Nhuận",
    "Phường Tân Sơn Hòa",
    "Phường Tân Sơn Nhất",
    "Phường Tân Hòa",
    "Phường Bảy Hiền",
    "Phường Tân Bình",
    "Phường Tân Sơn",
    "Phường Tây Thạnh",
    "Phường Tân Sơn Nhì",
    "Phường Phú Thọ Hòa",
    "Phường Tân Phú",
    "Phường Phú Thạnh",
    "Phường Hiệp Bình",
    "Phường Thủ Đức",
    "Phường Tam Bình",
    "Phường Linh Xuân",
    "Phường Tăng Nhơn Phú",
    "Phường Long Bình",
    "Phường Long Phước",
    "Phường Long Trường",
    "Phường Cát Lái",
    "Phường Bình Trung",
    "Phường Phước Long",
    "Phường An Khánh",
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