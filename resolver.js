class Friend{
    constructor(id,{firstName,lastName,gender,language,email,contacts}){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.language = language;
        this.email = email;
        this.contacts = contacts
    }
}

const friendDatabase={};    

const resolvers = {
    friend: () => {
        return {
            id: 1545,
            firstName: "Jhon",
            lastName: "Doe",
            gender: "MALE",
            language: "English",
            email: "me@me.com",
            contacts:[
                {firstName : "kuluy", lastName:"bhoo"},
                {firstName : "bhomi", lastName:"yoma"}
            ]
        }
    },
    getFraind:({ id })=>{
        return new Friend(id,friendDatabase[id])
    },
    creteFriend: ({input}) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        friendDatabase[id] = input;
        return new Friend(id,input);
    }
};

module.exports = resolvers;