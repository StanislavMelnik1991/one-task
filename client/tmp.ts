interface Inner<T1 extends Object = {}>{
    new (a: number, b: string):Outer<T1>
    m: (c: number)=> number
}
interface Outer<T>{
    b: any
    c: T
}
interface AA1{
    a: any
    
}
interface BB1{
    b: any

}

/*<T2>(A: Inner<T2>, b: boolean): Outer<T2>=>{
    let a: Outer<T2>
    if (b){
        a = new A<T2>(1,"")
        console.log(A.m(1))
        console.log(a.c.a)
        console.log(a.b)
    }
    else{
        a = new A<T2>(1,"")
        console.log(A.m(1))
        console.log(a.c.b)
        console.log(a.b)
    }
    
    
    return a
}*/
const A:Inner<number> = undefined

const B: string[] = []
B[1] = "asd"

class Animal{
    public a: string

    constructor(){

    }
}
class Dog extends Animal {
    public b: number
    constructor(){
        super()
    }
}
const d = new Dog()
const c = new Animal()

//

interface IShape{
    p:()=> number
}

class Rectangle{
    public height: number
    public width: number
    constructor(height, width){
        this.height = height
        this.width = width
    }
    p(){
        return this.height*this.width
    }
}

const S = new Rectangle(1, 2)
class Square extends Rectangle implements IShape{
    constructor(size){
        super(size, size)
    }
}
const sq = new Square(4)
sq.p()

//

class Round implements IShape{
    public radius: number;
    constructor(radius){
        this.radius = radius
    }
    p(){
        return Math.PI*(this.radius**2)
    }
}
const r1 = new Round(2)
r1.p()

const arr: Array<IShape> = [S, sq, r1]

arr.forEach(i=>{
    console.log(i.p())
})