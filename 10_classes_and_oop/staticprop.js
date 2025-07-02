class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
 console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());
//super() calls the parent class's constructor to initialize inherited properties.



//static-> it prevent the access the function of the class who instance of that class and their subclass.
//static methods cannot be accessed by instances, only by the class itself.
//Subclasses can inherit static methods, but instances of those subclasses still can’t access them.
