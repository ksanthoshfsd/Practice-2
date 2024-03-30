//Object & MAP
    const multi = [1,2,3,4,5];
const result = multi.map((mul,index )=>{
    return mul*index
},)
console.log(result)
// const A = {
//     "NAME" : "SN",
//     "AGE" : "20",
//     "EDU" : ["B.TECH","FSD"]
// }
// A.SKILLS = ["JS","HTML","CSS"]
// delete A.AGE

// //JSON
// const B = JSON.stringify(A)
// const C = JSON.parse(B)
// console.log(C)

// //FUNCTION
// function add (a,b,c,d){
//     return (a+b+c+d)
// }
// console.log(add(54,587,0,3))

// MAP
const mapp = multi.map((Arr,index) => {
    return Arr*index
})
console.log(mapp)
// const multi = [1, 2, 3, 4, 5];
// const mapp = multi.map((element, index) => {
//     return element * (index + 1); // Adjusted index by adding 1
// });
// console.log(mapp);


// NORMALFUNCTION
function addd (f,i,o){
    return(f*i*o)
}
console.log(addd(656,878,98))

// ANONYMOUS FUNCTION

const V = function (g,h,m){
    return(g*h*m)
}
console.log(V(87,887,8))

// IIFY FUNCTION

const L = (function (P,O,F){
    return(P*O*F)
})
console.log(L(6,8,8))

// ARROW FUNCTION

const p =(Q,W,R)=>{
    return(Q*W*R)
}
console.log(p(1,2,31))
