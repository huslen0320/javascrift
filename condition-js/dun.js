let batScore = 67;
ontsDumdScore = 59;

let batUnelgee , ontsDumdUnelgee;
if (batScore >= 0 && batScore < 60) batUnelgee ="mash muu";
else if (batScore >= 60 && batScore < 70) batUnelgee ="hangalttai"
else if (batScore >= 70 && batScore < 80) batUnelgee ="dund"
else if (batScore >= 80 && batScore < 90) batUnelgee ="sain"
else if (batScore >= 90 && batScore < 100) batUnelgee ="mash sain"
else console.log("Buruu medeelel oruulsan bn");

if (ontsDumdScore >= 0 && ontsDumdScore < 60) ontsDumdUnelgee ="mash muu";
else if (ontsDumdScore >= 60 && ontsDumdScore < 70) ontsDumdUnelgee ="hangalttai"
else if (ontsDumdScore >= 70 && ontsDumdScore < 80) ontsDumdUnelgee ="dund"
else if (ontsDumdScore >= 80 && ontsDumdScore< 90) ontsDumdUnelgee ="sain"
else if (ontsDumdScore >= 90 && ontsDumdScore < 100) ontsDumdUnelgee ="mash sain"
else console.log("Buruu medeelel oruulsan bn");


console.log("Bat - " + batScore + "onoo -" + batUnelgee);
console.log("OntsDumd - " + ontsDumdScore + "onoo -" + ontsDumdUnelgee);
