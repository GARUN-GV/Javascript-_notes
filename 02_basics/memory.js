// stack->primitive ->in stack we get a copy of variable
// heap-> non primitive -> in heap we get a references or address of variable

let username= "garun varshney" //stack
let othername= username //stack
othername= "gagan"//if we change in othername then there is no change in username bcz username ssent a copy to the othername //stack


console.log(othername)


const user1=
{name:"garun",
 age:22} //heap

let user2 =user1
// user1 is store in stack but point out the address of user1 in the heap if we change any value of user2 then user1 is also change

user2.name="gagan";
console.log(user1.name)//gagan
