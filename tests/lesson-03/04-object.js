//1. Tạo 1 object car với thuộc tính make = "Toyota", model = "Corolla", và year = 2021. Sau đó in ra năm sản xuất của xe
const bike = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
};

console.log(`Năm sản xuất của xe là: ${bike.year}`);


//2. Tạo 1 object person có thuộc tính name, addrees (là 1 object lồng với các thuộc tính stress, city, country).
// In ra tên đường của người này
const person1 = {
    name: "Noey Kante",
    address: {
        stress: "12 Tú Xương",
        city: "Hồ Chí Minh",
        country: "Việt Nam"
    }
};

console.log(`Tên đường của ${person1.name} là: ${person1.address.stress}, ${person1.address.city}, ${person1.address.country}`);

//3. Tạo 1 object student và truy cập điểm môn toán (math) sử dụng ngoặc vuông.
//Biết object student có 2 thuộc tính: name, và grades. Trong đó grades là 1 object với 2 thuộc tính kiểu number: math, enghlish
const student = {
    nameStudent: "DiDi",
    gradesStudent: {
        math: 9,
        english: 9.9
    }
};

console.log(student["gradesStudent"]["math"]);
//console.log(`${student.gradesStudent.math}`);

//4. Tạo object setting để quản lý cài đặt của ứng dụng với các thuộc tính như volume, brightness.
//Thay đổi volume và in ra object mới
const setting = {
    volume: "98%",
    brightness: "medium"
};
//setting["volume"] = "20%"; //cách 1
setting.volume = "25%"; //cách 2

console.log(setting);

//5. Tạo object bike và thêm thuộc tính color
bike.color = "green";

console.log(bike);

//6. Tạo 1 object employee với các thuộc tính: name, age và xóa thuộc tính age ra khỏi object này
const employee = {
nameEmployee: "Tuệ An",
ageEmployee: 32
};
delete employee.ageEmployee;

console.log(employee);

/*7. Một trường học có các lớp học và học sinh như sau:
Class A: An, Bình, Châu
Class B: Đào, Hương, Giang
Hãy viết code để đáp ứng yêu cầu sau:
    -  Khai báo tên biến: school
    -  Tên class là tên thuộc tính, giá trị của các thuộc tính này là 1 mảng chứa tên các học sinh*/
const school = {
classA: ["An","Bình","Châu"],
classB: ["Đào","Hương","Giang"]
};

console.log(school["classA"]);