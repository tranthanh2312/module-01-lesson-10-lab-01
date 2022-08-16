// Bài 2: Viết chương trình nhập vào một số bất kỳ lớn hơn 0. Tính tổng các phần tử từ 1 đến số vừa nhập vào.

var n = parseInt(prompt("Enter n"));
var sum=0;

for (var i = 1; i <= n; i++) {
    sum = sum + i;
}

alert(sum);