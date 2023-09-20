import bcrypt from "bcryptjs";

export const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "Yonghyun Kim",
    email: "yong@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Hyunsung Kim",
    email: "hyunsung@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
];
