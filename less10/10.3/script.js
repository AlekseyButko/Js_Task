const contactBook = {
    contacts: [
        {name:"Oleksii", phone:"+380501234567", email: "alexbuttko@gmial.com"},
        {name:"Marina", phone:"+380671112233", email:"marinaexapmle@gmail.com"}
    ],
    findContact: function(name){
        const contact = this.contacts.find(contact=>contact.name.toLowerCase() === name.toLowerCase());
        if(contact){
            console.log(`Знайдено: ${contact.name}, Телефон: ${contact.phone}, Email: ${contact.email}`)
        }  else {
            console.log("Контакт не знайдено.");
        }
    },
    addContact: function(name, phone, email){
        this.contacts.push({name, phone, email});
        console.log(`Контакт ${name} додано!`);
    }
};

contactBook.findContact("Oleksii"); 
contactBook.addContact("Ivan", "+380931234567", "ivan@example.com"); 
contactBook.findContact("Ivan"); 