import { useServerInsertedHTML } from "next/navigation.js";
import connectDB from "../index.js";
import Ticket from "../models/Ticket.js";
import User from "../models/User.js";

export default async function updateTicketByUser(data) {
    try {
        await connectDB();
        const users = await User.find();
        let userFound = false;
        users.forEach(async (user)=> {
            if (user._id.toString() === data["userId"].toString()) {
                userFound = true;
                return;
            }
        });
        const result = (userFound === true) ? await Ticket.findOneAndUpdate({_id: data["ticketId"]}, {userId: data["userId"]}) : false;
        return result;
    } catch (e) {
        console.log(e);
        throw new Error("Unable to read tickets. Invalid data or database issue.");
    }
}