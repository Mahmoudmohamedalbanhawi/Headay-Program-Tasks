function addition(str){
    if(str.length >= 3){
        let last_three_word = str.slice(-3);
        
        return last_three_word + str + last_three_word;
    }
    else {
        return 'you have to write at least 3 words';
    }
}


console.log(addition("hello"))
console.log(addition("Swift"))
console.log(addition("h"))

function addition_another_method(str) {
    if(str.length >= 3){
        let last_three_characters = str.substring(str.length -3);
        return last_three_characters + str + last_three_characters;
    }
    else {
        return 'you have to write at least 3 characters';
    }
}
console.log(addition_another_method("Swift"));
console.log(addition_another_method("geeks"))
