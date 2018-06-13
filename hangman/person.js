
class PersonClass{
    constructor(firstName, lastName, age, likes = []){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio(){
        let bio = `${this.firstName} is ${this.age}`
        this.likes.forEach((like) =>{
            bio += `${this.firstName} likes ${like}`
        })
        return bio 
    }
}
//  const myPerson = new PersonClass

// const me = new Person('felix', 'ghislain', 23, ['lol','footbal','coding'])


// Person.prototype.setName = function(){
    
// }
// console.log(me.getBio()) 

// class Employee extends PersonClass(){
//     constructor(firstName, lastName, age, likes = []){
//         super(firstName, lastName, age, likes)
//     }
// }


class Student extends PersonClass{
    constructor(firstName, lastName, age, grade,likes = []){
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    getBio(){
        if(this.grade >= 70){
            return `${this.firstName} is passing the course`
        } else{
            return `${this.firstName} is faling the cousre`
        }
    }
    increaseGrade(num){
        this.grade += num
        return`the new grad is ${this.grade} and ${this.getBio()}`
    }
}

const student1 = new Student('andrew', 'stele', 14, 40,['skateboarding, music'])
console.log(student1.increaseGrade(-10))



