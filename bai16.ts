// vòng lặp for of
let colorName = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];
for (let i in colorName) {
    console.log(colorName[i]);//Red, Green, Blue, Yellow, Purple
}

for (let dem of colorName) {
    console.log(dem);//Red, Green, Blue, Yellow, Purple
}

colorName.forEach((index: string) => {
    console.log(index);//Red, Green, Blue, Yellow, Purple
})

let myName = "BachQuangPhu";
for (let c of myName) {
    console.log(c);// B a c h Q u a n g P h u
}