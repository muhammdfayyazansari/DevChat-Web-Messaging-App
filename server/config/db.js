require("dotenv").config();
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD; 
// console.log("my user name : ", dbUser)
// console.log("my password: ",dbPassword)
const MONGODB_URL =`mongodb+srv://${dbUser}:${dbPassword}@cluster0.8rpo1kt.mongodb.net/DevChatDatabase?retryWrites=true&w=majority`;




module.exports = MONGODB_URL;