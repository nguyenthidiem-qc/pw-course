/*Các thông số sức khỏe được tinh như sau:
- Cân nặng lý tưởng = Số lẻ của chiều cao (tính bằng cm) x 9 rồi : 10
- Mức cân tối đa = Số lẻ của chiều cao (Cm)
- Mức cân tối thiểu = Số lẻ của chiều cao (cm) x8 rồi :10
Phạm vi áp dụng: Công thức áp dụng cho chiều cao >10 */

//a. Khai báo chiều cao của bạn(cm)
const myHeight = 165;
const heightlasttwodigits = myHeight % 100;

//b. In ra cân nặng lý tưởng, cân nặng tối đa, cân nặng tối thiểu trên cùng 1 dòng
const idealWeight = (heightlasttwodigits * 9 / 10); //cân nặng lý tưởng
const maxWeight = heightlasttwodigits;
const minWeight = (heightlasttwodigits * 8 / 10);
console.log(`Cân nặng lý tưởng:  ${idealWeight}kg, Cân nặng tối đa: ${maxWeight}kg, Cân nặng tối thiểu: ${minWeight}kg`);
//Kết quả in ra: Cân nặng lý tưởng:  58.5kg, Cân nặng tối đa: 65kg, Cân nặng tối thiểu: 52kg

