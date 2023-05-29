//Hop thoai canh bao khi load
// alert('Hi java')
// var fullname = 'Nguyen Nghia';
// var age = 20; //khai bao tuoi

// //goi ham thong bao
// alert(fullname);
// alert(age);

/*Một số hàm built-in
1. Alert
2. Console
3.Confirm
4.Prompt
5.Set timeout
6.Set interval*/

// console.log('Day la 1 dong log')

// 2. var name = 'Nghia';
// console.error(name);

//3. Yeu cau nguoi dung xac nhan
// confirm('xac nhan do tuoi');

//4. Hien thi hop thoai xac nhan
// prompt('Hay nhap do tuoi cua ban');

//5. Lên lịch thực thi một hàm sau một khoảng thời gian nhất định
// setTimeout(function() {
//   alert('Thong bao')
// },1000)

//6. Hàm setInterval để lặp lại thực thi một hàm sau một khoảng thời gian nhất định.
// setInterval(function(){
//     console.log('Thong bao'+ Math.random())
// },1000)



/**
 * Giởi thiệu về toán tử 
 * 1.Toán tử số học - Arithmetic
 * 2.Toán tử gắn - Assignment
 * 3.Toán tử so sánh - Comparison
 * 4.Toán tử logic - Logical    
 */

// var a = 1 * 8;
// console.log(a)

// var a = 1;
// var b = 2;

// if(a=b){
//     alert('Dung');
// }

// var a = 1
// var b = 2;
// if(a > 0 && b == 0){
//     alert('a & b lon hon 0')

// }else{
//     alert('Sai')
// }

/**
 * Toán tử số học 
 * Cộng
 * Trừ
 * Nhân 
 * Chia 
 * Lũy thừa **
 * Chia lấy số dư %
 * Tăng 1 giá trị số
 * Giảm 1 giá trị sô
 */

// var a = 8;
// var b = 2;

// var c = a % b;
// console.log(c)

// var d = 10;
// d--;
// d--;
// d++;
// console.log(d);

/**
 * Toán tử ++--
 * Prefix (Tiền tố ) & Postfix (Hậu tố)
 *
 */

// var a = 6;
// --a;
// Việc 1: +1 cho a, a = a + 1 => a = 7
// Việc 2: Trả về a sau khi  được + 1
// var output = ++a;

// console.log('output: ',output);

// var a = 6;
// Việc 1 : a copy , a = 6
// Việc 2 : +1 cho a, a = a - 1 => a = 5
// Việc 3 : trả về a copy
// var output = a--;

// console.log('output:', output);
// console.log('a:', a);

var number = 6;
var output =number++ + --number; 
console.log('output:', output);
// Biến number được khai báo với giá trị ban đầu là 6.
// Đoạn mã number++ sẽ trả về giá trị hiện tại của number là 6, 
// sau đó tăng giá trị của number lên 1, thành giá trị 7.
// Đoạn mã --number sẽ giảm giá trị hiện tại của number xuống 1, từ giá trị 7 thành giá trị 6.
// Tổng của number++ và --number là 6 + 6 = 12.

var number = 8;
var out = ++number * 2 - number--* 2 + number++;
// 9x2-9x2+7
console.log('output',out);

/**
 * Toán tử gắn
 * Toán tử           Ví dụ            Tương đương
 * =                 x = y            x = y
 * +=                x += y           x = x + y
 * -=                x -= y           x = x - y
 * *=                x *= y           x = x * y
 * /=                x /= y           x = x / y
 * **=               x **= y          x = x ** y
 */

var a = 1;
a -= 2;
// a = a - 2 (a=1) => a = -1
console.log(a); 

var b = 8;
b *= 2;
// b = b * 2 (b=8) => b = 16
console.log(b);

var c = 2;
c **= 3;
console.log(c);

/**
 * Toán tử chuỗi
 * String operator
 *
 */
var firstName = 'Nghia';
var lastName  = 'Nguyen';

