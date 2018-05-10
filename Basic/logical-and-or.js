let temp = 65;


if (temp >= 60 && temp <=90){
    console.log("it is pretty nice out")
}
if(temp <= 1 || temp >= 120){
    console.log("it is dangerous outside");
}

let isGuestOneVegan = true;
let isisGuestTwoVegan = true;

if(isGuestOneVegan && isisGuestTwoVegan){
    console.log("only offer vegan dishes.")
} else if (isGuestOneVegan || isisGuestTwoVegan){
    console.log("make sure to offer some vegan oprtion")
} else{
    console.log("offer anything on the menu")
}
