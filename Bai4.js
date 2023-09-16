// Dữ liệu 1: Kiểm tra giá trị hóa đơn 275, 40 và 430.
var giaTriHoaDon1 = 275;
var giaTriHoaDon2 = 40;
var giaTriHoaDon3 = 430;

// Công thức tính tiền tip 15%, tip 20%.
function tip15 (giaTriHoaDon){
    return giaTriHoaDon * 15/100;
}
function tip20 (giaTriHoaDon){
    return giaTriHoaDon * 20/100;
}

// Điều kiện tính tiền tip.
function dieuKienTinhTienTip(giaTriHoaDon){
    if(giaTriHoaDon >= 50 &&  giaTriHoaDon <= 300)
        return tip15(giaTriHoaDon);
    else
        return tip20(giaTriHoaDon);
}

// Tính tiền tip cho các hóa đơn
var tienBoa1 = dieuKienTinhTienTip(giaTriHoaDon1);
var tienBoa2 = dieuKienTinhTienTip(giaTriHoaDon2);
var tienBoa3 = dieuKienTinhTienTip(giaTriHoaDon3);


// In kết quả ra mang hình
console.log("Hóa đơn là: "+ giaTriHoaDon1, ", tiền boa là: "+tienBoa1, "và tổng giá trị là: "+(giaTriHoaDon1+tienBoa1));
console.log("Hóa đơn là: "+ giaTriHoaDon2, ", tiền boa là: "+tienBoa2, "và tổng giá trị là: "+(giaTriHoaDon2+tienBoa2));
console.log("Hóa đơn là: "+ giaTriHoaDon3, ", tiền boa là: "+tienBoa3, "và tổng giá trị là: "+(giaTriHoaDon3+tienBoa3));