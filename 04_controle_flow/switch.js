// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }
const month ="march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("febuary");
        break;
    case "march":
        console.log("March");
       break;
    case "april":
        console.log("april");
        break;
    default:
        console.log("default case match");
        break;
}
// note- 01- agar break nhi lagayega to jaha pe case  match hota h waha se sara ka sara code execute hota h except- default case ka
// 02- koi number hoga to number se check krenge ya string hoga to "jan" se deke check krenge
// const month:3;
//   case 3:
//         console.log("april");
//         break;