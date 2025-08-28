const student =[
    {name: "Alice" , score:"85"},
    {name: "BOB", score:"92"},
    {name: "Charlie", score:"78"}
]

function myfunction(student){
    if(student.score>=80){
        console.log(student.name+": "+"Pass");
    } else {
        console.log(student.name+": "+"Failed");
    }
}
let result=student.map(myfunction);