class button {
  constructor(type, height, width, colour) {
    this.type = type;
    this.height = height;
    this.width = width;
    this.colour = colour;
    this.properties = [type, height, width, colour];
  }
  onClick() {
    console.log(
      `Parameters  of this button are : ${this.properties.join(", ")}`
    );
  }
}
let sendButton = new button("click", "10cm", "40cm", "green");
sendButton.onClick();

function testButton() {
  if (
    sendButton.type === "click" &&
    sendButton.height === "10cm" &&
    sendButton.width === "40cm" &&
    sendButton.colour === "green"
  ) {
    console.log("true");
  }
}
testButton();


// class button {
//   constructor(type, height, width, colour) {
//     this.type = type;
//     this.height = height;
//     this.width = width;
//     this.colour = colour;
//   }
//   onClick() {
//     return (this.type + ', ' + this.height + ', ' + this.width +  ', ' + this.colour);
//     //return (this.type, this.height, this.width, this.colour);
//   }
// }
// let sendButton = new button("click", "10cm", "40cm", "green");
// console.log('Button parametrs: '+ sendButton.onClick());
