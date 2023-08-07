// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"
// multiple conditionds we need to check  // 
switch (month) {
    case "jan":
        console.log("January");
        break;  // break will stop the execution of code further if the condition matches
        // if you have not written the break statement all statement execute , until we get the break
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}