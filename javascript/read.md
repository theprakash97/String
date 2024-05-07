
A string is a sequence of characters and one of the primitive wrapper objects in JavaScript . 

### Way to create as string 
// A string can created as primitives 

    const txt = “Hello” ; 
    console.log(txt, typeof txt) ; // Hello string 

// A string also created using the String( ) constructor 

    const txt = String(“Hello”) ; 
    console.log(txt, typeof txt) ; // Hello string 

// A string can also be created as an instance by using new operator with String() 

    const txt = new String(“Hello”) ; 
    cosnole.log(txt , typeof txt) ; // [String: ‘Hello’] object 

### Basic operation on string

// Access character 

>There are are two ways to access an individual character in a string :<br>
>> - by using charAt( ) method
>> - by using the bracket notation [ ] 

// comparison operator on string 

    console.log( ‘a’ < ‘A’ ) ; // false 
    console.log( ‘a’ < ‘b’ ) ; // true 
    console.log( ‘a’ < ‘B’ ) ; // false 

// getting length of string 

    let str = “Good morning!” ;
    console.log(str) ; // 13 
 
// accessing first character of a string 

    let txt = “Hello” ; 
    console.log( txt[0] ) ; // H

// accessing last character of a string 

    let txt = “Hello” ; 
    console.log( txt[ txt.length - a ] ) ; // o 

// concatenate string 

    let fname = “Jack” ; 
    let lname = “Rayan” ; 
    let fullName = fname + “ “ + lname ; 
    console.log( fullName ) ; // Jack Rayan 

// assign some txt to an existing string 

    let fname = “Prakash” ; 
    fname += “ Behera, “ ; 
    let txt = “Are you coming tonight ? “ ; 
    let fullTxt = fname + txt ; 
    console.log( fullTxt ) ; // Prakash Behera, Are you coming tonight ? 

// converting values to string 

    let x = 79 ; 
    let txt1 = String(x) ; console.log(txt1, typeof txt1 ) ; // 79 string 
    let txt2 = “ “ + x ; cosnole.log(txt2, typeof txt2 ) ; // 79 string 
    let txt3 = x.toString( ) ; console.log( txt3 ) ; // 79 string 

### String encoding 
In JavaScript, strings are represented using UTF-16 ( 16 bit Unicode Transformation Format ) . In JavaScript, each element of a string is a 16-bit unit, which means that it can represent every character in the unicode character set . Including characters outside the basic multilingual plane ( BMP ) . This representation allows JavaScript to handle a wide range of characters. 

### Escape sequence characters  
Escape sequences are used to represent certain special characters within `string literals` . An escape sequence contains a backslash (\) symbol followed by one of the escape sequence characters or an octal or hexadecimal number . The following escape sequence are available : 

    Escape_sequence           Description                    Representation 
    —————————-----------  +   ————————-------------  +       ———————————————                 
    \’                        single quote                   byte 0x27 in ASCII encoding 
    \”                        double quote                   byte 0x22 in ASCII encoding
    \?                        question mark                  byte 0x3f in ASCII encoding 
    \\                        backslash                      byte 0x5c in ASCII encoding 
    \f                        form feed                      byte 0x0c in ASCII encoding 
    \n                        new line                       byte 0x0a in ASCII encoding 
    \r                        carriage return                byte 0x0d in ASCII encoding 
    \t                        horizontal tab                 byte 0x09 in ASCII encoding 
    \v                        vertical tab                   byte 0x0b in ASCII encoding 


### Formatting string by using template literal 

In JavaScript, a template literal is a type of string literal that allows for easier and more flexible string interpolation and multi-line strings . Template literals are enclosed by backticks (``) instead of single (‘ ‘) or double ( “ “ ) quotes . 

    const fname = ‘John’ ; 
    const age = 30 ; 
    const message = `Hello ${fname} , Are you ${age} year old ?” ; 
    console.log( message ) ; // Hello John , Are you 30 years old ?

