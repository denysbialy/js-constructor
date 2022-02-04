const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

numbers.forEach(callback)

// function callback(num){
//     console.log(num ** 3)
// }
function callback(num, index){
    if(index % 2 === 0){
        console.log(num ** 2 + ' в квадрате')
    } else {
        console.log(num ** 3 + ' в кубе')
    }
}