console.log(firstName +' '+ lastName);
// console.log(lastName);

var name = 'Nghia ';
name += 'Nguyen';
console.log(name);

/**
 * Toán tử so sánh
 * Toán tử
 * 
 * ==    --> Bằng
 * !=    --> Không bằng
 * >     --> Lớn hơn
 * <     --> Nhỏ hơn
 * >=    --> Lớn hơn hoặc bằng
 * <=    --> Nhỏ hơn hoặc bằng
 * 
 * */
var s = 'Nghia';
var k = 'Ng';
if(s == k){
    console.log('Dieu kien dung')

}else{
    console.log('Dieu kien sai')

}

/**
 * Boolean 
 * 
 */

var i = 1;
var j = 2;
var isBoolean = i<j;
console.log(isBoolean);

/**
 * If else
 */
// var fullname = 'Nguyen Nghia';
// if(fullname){
//   console.log('Dieu kien dung')
// }else{
//   console.log('Dieu kien sai')
// }
/**
 * 0
 * false
 * '' _ ""
 * underfined
 * NaN
 * null
 */
var fullname = '0';
if(fullname){
  console.log('Dieu kien dung')
}else{
  console.log('Dieu kien sai')
}

/**
 * Toán tử logic
 * 1. && --> AND
 * 2. || --> OR
 * 3. !  --> NOT
 */
var x = 1;
var y = 2;
var z = 3;  
if(x>0 && y>0 && z!=3){
    console.log('Dieu kien dung');
}else
console.log('Dieu kien sai');

/**
 * Kiểu dữ liệu trong js
 * 1. Dữ liệu nguyên thủy - Primitive data
 * -Number
 * -String
 * -Boolean
 * -Undefined
 * -Null
 * -Symbol
 * 
 * 2. Dữ liệu phức tạp - Complex data
 * -Function
 * -Object
 */

//Number
var aa = 1;
var bb = 2.5;
var cc = 3;

console.log(typeof aa);

//String type
var fullname = 'Nguyn Nghia';

//Boolean
var isSucceeded = true;

//Undefined
var age;
console.log(age);

//Null
var isNull = null;
console.log(typeof isNull);

//Symbol
var id = Symbol('id');// unique
var id2 = Symbol('id2');

// console.log(id!=id2);
console.log(typeof id); 

//Funtion
//Tao bien va gan vao mot ham 
var myFunction = function(){
  alert('HI');
}
// myFunction();
console.log(typeof myFunction);

//Object
//Tao doi tuong co 4 thuoc tinh
var myObject = {
  name: 'Nghia',
  age: 18,
  address: 'Da Nang',
  // myObject.myFunction() đang gọi hàm myFunction được định nghĩa trong đối tượng myObject. 
  //trong trường hợp này, hàm này không có câu lệnh bên trong nên sẽ không có gì được thực thi.
  myFunction: function(){
    
  }

};
// console.log('myObject',myObject);

var myArray = [
  'Java',
  'GO',
  'Ruby'
];
console.log('myArray',myArray);

//Toán tử so sánh 2
// ===
// !==

var aaa = 1;
var bbb = 1;
console.log(aaa===bbb);

//Hiểu hơn về cau lệnh điều kiện
//và phép so sánh

/**
 * 0
 * ''
 * null
 * undefined
 * NaN
 * false 
 */
var a = 1;
var b = 2;

// var result = a<b && a < 0;

var result = null || false || undefined || 'D';
console.log(result);

// console.log('result',result);

if(result){
  console.log('Dieu kien dung');
}else{
  console.log('Dieu kien sai');
}

/**
 * Chuỗi trong JS
 * 1. Tạo chuỗi
 * - Các cách tạo chuỗi
 * - Nên dùng cách nào ? Lý do ?
 * - Kiểm tra data type
 * 2. Một số case sử dụng backslash (\)
 * 3. Xem độ dài chuỗi
 * 4. Chú ý độ dài khi viết code
 * 5. Template string ES6
 */

