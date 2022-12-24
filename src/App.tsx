import React from "react";
import "./style.css";

export default function App() {
  let price: number = 100;
  let name: string = "Shreyas";
  let isBusy: boolean = true;
  let arr: number[] = [1, 2, 3];

  //assigning key types to a given object
  let newObj: {
    property1: string; // specifying what type each key should be and for how many ever ones I specify here, I have to add those many to the object
    property2: number;
    property3: boolean;
  } = {
    property1: "Shreyas",
    property2: 17,
    property3: true,
  };

  // console.log(newObj['property1']);

  let otherArr: (string | number | boolean)[] = [
    "blabla",
    45,
    true,
    false,
    "something",
    97,
  ];
  //this can be used to have values of different types in an array
  function getOnlyStrings() {
    return otherArr.forEach((item) => typeof item === "string");
  }

  //array
  let someArr: string[] = ["something", "else", "whatever"];
  for (let i = 0; i < someArr.length; i++) {
    someArr[i] =
      someArr[i].charAt(0).toUpperCase() +
      someArr[i].slice(1, someArr[i].length);
  }

  for (let i = 0; i < someArr.length; i++) {
    console.log(someArr[i]);
  }

  //array of objects
  // general syntax will be const/let name of var : {types for each property specified here}[] = [{}]
  const arrayOfObjects: {
    name: string;
    age: number;
    email: string;
  }[] = [
    {
      name: "Shreyas",
      age: 17,
      email: "blabla@gmail.com",
    },
  ];

  //syntax: let nameOfVar: typeOfVar = valueOfVar
  for (let i = 0; i < arr.length; i++) {
    // arr[i] = arr[i].toString(); // throws an error because we're assigning string values to number
  }

  function determineIfAllNums() {
    return arr.every((item) => typeof item === "number");
  }

  //types(used if I want to assign only specific values for a given variable)

  type Country = "USA" | "United Kingdom" | "India"
  type Price = 100000 | 150000 | 200000

  const properties: {
    country: Country, // can only accept the above 3 countries
    price: Price // can only accept the above 3 prices
  }[] = [{
    country: "India",
    price: 150000
  }, {
    country: "USA",
    price: 200000,
  }, {
    country: "United Kingdom",
    price: 100000,
  }]

  // console.log(determineIfAllNums());

  return (
    <>
      <h1 className="center">Hello World</h1>
    </>
  );
}
