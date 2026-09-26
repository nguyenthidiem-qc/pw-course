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

console.log(`Tên đường của người này: ${person1.address.stress}, ${person1.address.city}, ${person1.address.country}`);

