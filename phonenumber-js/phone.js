let phoneNumber = prompt("Ta dugaar aa oruulna uu:");
let message;

if (phoneNumber.length == 8) {
    if (phoneNumber.substr(0,2)== 99 || phoneNumber.substr(0,2)== 95 || phoneNumber.substr(0,2)== 94 || phoneNumber.substr(0,2)== 85){
        message = "mobicom";
    }else if (phoneNumber.substr(0,2)==80 || phoneNumber.substr(0,2)==86 || phoneNumber.substr(0,2)==88 || phoneNumber.substr(0,2)==89){
        message = "unitel";
    }else if (phoneNumber.substr(0,2)==83 || phoneNumber.substr(0,2)==93 || phoneNumber.substr(0,2)==97 || phoneNumber.substr(0,2)==98){
        message = "g-mobile";
    }else if (phoneNumber.substr(0,2)==96 || phoneNumber.substr(0,2)==90 || phoneNumber.substr(0,2)==91){
        message = "skytel";
    }else{
        window.alert("Mongold burtgrlgui dugaar bn!");
    }
    console.log(message.toUpperCase());
}else{
    window.alert("Zuv dugaar oruulna uu!")
}