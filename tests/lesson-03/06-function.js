//1. Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng. Gọi hàm với 2 cặp giá trị khác nhau
function multiply(a, b) {
    const mul = a * b;
    console.log(`Kết quả phép nhân của  ${a} * ${b} = ${mul}`);
}
multiply(9, 8);
multiply(2, 7);
multiply(4, 6);

//2. Viết hàm findMin nhận 3 tham số a, b, c trả về giá trị nhỏ nhất. Gọi hàm và in ra kết quả của 2 bộ số khác nhau
function findMin(a, b, c) {
    if (a < b && a < c) {
        return a;

    } else if (b < a && b < c) {
        return b;
    }
    else if (a < b && a < c) {
        return c;
    }
    else {
        return `Không có số nhỏ nhất trong 3 số`;
    }
}
console.log(`Số nhỏ nhất là: ${findMin(1, 4, 9)}`);
console.log(`Số nhỏ nhất là: ${findMin(99, 72, 98)}`);
console.log(`Số nhỏ nhất là: ${findMin(77, 77, 77)}`);


//3. Viết hàm getTopStudents nhận 2 tham số:
// - students: mảng các object, mỗi object chứa name (tên), và score (điểm)
// - threshold: ngưỡng điểm để được coi là "top" (số)
//Hàm trả về mảng mới chứa tên của những học sinh có điểm  >= threshold. Gọi hàm với danh sách thực tế và in kết quả
function getTopStudents(students, threshold){
    const result = [];
    for (let i = 0; i < students.length; i++){
        if (students[i].score >= threshold){
            result.push(students[i].name);
        }
    }
    return result;
}

const students = [
    {
        "name": "Hana",
        "score": 57
    },
    {
        "name": "Ohaio",
        "score": 89
    },
    {
        "name": "Noey",
        "score": 99
    }
];
let threshold = 70;
console.log(`Những học sinh có điểm top là: ${getTopStudents(students, threshold)}`);

/*4. Viết hàm calculateInterest nhận 3 tham số:
    - principal: số tiền gửi ban đầu (số)
    - rate: lãi suất hàng năm (phần trăm, vd 5 nghĩa là 5 %)
    - years: số năm gửi.
Hàm tính và trả về tổng số tiền (gốc + lãi) sau years năm sử dụng công thức lãi đơn: 
    total = principal + principal*rate*years/100.
Gọi hàm với ví dụ thực tế và in kết quả*/
function calculateInterest (principal, rate, years){
    const total = principal + principal*rate*years/100;
    return total;
}
console.log(`Tổng số tiền tiết kiệm của A là ${calculateInterest(100, 5, 3)} ngàn`);
console.log(`Tổng số tiền tiết kiệm của B là ${calculateInterest(500, 5, 2)} ngàn`);