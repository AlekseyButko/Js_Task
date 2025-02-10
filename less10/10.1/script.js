const user = {
    name: "Oleksii",
    age: 21,
    eMail: "alexbuttko@gmail.com",
    location: "Kyiv, Ukraine",

    displayInfo: function(){
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Email: ${this.eMail}`);
    console.log(`Location: ${this.location}`);
}
};
user.displayInfo();