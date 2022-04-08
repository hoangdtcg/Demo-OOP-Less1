class Student {
    constructor(n,a,ad) { //Phương thức khởi tạo
        this.name = n;
        this.age = a;
        this.address = ad;
    }

    smile(){};
    countingStar(){};
}

let tai = new Student("Tài Sờ Mờ",17,"34");
console.log(tai.name)

let nghia = new Student("Nghĩa Chan", 16, "HN");
console.log(nghia)

