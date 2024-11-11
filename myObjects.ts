const User = {
  name: "pratik",
  email: "pratikverma9691@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

createUser({ name: "pratik", isPaid: "true" });

// __________we can assign the return type like____
// __________fn(a:typeof_a):return_type{}

function createCourse(): { name: string; price: number } {
  return { name: "xyz", price: 999 };
}

// ____________TYPE alias______________
type User = {
  name: string;
  class: number;
  profession: string;
};

function myBio(data: User): User {
  return data;
}

myBio({ name: "pratik", class: 10, profession: "software Engineer" });

// ___________________________
type UserX = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
};

let myUser: UserX = {
  _id: "121212",
  name: "pratikverma",
  email: "pratikverma9691@gmail.com",
  isActive: false,
};

myUser._id = "asdasd";
// _____________above line will throw the error coz it has  readonly type______________

/* -------------------------------------------------------------------------- */
/*                             COMBINING the Types                            */
/* -------------------------------------------------------------------------- */
type cardNumber = {
  cardnumber: string;
};

type cardDetails = {
  carddetail: string;
  cvv: number;
};

type CC = cardNumber & cardDetails & { otp: number };
/* ------------------- use this technique to combine types ------------------ */

/* -------------------------------------------------------------------------- */
/*                                    Array                                   */
/* -------------------------------------------------------------------------- */

const Avengers: string[] = [];
Avengers.push("Hulk");
Avengers.push("Spiderman");

type School = {
  students: number;
  teachers: number;
};
const CBSE: School[] = [];

// now cbse array will take only School
CBSE.push({
  students: 2212,
  teachers: 223,
});
