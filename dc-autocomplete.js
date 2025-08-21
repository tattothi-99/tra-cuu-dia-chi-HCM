let availableKeywords = [
    //TP.HCM  
    "Phường Bến Nghé",
    "Phường Nguyễn Thái Bình",
    "Phường Đa Kao",
    "Phường Tân Định",
    "Phường Bến Thành", "Phường Phạm Ngũ Lão",
    "Phường Cầu Ông Lãnh",
    "Phường Nguyễn Cư Trinh", "Phường Cầu Kho", "Phường Cô Giang",
    "Phường 1 Quận 3", "Phường 2 Quận 3", "Phường 3 Quận 3", "Phường 5 Quận 3",
    "Phường 4 Quận 3",
    "Phường Võ Thị Sáu Quận 3",
    "Phường 9 Quận 3", "Phường 11 Quận 3", "Phường 12 Quận 3", "Phường 14 Quận 3",
    "Phường 13 Quận 4", "Phường 16 Quận 4", "Phường 18 Quận 4",
    "Phường 15 Quận 4", 
    "Phường 8 Quận 4", "Phường 9 Quận 4",
    "Phường 2 Quận 4", "Phường 4 Quận 4",
    "Phường 1 Quận 4", "Phường 3 Quận 4",
    "Phường 1 Quận 5", "Phường 2 Quận 5", "Phường 4 Quận 5",
    "Phường 5 Quận 5", "Phường 7 Quận 5", "Phường 9 Quận 5",
    "Phường 11 Quận 5", "Phường 12 Quận 5", "Phường 13 Quận 5", "Phường 14 Quận 5",
    "Phường 2 Quận 6", "Phường 9 Quận 6",
    "Phường 1 Quận 6", "Phường 7 Quận 6", "Phường 8 Quận 6",
    "Phường 10 Quận 6", "Phường 11 Quận 6",
    "Phường 12 Quận 6", "Phường 13 Quận 6", "Phường 14 Quận 6",
    "Phường Bình Thuận", "Phường Tân Thuận Đông", "Phường Tân Thuận Tây",
    "Phường Phú Thuận Quận 7",
    "Phường Phú Mỹ Quận 7",
    "Phường Tân Phú Quận 7",
    "Phường Tân Phong", "Phường Tân Quý Quận 7", "Phường Tân Kiểng", "Phường Tân Hưng",
    "Phường 4 Quận 8", "Phường Rạch Ông", "Phường Hưng Phú",
    "Phường 5 Quận 8",
    "Phường 14 Quận 8", "Phường 15 Quận 8", "Phường Xóm Củi",
    "Phường 16 Quận 8",
    "Phường 6 Quận 8", "Xã An Phú Tây Huyện Bình Chánh",
    "Phường 7 Quận 8",
    "Phường 6 Quận 10", "Phường 8 Quận 10",
    "Phường 14 Quận 10",
    "Phường 1 Quận 10", "Phường 2 Quận 10", "Phường 4 Quận 10", "Phường 9 Quận 10", "Phường 10 Quận 10",
    "Phường 12 Quận 10", "Phường 13 Quận 10", "Phường 15 Quận 10",
    "Phường 1 Quận 11", "Phường 7 Quận 11", "Phường 16 Quận 11",
    "Phường 3 Quận 11", "Phường 10 Quận 11",
    "Phường 8 Quận 11",
    "Phường 5 Quận 11", "Phường 14 Quận 11",
    "Phường 11 Quận 11", "Phường 15 Quận 11",
    "Phường Tân Thới Nhất", "Phường Đông Hưng Thuận", "Phường Tân Hưng Thuận",
    "Phường Tân Chánh Hiệp", "Phường Trung Mỹ Tây",
    "Phường Hiệp Thành Quận 12", "Phường Tân Thới Hiệp",
    "Phường Thạnh Xuân", "Phường Thới An", 
    "Phường Thạnh Lộc", "Phường An Phú Đông",
    "Phường Bình Trị Đông B", "Phường An Lạc A", "Phường An Lạc",
    "Phường Bình Hưng Hòa B", 
    "Phường Bình Trị Đông A", 
    "Phường Tân Tạo",
    "Xã Tân Kiên", 
    "Phường Tân Tạo A",
    "Phường Bình Trị Đông",
    "Phường Bình Hưng Hòa A",
    "Phường Bình Hưng Hòa",
    "Phường Sơn Kỳ",
    "Phường 1 Quận Bình Thạnh", "Phường 2 Quận Bình Thạnh", "Phường 7 Quận Bình Thạnh", "Phường 17 Quận Bình Thạnh",
    "Phường 12 Quận Bình Thạnh", "Phường 14 Quận Bình Thạnh", "Phường 26 Quận Bình Thạnh",
    "Phường 5 Quận Bình Thạnh", "Phường 11 Quận Bình Thạnh", "Phường 13 Quận Bình Thạnh",
    "Phường 19 Quận Bình Thạnh", "Phường 22 Quận Bình Thạnh", "Phường 25 Quận Bình Thạnh",
    "Phường 27 Quận Bình Thạnh", "Phường 28 Quận Bình Thạnh",
    "Phường 1 Quận Gò Vấp", "Phường 3 Quận Gò Vấp",
    "Phường 5 Quận Gò Vấp", "Phường 6 Quận Gò Vấp",
    "Phường 10 Quận Gò Vấp", "Phường 17 Quận Gò Vấp",
    "Phường 15 Quận Gò Vấp", "Phường 16 Quận Gò Vấp",
    "Phường 8 Quận Gò Vấp", "Phường 11 Quận Gò Vấp",
    "Phường 12 Quận Gò Vấp", "Phường 14 Quận Gò Vấp",
    "Phường 4 Quận Phú Nhuận", "Phường 5 Quận Phú Nhuận", "Phường 9 Quận Phú Nhuận",
    "Phường 1 Quận Phú Nhuận", "Phường 2 Quận Phú Nhuận", "Phường 7 Quận Phú Nhuận",
    "Phường 15 Quận Phú Nhuận",
    "Phường 8 Quận Phú Nhuận", "Phường 10 Quận Phú Nhuận", "Phường 11 Quận Phú Nhuận", "Phường 13 Quận Phú Nhuận",
    "Phường 1 Quận Tân Bình", "Phường 2 Quận Tân Bình", "Phường 3 Quận Tân Bình",
    "Phường 4 Quận Tân Bình", "Phường 5 Quận Tân Bình", "Phường 7 Quận Tân Bình",
    "Phường 6 Quận Tân Bình", "Phường 8 Quận Tân Bình", "Phường 9 Quận Tân Bình",
    "Phường 10 Quận Tân Bình", "Phường 11 Quận Tân Bình", "Phường 12 Quận Tân Bình",
    "Phường 13 Quận Tân Bình", "Phường 14 Quận Tân Bình",
    "Phường 15 Quận Tân Bình",
    "Phường Tây Thạnh",
    "Phường Tân Sơn Nhì",
    "Phường Tân Quý Quận Tân Phú", 
    "Phường Tân Thành",
    "Phường Phú Thọ Hòa",
    "Phường Phú Trung", "Phường Hòa Thạnh",
    "Phường Tân Thới Hòa",
    "Phường Hiệp Tân", "Phường Phú Thạnh",
    "Phường Hiệp Bình Chánh", "Phường Hiệp Bình Phước",
    "Phường Linh Đông",
    "Phường Bình Thọ", "Phường Linh Chiểu", "Phường Trường Thọ",
    "Phường Linh Tây",
    "Phường Bình Chiểu", "Phường Tam Phú", "Phường Tam Bình",
    "Phường Linh Trung", "Phường Linh Xuân",
    "Phường Tân Phú (TP.Thủ Đức)", "Phường Tăng Nhơn Phú A", "Phường Tăng Nhơn Phú B", "Phường Hiệp Phú",
    "Phường Long Thạnh Mỹ",
    "Phường Long Bình", 
    "Phường Trường Thạnh", "Phường Long Phước",
    "Phường Phú Hữu", "Phường Long Trường",
    "Phường Thạnh Mỹ Lợi", "Phường Cát Lái",
    "Phường Bình Trưng Đông", "Phường Bình Trưng Tây",
    "Phường An Phú (TP.Thủ Đức)",
    "Phường Phước Bình", "Phường Phước Long A", "Phường Phước Long B",
    "Phường Thủ Thiêm", "Phường An Lợi Đông", "Phường Thảo Điền", "Phường An Khánh",
    "Xã Vĩnh Lộc A",
    "Xã Phạm Văn Hai",
    "Xã Vĩnh Lộc B",
    "Xã Lê Minh Xuân", "Xã Bình Lợi",
    "Thị trấn Tân Túc", "Xã Tân Nhựt",
    "Xã Tân Quý Tây", "Xã Bình Chánh", "Xã An Phú Tây",
    "Xã Đa Phước", "Xã Hưng Long", "Xã Qui Đức",
    "Xã Phong Phú", "Xã Bình Hưng",
    "Xã Tam Thôn Hiệp", "Xã Bình Khánh",
    "Xã An Thới Đông", 
    "Xã Lý Nhơn",
    "Xã Long Hòa (huyện Cần Giờ)", "Thị trấn Cần Thạnh",
    "Xã Tân Phú Trung", "Xã Tân Thông Hội", "Xã Phước Vĩnh An",
    "Thị trấn Củ Chi", "Xã Phước Hiệp", "Xã Tân An Hội",
    "Xã Trung Lập Thượng", "Xã Phước Thạnh", "Xã Thái Mỹ",
    "Xã Phú Mỹ Hưng", "Xã An Phú", "Xã An Nhơn Tây",
    "Xã Phạm Văn Cội", "Xã Trung Lập Hạ", "Xã Nhuận Đức",
    "Xã Tân Thạnh Tây", "Xã Tân Thạnh Đông", "Xã Phú Hòa Đông",
    "Xã Bình Mỹ (huyện Củ Chi)", "Xã Hòa Phú", "Xã Trung An",
    "Xã Thới Tam Thôn", "Xã Nhị Bình", "Xã Đông Thạnh",
    "Xã Tân Hiệp (huyện Hóc Môn)", "Xã Tân Xuân", "Thị trấn Hóc Môn",
    "Xã Tân Thới Nhì", "Xã Xuân Thới Đông", "Xã Xuân Thới Sơn",
    "Xã Xuân Thới Thượng", "Xã Trung Chánh", "Xã Bà Điểm",
    "Thị trấn Nhà Bè", "Xã Phú Xuân", "Xã Phước Kiển", "Xã Phước Lộc",
    "Xã Nhơn Đức", "Xã Long Thới", "Xã Hiệp Phước",
    
    "Xã Thạnh An"
];

