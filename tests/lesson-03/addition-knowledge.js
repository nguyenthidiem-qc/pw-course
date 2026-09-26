let bike = {
    make: "Vinfast",
    model: "Vf3"
};
bike.color = "Green"; // thêm thuộc tính cách 1
bike["new prce"] = 100; // thêm thuộc tính cách 2

delete bike.color; // xóa 1 thuộc tính

console.log(bike);