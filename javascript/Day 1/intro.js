//var
//redeclaring  posibble   but reasseccing   posibble , not block scope
console.log("hello ");
{
    var name = "deepan";
}

console.log(name)

// let
let na="gowtham";
na="meena";

//in let redeclaring not posibble   but reasseccing posibble and block scope
{
    let na="aadhavan";
    console.log(na);
}
console.log(na);

//const
//redeclaring not posibble   but reasseccing  not posibble and block scope

const a="udhaya";
