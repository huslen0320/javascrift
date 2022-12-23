//goimon tsanana

//savaa ugaana
//usaa hiine
//usaa butsalgana
//goimongoo hiine
//hyam hiine
//undug hiine
//cheese tavina

function washPot() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ready pot");
    }, 1000);
  });
}

function fillWater(watersize) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (watersize == 100) {
        resolve([{ id: 1, name: "water full" }]);
      } else {
        reject("sav duureegui bna");
      }
    }, 2000);
  });
}

function boilWater(isboilWater) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        boilWater >= 1 && boilWater<= 100
        ? resolve("us butsalsan bn")
        : reject("arai butslaagui bn                                                    ");
    }, 2000);
  });
}

function putInfoHyam(hyamsize) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        hyamsize >= 10 && hyamsize<= 15
        ? resolve("hyam ni taarjee")
        : reject("arai ih hyam bn");
    }, 2000);
  });
}

function putInfoEgg(eggsize) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          eggsize >= 1 && eggsize<= 2
          ? resolve("undug ni yag taarlaa")
          : reject("heterhii ih undug bn");
      }, 2000);
    });
  }

  function putInfoCheese(cheesesize) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          cheesesize >= 1 && cheesesize<= 2
          ? resolve("yag goy cheese amt orloo")
          : reject("shul ni heterhii utgun bolchij");
      }, 2000);
    });
  }

  washPot()
  .then((result) => {
    console.log(result);
    return fillWater(100);
  })
  .then((result) => {
    console.log(result);
    return boilWater(true);
  })
  .then((result) => {
    console.log(result);
    return putIntoHyam(13);
  })
  .then((result) => {
    console.log(result);
    return putIntoEgg(2);
  })
  .then((result) => {
    console.log(result);
    return putIntoCheese(2);
  })
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("finally"));

function checkError() {
  //buh input shalgadag

  return new Promise((resolve, reject) => {
    //if
  });
}