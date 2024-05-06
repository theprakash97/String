const prompt = require("prompt-sync")
const sc = prompt();

function string(){
/*

    string : is used to store a sequence of characters.

*/
    // >> way to define a string 
    let txt1 = "hello good morning!";
    let txt2 = String("hello good mornign!");
    let txt3 = new String("hello good mornign!");

    console.log(txt1,typeof(txt1)); // hello good morning! string
    console.log(txt2,typeof(txt2)); // hello good mornign! string
    console.log(txt3,typeof(txt3)); // [String: 'hello good mornign!'] object
    console.log(txt1 instanceof String); // false 
    console.log(txt2 instanceof String); // false 
    console.log(txt3 instanceof String); // true

    console.log();

    // >> take input string data from user
    // let user_firstname = sc("enter your firstname : ")
    // let user_age = parseInt(sc("enter your age : "))

    // console.log(user_firstname,typeof(user_firstname))
    // console.log(user_age,typeof(user_age))

    console.log();

    // >> string are index based, that mean first_chracter is 0, the second_chracter is 1 and so on. 
    let sms = "hy what's up!";
    console.log(sms[0]);
    console.log(sms[1]);
    console.log(sms[2]);
    console.log(sms[3]);
    console.log(sms[sms.length - 1]);

    console.log();

    // >> javascript string use unicode encoding standard 
    // every character has numeric value 
    let sym = 'a'; 
    let numeric_value = sym.codePointAt() // encdoing
    console.log(numeric_value); // 97

    let num = 97;
    let sym_vl = String.fromCodePoint(num) // decoding 
    console.log(sym_vl); // a 

    // >> string ; dynamic memory allocation at runtime 

    // >> commnly used inbuilt functions 
    
    // wap to reverse a string 
    let nick_name = "Ram";
    let split_string = nick_name.split("");
    let reverse_array = split_string.reverse();
    let join_arry = reverse_array.join("");
    console.log(join_arry);

    console.log();

    // wap to find substring of a given string 
    let blog_title = "the best netflix web series";
    let substring = blog_title.search("netflix");
    console.log(substring); // 9 
    let extract_characters = blog_title.substring(0,6);
    console.log(extract_characters); // the be

    console.log();

    // concatenate string by using '+' operator 
    let user_fullname = "Prakash Behera";
    let greeting = "Hello mr. " + user_fullname;
    console.log(greeting);

    console.log();

    // wap to insert characters at the end of a given string 
    let prodct_name = "Apple Iphone";
    let add_character = prodct_name.concat(" 13");
    console.log(add_character);

    console.log();

    // wap to get the size of a given string 
    let department_name = "CIA(Uniteted State Of America)";
    let get_length = department_name.length;
    console.log(get_length); // 30

    console.log();

    // wap to append string value to number 
    let numeric = 79
    let txtual_value = numeric.toString();
    // append string value
    txtual_value += '@gmail.com'; 
    console.log(txtual_value); // 79@gmail.com
    console.log("theprakash".concat(txtual_value)); // theprakash79@gmail.com

    console.log();

    // wap to sort a given string 
    

}

// entry point of program
function main(){
    string();
}
main();