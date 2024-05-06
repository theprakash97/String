
function string(){

    // concat()
    const user_name = "theprakash79";
    const domain_name = "@gamil.com";
    const get_gmail = user_name.concat(domain_name);
    console.log(get_gmail); // theprakash79@gamil.com

    console.log();

    // template literals
    const user_firstname = "Sofia";
    const user_age = 34;
    const greeting = `Hello miss ${user_firstname}! Are you ${user_age} year old?`;
    console.log(greeting); // Hello miss Sofia! Are you 34 year old?

    console.log();

    // wap to get the length of a given string 
    const txt = "hy!";
    const get_length = txt.length;
    console.log(get_length); // 3 

    console.log();

    // toUpperCase()
    let feature_one = "wifi";
    let get_uppercase = feature_one.toUpperCase();
    console.log(get_uppercase); // WIFI

    // toLowerCase()
    let brand = 'VIVO';
    let get_lowercase = brand.toLowerCase();
    console.log(get_lowercase); // vivo

    // charAt(index)
    let title = "best showes for men!";
    let get_character = title.charAt(6);
    console.log(get_character); // h

    // index()
    let get_index = title.indexOf('h');
    console.log(get_index); // 6

    // substring()
    let register_company = "Apple pvt";
    let extract_part = register_company.substring(4,8);
    console.log(extract_part); // e pv

    // slice()
    let res = register_company.slice(-8,-1);
    console.log(res); // pple pv

    // trim()
    let bug = "   hy world      ";
    let remove_whitespace = bug.trim();
    console.log(remove_whitespace); // hy world

    // replace()
    let replaced_value = bug.replace("world","Prakash!");
    console.log(replaced_value.trim());  // hy Prakash!

    // includes()
    let blog_title = "best netflix web series";
    let is_available = blog_title.includes("netflix");
    console.log(is_available); // true

    // valueOf()
    let sbi = new String("SBI");
    console.log(typeof(sbi)); // object
    console.log(sbi instanceof String); // true
    let get_primitive_value = sbi.valueOf();
    console.log(typeof(get_primitive_value)); // string 
    console.log(get_primitive_value instanceof String); // false 

    // split()
    let bank_name = "State Bank of India";
    console.log(bank_name.split());
    console.log(bank_name.split(""));
    console.log(bank_name.split(" "));

    /*
    output
    -----------
    [ 'State Bank of India' ]
    [
    'S', 't', 'a', 't', 'e',
    ' ', 'B', 'a', 'n', 'k',
    ' ', 'o', 'f', ' ', 'I',
    'n', 'd', 'i', 'a'
    ]
    [ 'State', 'Bank', 'of', 'India' ]
    
    */
    
}
function main(){
    string();
}
main();