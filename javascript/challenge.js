
function string_challenge(){

    // capitalize the first character of a given string 
    let profession = "developer";
    let get_first_character = profession.charAt(0);
    let convert_to_uppercase = get_first_character.toUpperCase();
    let get_remain_chars = profession.slice(1,profession.length);
    let join_vl = convert_to_uppercase + get_remain_chars;
    console.log(join_vl); // Developer
    
}

// entry point of the program 
function main(){
    string_challenge();
}
main();