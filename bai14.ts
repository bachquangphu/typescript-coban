// bóc tách object
let employee1 = {
    fname: "technology",
    lname: "education",
    level: 2
};
let { fname: f, lname: l, level: lv } = employee1;//chuyển giá trị thành các biến khác 
console.log(f);//technology
console.log(l);//education
console.log(lv);//2