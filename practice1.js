let a = 1;
let b = 2;
let c = 3;
let d = 4;
let result = 1;

// ((c+d)>a) ? (a*c) : (b*d) => با روش ترنری نتوانستم نتیجه بگیرم. آیا درست نوشته ام؟ 
if ((c+d)>a) {
    result= a*c
} else {
    result = b*d
}
console.log(result)