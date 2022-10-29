import React from "react";
import { Membership } from "./Enums";

export default function Practice() {
  // tuples(array with fixed # of elements whose types are known)
  // can specify how many elements and the type of the element at each index

  const contactDetails: [number, string] = [676877, "hello"];
  // 2 elements with contactDetails[0] being number and contactDetails[1] being string

  const time = new Date().getHours() - 12 + ":" + new Date().getMinutes();
  const locationInfo: [string, string, number] = ["Dallas", time, 67];

  //enums
  const bioInfo: {
    name: string;
    age: number;
    email: string;
    membershipLevel: Membership;
  }[] = [
    {
      name: "Shreyas",
      age: 17,
      email: "shrevis2018@gmail.com",
      membershipLevel: Membership.PLATINUM_USER,
    },
    {
      name: "Mark",
      age: 12,
      email: "mark@yahoo.com",
      membershipLevel: Membership.BRONZE_USER,
    },
    {
      name: "John",
      age: 27,
      email: "johnbest211@outlook.com",
      membershipLevel: Membership.SILVER_USER,
    },
    {
      name: "James",
      age: 42,
      email: "james456@gmail.com",
      membershipLevel: Membership.GOLD_USER,
    },
  ];

  function determineMessage(identity: string, status: string) {
    let initialMessage =
      status === "PLATINUM_USER" ? "Congrats!" : "Upgrade now!";
    return identity + " " + initialMessage;
  }

  let msg = determineMessage(bioInfo[0].name, "PLATINUM_USER");

  //any type(2 ways to specify for objects)

  const newObj : any[] = [
    {
        // can have as many properties inside with any type as needed
    }
  ]

  //2nd way
  const objNew : ({} | {})[] = [{}] // if we want to specify two different kinds of objects that can come in

  //union types
  function add (num1: number | string, num2: number | string){}

  //function return types(void, some type, undefined)
  function countOccurrences(val: string) : number {
    let count = 0;
    for (let i = 0; i < val.length; i++){
        if (val.charAt(i).includes("a")){
            count++;
        }
    }
    return count;
  }

  return (
    <>
      <h1>{msg}</h1>
    </>
  );
}
