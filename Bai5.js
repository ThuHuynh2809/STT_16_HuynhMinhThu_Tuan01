// Dữ liệu 1: Cá heo đạt điểm 44, 23 và 71. Gấu túi đạt điểm 65, 54 và 49
var diemDolphins1 = [44, 23, 71];
var diemKoalas1 = [65, 54, 49];

// Dữ liệu 2: Cá heo đạt điểm 85, 54 và 41. Gấu túi đạt điểm 23, 34 và 27
var diemDolphins2 = [85, 54, 41];
var diemKoalas2 = [23, 34, 27];

// Tạo hàm mũi tên “calcAverage” để tính trung bình cộng của 3 điểm
function calcAverage(diem) {
    var tongDiem = 0;
    for (var i = 0; i < diem.length; i++) {
      tongDiem += diem[i];
    }
    return tongDiem / diem.length;
  }

// Tính điểm trung bình cho cả 2 đội
var diemTrungBinhDolphins = calcAverage(diemDolphins1);
var diemTrungBinhKoalas = calcAverage(diemKoalas1);

// Tạo hàm 'checkWinner' lấy điểm trung bình của mỗi đội làm tham số ('avgDolhins' và 'avgKoalas'), sau đó ghi lại người chiến thắng vào bảng điều khiển, cùng với điểm chiến thắng


