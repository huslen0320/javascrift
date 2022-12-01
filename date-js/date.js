    let year = prompt("Та жил оруулна уу:");
    let month = prompt("Та сар оруулна уу:");
    let day = prompt("Та өдөр оруулна уу:");

    let yearNumber = Number(year);
    let monthNumber = Number(month);
    let dayNumber = Number(day);

    if(Number.isInteger(yearNumber)){
        if(Number.isInteger(monthNumber)){
            if(Number.isInteger(dayNumber)){
                if (year.length == 4){
                    month = month.length == 1 ? "0" + month : month;
                    day = day.length == 1 ? "0" + day : day;

                    let result = year + "-" + month + "-" + day;

                    alert(result);
                } else {
                    alert("Ta jilee zuv oruulna uu:");
                }
            } else {
                alert("Ta udruu buhel too oruulna uu");
            }
        } else {
            alert("Ta saraa buhel too oruulna uu");
        }
    } else {
        alert("Ta ognoogoo buhel too oruulna uu")
    }