const atcpBox = document.querySelector(".atcp-box");
const nhaplieu = document.getElementById("inputCu");

let currentFocus = -1;

nhaplieu.onkeyup = function(e) {
    if (["ArrowUp", "ArrowDown", "Enter"].includes(e.key)) return;

    let atcpRS = [];
    let input = nhaplieu.value;
    if (input.length) {
        atcpRS = availableKeywords.filter((keyword) => {
          return keyword.toLowerCase().includes(input.toLowerCase())
        });
    }
    display(atcpRS);

    if (!atcpRS.length) {
        atcpBox.innerHTML = "";
    }

    currentFocus = -1;
};

nhaplieu.onkeydown = function(e) {
    let items = atcpBox.querySelectorAll("li");
    if (!items.length) return;

    if (e.key === "ArrowDown") {
        currentFocus++;
        if (currentFocus >= items.length) currentFocus = 0;
        addActive(items);
        e.preventDefault();
    } else if (e.key === "ArrowUp") {
        currentFocus--;
        if (currentFocus < 0) currentFocus = items.length - 1;
        addActive(items);
        e.preventDefault();
    } else if (e.key === "Enter") {
        if (currentFocus > -1) {
            items[currentFocus].click();
            e.preventDefault();
        }
    }
};

function display(atcpRS) {
    const content = atcpRS.map((list) => {
        return "<li>" + list + "</li>";
    });

    atcpBox.innerHTML = "<ul>" + content.join(" ") + "</ul>"

    let items = atcpBox.querySelectorAll("li");
    items.forEach(item => {
        item.onclick = function() {
            selectInput(this);
        }
    });
};

function addActive(items) {
    if (!items) return;
    removeActive(items);
    if (currentFocus >= items.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = items.length - 1;
    items[currentFocus].classList.add("autocomplete-active");
    items[currentFocus].scrollIntoView({block: "nearest"});
}

function removeActive(items) {
    items.forEach(item => item.classList.remove("autocomplete-active"));
}

function selectInput(list) {
    nhaplieu.value = list.innerHTML;
    atcpBox.innerHTML = "";
    tracuuCu();
    currentFocus = -1;
};