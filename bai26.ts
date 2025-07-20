// sử dụng constructor
// khai báo cách 1:
class phu {
    public fname: string;
    public lname: string;
    constructor(fname: string, lname: string) {
        this.fname = fname;
        this.lname = lname;
    }
}

// khai báo cách 2:
class phu1 {
    constructor(public fname: string, public lname: string) {

    }
}
let ph = new phu1("Tedu", "online");
console.log(ph.fname + " " + ph.lname);// Tedu online
