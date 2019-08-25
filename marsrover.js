// Rover Object Goes Here
// ======================

// Iteration 1 | The Rover Object
let rover = { // I define the object
  direction: "N", // give it an initial direction
  x: 0, // give it an initial position 
  y: 0,
  travelLog:[]
}

let direction = ["N", "E", "S", "W"]; // define the different directions

// Iteration 2 | Turning the Rover
function turnLeft(marsRover){
  console.log("turnLeft was called!");
  switch (marsRover.direction) { // to check the diferent directions depending on the command
      case "N":
          marsRover.direction = "W";
          console.log(`The position of the Rover is now ${marsRover.direction}`);
        break;
      case "W":
          marsRover.direction = "S";
          console.log(`The position of the Rover is now ${marsRover.direction}`);
        break;
      case "S":
          marsRover.direction = "E";
          console.log(`The position of the Rover is now ${marsRover.direction}`);
        break;
      case "E":
          marsRover.direction = "N";
          console.log(`The position of the Rover is now ${marsRover.direction}`);
        break;
      default:
        console.log("Something is wrong!");
        break;
    }
  }

function turnRight(marsRover){
  console.log("turnRight was called!");
  switch (marsRover.direction) {
      case "N":
          marsRover.direction = "E";
          console.log(marsRover.direction);
        break;
      case "E":
          marsRover.direction = "S";
          console.log(marsRover.direction);
        break;
      case "S":
          marsRover.direction = "W";
          console.log(marsRover.direction);
        break;
      case "W":
          marsRover.direction = "N";
          console.log(marsRover.direction);
        break;
      default:
        console.log("Something is wrong!");
        break;
    }
}

// Iteration 3 | Moving the Rover
function moveForward(marsRover){ // moving depending on the position with x and y
  console.log("moveForward was called");
  if (marsRover.x >= 0 && marsRover.x <= 9 && marsRover.y >=0 && marsRover.y <= 9) { // the grid in 10x10
      switch(marsRover.direction) {
        case "N":
          marsRover.y -= 1 
          console.log("The Rover is positioned at " + marsRover.x + " and " + marsRover.y);
          break;
        case "E":
          marsRover.x += 1
          console.log("The Rover is positioned at " + marsRover.x + " and " + marsRover.y);
          break;
        case "S":
          marsRover.y += 1
          console.log("The Rover is positioned at " + marsRover.x + " and " + marsRover.y);
          break;
        case "W":
          marsRover.x -= 1
          console.log("The Rover is positioned at " + marsRover.x + " and " + marsRover.y);
          break;
      }
    } else {
        console.log("Something is wrong!");
      }
}

// It could have also been made with .includes() method?   
// Iteration 4 | Commands
function command(marsRover, commands) {
  for(let i = 0; i < commands.length; i++) {
    let order = commands[i];
    if(order === "l") {
      turnLeft(marsRover);
    } else if(order === "r") {
      turnRight(marsRover);
    } else if(order === "f") {
      moveForward(marsRover);
    } else {
      console.log("Something is wrong!");
    }
  }
}

// Iteration 5 | Tracking
console.log(`The rover is facing ${marsRover.direction} The position is: ${marsRover.x} and ${marsRover.y}`);
console.log(rover.travelLog);
}

command("rffrfflfrff");