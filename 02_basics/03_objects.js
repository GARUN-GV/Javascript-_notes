// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Garun",
    "full name": "Garun Varshney",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "garun@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "garun@outlook.com"
// Object.freeze(JsUser)   // after wecannot change the value
JsUser.email = "garun@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
