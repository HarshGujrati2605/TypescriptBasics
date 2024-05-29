function multiply(a:number , b:number ,c?:string){
    console.log(a*b)
    if(c==null){
        console.log("Value of c is null ");
    }
    else{
        console.log("Value of c is "+c+"");
    }
    
    

}

multiply(2,3, "Gopi")
multiply(2,6)