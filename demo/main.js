const getName = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(name);
    }, 1000);
  });
};
const getAge = (name, age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(name + " " + age);
      resolve(`${name}${age}`);
    }, 1000);
  });
};
const getGender = (age, gender) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${age} ${gender}`);
    }, 1000);
  });
};
const callableFunc = async () => {
  // console.log("ranjan");
  // console.log("30");
  // console.log("male");
  const nameParam = await getName("ranjan");
  const ageParam = await getAge(nameParam, 30);
  const genderParam = await getGender(ageParam, "male");
  // console.log(nameParam);
  console.log(genderParam);
};

callableFunc();

//callback hell

const callbackHell = (name, age, gender) => {
  const getName = (name) => {
    return name;
    const getAge = (age) => {
      return age;
      const getGender = (gender) => {
        return gender;
      };
    };
  };
};
console.log(callbackHell("ranjan", "30", "male"));
// ek function ko hi paramater me dalal do uski ko bole hai callback functionnn

// correct way of callback hell
const callbackhell2 = (name, age, gender) => {
  getName(name, (nameResult) => {
    getAge(nameResult, age, (ageResult) => {
      getGender(ageResult, gender, (genderResult) => {
        console.log(genderResult);
      });
    });
  });
};
console.log(callbackHell2("ranjan", "30", "male"));
