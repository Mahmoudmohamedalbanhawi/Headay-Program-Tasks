function repeatLastThreeChars(str) {
  
    if (str.length >= 3) {
       
        let lastThreeChars = str.slice(-3);
        
       
        return lastThreeChars + str + lastThreeChars;
    } else {
      
        return 'You need to provide at least 3 characters.';
    }
}


console.log(repeatLastThreeChars("hello")); 
console.log(repeatLastThreeChars("Swift")); 
console.log(repeatLastThreeChars("geeks")); 
console.log(repeatLastThreeChars("hi"));    
console.log(repeatLastThreeChars("h"));     