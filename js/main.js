// 1
let task1 = document.getElementById("task1");
function firstTask() {
    for (let i = 1; i < 51; i++) {
        task1.innerHTML =  task1.innerHTML + i + ' ';
    }
}
firstTask();

let task1_1 = document.getElementById("task1_1");
function firstTask_1() {
    for (i = 35; i > 7; i--) {
        task1_1.innerHTML =  task1_1.innerHTML + i + ' ';
    }
}
firstTask_1();

// 2
let task2 = document.getElementById("task2");
i = 89;
function secondTask() {
    while (i > 10) {
        task2.innerHTML =  task2.innerHTML + i + '<br>';
        i--;
    }
}
secondTask();

// 3
let task3 = document.getElementById("task3");
let sum = 0;
function thirdTask() {
    for (i = 0; i < 101; i++) {
       sum += i;     
    }
    task3.innerHTML =  task3.innerHTML + sum;
}
thirdTask();

// 4
let task4 = document.getElementById("task4");
sum = 0;
function fourthTask() {
    for (i = 1; i <= 5; i++) {
       sum = 0;
       for (let j = 1; j <= i; j++) {
        sum += j;        
       }
       task4.innerHTML =  task4.innerHTML + 'Сумма чисел ' + i + ' = ' + sum + '<br>';
    }    
}
fourthTask();

// 5
let task5 = document.getElementById("task5");
function fifthTask() {
    for (i = 8; i <= 56; i++) {
       if (i % 2 == 0) {
        task5.innerHTML =  task5.innerHTML + i + ' ';
       }       
    }    
}
fifthTask();

// 6
let table = '';
let task6 = document.getElementById("task6");
function sixthTask() {
    for (i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            table = i * j;     
            if (i !== 10) {
                table = i * j + '<span style="padding-right: 10px"></span>';
            }       
            task6.innerHTML =  task6.innerHTML + j + ' * ' + i + ' = ' + table + '<span style="padding-right: 50px"></span>';
        }
        task6.innerHTML =  task6.innerHTML + '<br>';  
    }    
}
sixthTask();

// 7
let task7 = document.getElementById("task7");
let num = 0;
function seventhTask() {
    for (i = 1000; i > 50; i /= 2) {
        num++;  
    }    
    task7.innerHTML =  task7.innerHTML + 'Почученное число = ' + i + '<br>' + 'Кол-во итераций = ' + num;  
}
seventhTask();

// 8
let task8 = document.getElementById("task8");
sum = 0;
i = 0;
function eighthTask() {
    while (true) {
        n = prompt('Введите число', 123);
        sum += +n;
        i++;
        if (n == false || isNaN(n)) {
            alert("Вы не ввели число");                         
            break;
        }
        task8.innerHTML =  task8.innerHTML + 'Вы ввели: ' + n + '<br>';               
    }
    let quantity = i - 1; //кол-во введенных чисел
    let average = sum / quantity;
    task8.innerHTML =  task8.innerHTML + '<br>Сумма чисел = ' + sum + '<br>' + 'Кол-во чисел = ' + quantity + '<br>' + 'Среднее арифметическое = ' + average;
}

// 9
let task9 = document.getElementById("task9");
let string =  "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57";
let arraySplit = string.split(' ');
task9.innerHTML =  task9.innerHTML + 'Строка: ' + string + '<br><br>';
num = 0;
function ninethTask() {    
    for (i = 0; arraySplit[i] < arraySplit.length; i++) {
		if (arraySplit[i] > arraySplit[i + 1]) {
			num = arraySplit[i];            
		}
	}
	task9.innerHTML =  task9.innerHTML + 'Самое большое число в строке = ' + arraySplit[i] + '<br>';
    console.log(i);

	for (i = 0; arraySplit[i] < arraySplit.length; i++) {
		if (arraySplit[i] < arraySplit[i + 1]) {
			num = arraySplit[i];
		}
	}
	task9.innerHTML =  task9.innerHTML + 'Самое маленькое число в строке = ' + arraySplit[num] + '<br>';
    
}
ninethTask();

// 10
let task10 = document.getElementById("task10");
// x = n.split('');
function tenthTask() {
    n = prompt('Введите число n', 12345);
    task10.innerHTML =  task10.innerHTML + 'Вы ввели число: ' + n + '<br><br>';
    task10.innerHTML =  task10.innerHTML + 'Вывод каждой цифры введенного числа: ' + '<br>';
    sum = 0;
    let str = String(n);
    let str_reversed = '';
    for (let i = 0; i < n.length; i++) {
        let digit = str[i];
        sum += +digit;
        str_reversed = digit + str_reversed;
        task10.innerHTML =  task10.innerHTML + digit + '<br>';
    }
    task10.innerHTML =  task10.innerHTML + '<br>Количесвто цифр в числе = ' + str.length + '<br>';
    task10.innerHTML =  task10.innerHTML + 'Сумма цифр в числе = ' + sum + '<br>';
    task10.innerHTML =  task10.innerHTML + 'Число в обратном порядке = ' + str_reversed;
}