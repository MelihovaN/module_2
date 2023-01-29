class button {
  constructor(type, height, width, colour) {
    this.type = type;
    this.height = height;
    this.width = width;
    this.colour = colour;
  }
 
}
let sendButton = new button("click", "10cm", "40cm", "green");

console.log(sendButton);

// class button {
//   constructor(type, height, width, colour) {
//     this.type = type;
//     this.height = height;
//     this.width = width;
//     this.colour = colour;
//   }
//     onClick = function () {
//         alert(this.type)
//     }      
    
// }
// let sendButton = new button("click", "10cm", "40cm", "green");

// console.log(onClick);
