
// first task
let input = document.querySelector("input");
let add = document.querySelector(".add-item");
let display = document.querySelector(".display-item");
let showData = document.querySelector(".showData");
let listOfItems = [];
let number;


window.onload = function () {
    let storedData = localStorage.getItem("totalnumber");
    if (storedData) {
        listOfItems = JSON.parse(storedData); 
        displayData(); 
    }
};

function check_number_exist() {
    if (!number) {
        alert("Please write a number");
    } else {
        listOfItems.push(number);
        input.value = '';
        number = '';
        console.log(listOfItems);
        localStorage.setItem("totalnumber", JSON.stringify(listOfItems)); 
    }
}

function displayData() {
    if (listOfItems.length === 0) {
        alert("Empty Data");
    } else {
        showData.innerHTML = ''; 
        listOfItems.forEach((num, i) => {
            let p = document.createElement('p');
            p.textContent = `Element ${i} = ${num}`;
            showData.appendChild(p);
        });
    }
}

display.addEventListener("click", function () {
    displayData();
});

input.addEventListener("input", (e) => {
    number = e.target.value;
});

add.addEventListener("click", () => {
    check_number_exist();
});

console.log(listOfItems);

// second question 
let arr1= [10 , 20 , 30 ,40];
let arr2 = [1 , 2 , 3 , 4 , 5];
let length = Math.max(arr1.length , arr2.length);
let Total_Result = [];
for(let i=0 ; i < length ; i++){
    Total_Result.push(arr1[i] || 0 + arr2[i] || 0)
}
console.log(Total_Result)
