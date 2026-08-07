//create object
console.log("HELLOOO");
let rectangle = {
 length  : 1,
 breadth :3,
 draw: function(){
    console.log("draw");
 }
 
};



 //fatctory function 
// function createRectangle(length, breadth){
//     let rectangle={
//         length,
//         breadth,
//         draw: function(){
//             console.log('drawing the rectangle');
//         }
//     };
//     return rectangle;
// }
// let rectangleobj1=createRectangle(5,4); 
// let rectangleobj2=createRectangle(1,3); 

//constructor function -> pascal notation (first letter of every word is capital-> NumberOfTable)
function Square(l, b){
  this.length = l;
  this.breadth = b;
  this.draw=function(){
    console.log('drawing');
  }
}
//object creation using constructor 
let Squareobject1=new Square(4, 4);
Squareobject1.color ="yellow";
// delete Squareobject1.draw;

//constructor property
// Squareobject1.constructor; 
