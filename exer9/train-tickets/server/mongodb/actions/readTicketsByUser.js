import connectDB from "../index.js";
import Ticket from "../models/Ticket.js";

export default async function readTicketByUser(data) {
    try {
        await connectDB();
        const { userID } = data;
        await Ticket.findById(userID);
    } catch (e) {
        console.log(e);
        throw new Error("Unable to read tickets. Invalid data or database issue.");
    }
    return true;
}