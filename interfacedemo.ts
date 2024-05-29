interface Rectangle{
    height: number;
    width: number
}

const rect :Rectangle= {
    height: 20,
    width:30
};

interface colorrect extends Rectangle {
    color:string;
}

const reccolor: colorrect = {
    height :30,
    width :40,color : "Brown"
    
}

console.log(reccolor);