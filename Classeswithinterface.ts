interface Shape{
    getarea:() => number
}

class Rectangle implements Shape{
  
   public constructor(protected readonly wid:number , protected readonly hgh: number ){

   }

   public getarea(): number{
      return this.width*this.height;
   }
   
    
}


class Squarerec extends Rectangle{
    public constructor(protected width :number){
        super(width , width);
    }

    public override getarea(): number {
        return this.width*this.width
        
    }
   
}

const obj = new Squarerec(2)
let area:number =obj.getarea()
console.log(area)
