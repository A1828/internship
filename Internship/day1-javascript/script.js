// let has local scope 
let b=10;
console.log(b);
{
    let b =20;
    console.log(b);
}
console.log(b);