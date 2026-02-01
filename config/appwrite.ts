import { Account, Client, Databases, TablesDB } from "node-appwrite";
import dotenv from "dotenv";
dotenv.config();


const client = new Client()
    .setEndpoint(process.env.API_END_POINTS!)
    .setKey(process.env.API_KEY!)
    .setProject(process.env.APPWRITE_ID!);

//Account instance for login and sign
export const account = new Account(client);

//Client Instance
export default client;

//Data Bases
export const database=new TablesDB(client); 

