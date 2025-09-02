let availableKeywords2 = [
    //TP.HCM

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

    "Xã Vĩnh Lộc",
    "Xã Tân Vĩnh Lộc", 
    "Xã Bình Lợi", 
    "Xã Tân Nhựt",
    "Xã Bình Chánh",
    "Xã Hưng Long",
    "Xã Bình Hưng",
    "Xã Bình Khánh",
    "Xã An Thới Đông",
    "Xã Cần Giờ",
    "Xã Củ Chi",
    "Xã Tân An Hội",
    "Xã Thái Mỹ",
    "Xã An Nhơn Tây",
    "Xã Nhuận Đức",
    "Xã Phú Hòa Đông",
    "Xã Bình Mỹ",
    "Xã Đông Thạnh",
    "Xã Hóc Môn",
    "Xã Xuân Thới Sơn",
    "Xã Bà Điểm",
    "Xã Nhà Bè",
    "Xã Hiệp Phước",
    
    "Xã Thạnh An",


    //Bình Dương

    "Phường Đông Hòa",
    "Phường Dĩ An",
    "Phường Tân Đông Hiệp",
    "Phường An Phú",
    "Phường Bình Hòa",
    "Phường Lái Thiêu",
    "Phường Thuận An",
    "Phường Thuân Giao",
    "Phường Thủ Dầu Một",
    "Phường Phú Lợi",
    "Phường Chánh Hiệp",
    "Phường Bình Dương",
    "Phường Hòa Lợi",
    "Phường Phú An",
    "Phường Tây Nam",
    "Phường Long Nguyên",
    "Phường Bến Cát",
    "Phường Chánh Phú Hòa",
    "Phường Vĩnh Tân",
    "Phường Bình Cơ",
    "Phường Tân Uyên",
    "Phường Tân Hiệp", 
    "Phường Tân Khánh",

    "Xã Thường Tân",
    "Xã Bắc Tân Uyên",
    "Xã Phú Giáo",
    "Xã Phước Hòa",
    "Xã Phước Thành",
    "Xã An Long",
    "Xã Trừ Văn Thố",
    "Xã Bàu Bàng",
    "Xã Long Hòa",
    "Xã Thanh An (Bình Dương)",
    "Xã Dầu Tiếng",
    "Xã Minh Thạnh"
];

const atcpBox2 = document.querySelector(".atcp-box2");
const nhaplieu2 = document.getElementById("inputMoi");

let currentFocus2 = -1;

nhaplieu2.onkeyup = function(e) {
    if (["ArrowUp", "ArrowDown", "Enter"].includes(e.key)) return;

    let atcpRS2 = [];
    let input2 = nhaplieu2.value;
    if (input2.length) {
        atcpRS2 = availableKeywords2.filter((keyword) => {
          return keyword.toLowerCase().includes(input2.toLowerCase())
        });
    }
    display2(atcpRS2);

    if (!atcpRS2.length) {
        atcpBox2.innerHTML = "";
    }
    currentFocus2 = -1;
};

nhaplieu2.onkeydown = function(e) {
    let items2 = atcpBox2.querySelectorAll("li");
    if (!items2.length) return;

    if (e.key === "ArrowDown") {
        currentFocus2++;
        if (currentFocus2 >= items2.length) currentFocus2 = 0;
        addActive2(items2);
        e.preventDefault();
    } else if (e.key === "ArrowUp") {
        currentFocus2--;
        if (currentFocus2 < 0) currentFocus2 = items2.length - 1;
        addActive2(items2);
        e.preventDefault();
    } else if (e.key === "Enter") {
        if (currentFocus2 > -1) {
            items2[currentFocus2].click();
            e.preventDefault();
        }
    }
};

function display2(atcpRS2) {
    const content2 = atcpRS2.map((list) => {
        return "<li>" + list + "</li>";
    });

    atcpBox2.innerHTML = "<ul>" + content2.join(" ") + "</ul>";

    let items2 = atcpBox2.querySelectorAll("li");
    items2.forEach(item => {
        item.onclick = function() {
            selectInput2(this);
        }
    });
}

function addActive2(items2) {
    if (!items2) return;
    removeActive2(items2);
    if (currentFocus2 >= items2.length) currentFocus2 = 0;
    if (currentFocus2 < 0) currentFocus2 = items2.length - 1;
    items2[currentFocus2].classList.add("autocomplete-active");
    items2[currentFocus2].scrollIntoView({block: "nearest"});
}

function removeActive2(items2) {
    items2.forEach(item => item.classList.remove("autocomplete-active"));
}

function selectInput2(list) {
    nhaplieu2.value = list.innerHTML;
    atcpBox2.innerHTML = "";
    tracuuMoi();
    currentFocus2 = -1;
}