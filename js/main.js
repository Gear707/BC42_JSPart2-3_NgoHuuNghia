// Tạo hàm viết rút gọn thay cho cú pháp document.getElementById()
function getEle(ele) {
    return document.getElementById(ele);
}

/* 1. Tính tiền lương nhân viên. */
getEle('btnTinhTien').onclick = function () {
    // input: tạo biến lương 1 ngày & số ngày làm với kiểu dữ liệu đầu vào là number
    let luong1Ngay = +getEle('luong1Ngay').value;
    let soNgayLam = +getEle('soNgayLam').value;

    // progress: dùng công thức tính tổng lương
    let tongLuong = luong1Ngay * soNgayLam;

    // output: xuất kết quả tổng lương ra UI
    getEle('tongLuong').innerHTML = tongLuong.toLocaleString();
}


/* 2. Tính giá trị trung bình của 5 số nhập vào. */
getEle('btnTinhTB').onclick = function () {
    // input: khai báo 5 biến tương ứng với 5 số đầu vào (ép kiểu number)
    let soThuc1 = +getEle('soThuc1').value;
    let soThuc2 = +getEle('soThuc2').value;
    let soThuc3 = +getEle('soThuc3').value;
    let soThuc4 = +getEle('soThuc4').value;
    let soThuc5 = +getEle('soThuc5').value;

    // progress: sử dụng công thức tính trung bình cộng
    let trungBinh = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5;

    // output: xuất giá trị trung bình ra UI
    getEle('trungBinh').innerHTML = trungBinh.toLocaleString();
}


/* 3. Quy đổi USD thành VNĐ. */
getEle('btnQuyDoi').onclick = function () {
    // input: khai báo hằng số cho 1 USD & biến cho số USD đầu vào (ép kiểu number)
    const ONE_USD = 23500;
    let USDInput = +getEle('USDInput').value;

    // progress: áp dụng cách quy đổi từ USD sang VNĐ
    let VNDOutput = ONE_USD * USDInput;

    // output: xuất kết quả VNĐ ra UI
    getEle('VNDOutput').innerHTML = VNDOutput.toLocaleString();
}


/* 4. Tính diện tích & chu vi của hình chữ nhật. */
getEle('btnKetQua').onclick = function () {
    // input: khai báo biến tương ứng cho chiều dài & chiểu rộng (ép kiểu number)
    let chieuDai = +getEle('chieuDai').value;
    let chieuRong = +getEle('chieuRong').value;

    // progress: tính diện tích & chu vi hình chữ nhật
    let dienTich = chieuDai * chieuRong;
    let chuVi = (chieuDai + chieuRong) * 2;

    // output: xuất kết quả tương ứng ra UI
    getEle('ketQua').innerHTML = "Diện tích: " + dienTich.toLocaleString() + "; " + "Chu vi: " + chuVi.toLocaleString();
}


/* 5. Tính tổng 2 ký số của số nhập vào. */
getEle('btnTongKySo').onclick = function () {
    // input: tạo biến cho số nhập vào (ép kiểu number)
    let soInput = +getEle('soInput').value;

    // progress: dùng công thức lấy số hàng chục, số hàng đơn vị & tính tổng của 2 số đó
    let hangChuc = Math.floor(soInput / 10);
    let hangDonVi = Math.floor(soInput % 10);
    let tongKySo = hangChuc + hangDonVi;

    // output: xuất tổng 2 ký số ra UI
    getEle('tongKySo').innerHTML = tongKySo;
}