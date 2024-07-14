const fetchData = () => {
  return new Promise((resolve, reject) => {
    let success = Math.random() < 0.8;
    if (success) {
      const data = { id: 1, title: "ranjan", address: "ace city" };
      resolve(data);
    } else {
      const errorMessage = "unable to fetch data";
      reject(errorMessage);
    }
  });
};

const fetchMoreData = (initalId) => {
  try {
    if (initalId.id === 1) {
      const moreData = { id: 2, name: "kumar", address: "steallar" };
      return moreData;
    } else {
      throw new error("unable to fetch data");
    }
  } catch (error) {
    throw error;
  }
};

fetchData()
  .then((data) => {
    console.log("data fetched successfuly");
    console.log(data);
    console.log(fetchMoreData(data));
  })
  .catch((error) => {
    console.log("unable to fetch data");
  });

///javacript chaining methods
let car = {
  brand: "Maruti",
  model: "zeta",
  year: 2024,
  displayInfo: function () {
    console.log(
      `This car  ${this.brand} ${this.model} ${this.year} is on the road`
    );
    return this;
  },

  updateYear: function (newYear) {
    this.year = newYear;
    return this;
  },

  updateModel: function (newModel) {
    this.model = newModel;
    return this;
  },
};

// console.log(car);
let result = car.updateModel("delta").updateYear(2021).displayInfo();
console.log(result);

// fetch("https://jsonplaceholder.typicode.com/todos").then((response) =>
//   response
//     .json()
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.log("Error in fetching data", error);
//     })
// );

// status code

// 100-199 INFORMATIONAL RESPONSE
//      100- The server has received the initial part of the request and expects the client to continue with the remainder.
// 200-299 SUCCESSFULE RESPONSE
//      200 -ok
// 300-399 REDIRECTION MESSAGES
//      301 moved permanently
// 400-499 CLIENT ERROR RESPONSE
//      400 bad request
//      401 unauthorised
// 500-599 SERVER ERROR RESPONSE
//      500 internal server error
//      503 service unavailable
