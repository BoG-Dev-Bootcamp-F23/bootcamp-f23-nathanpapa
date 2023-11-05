import connectDB from "../index.js";
import Ticket from "../models/Ticket.js";

export default async function updateTicketByUser(data) {
    try {
        await connectDB();
        const { ticketID, userID } = data;
        await Ticket.findByIdAndUpdate(ticketID, { userID: userID });
    } catch (e) {
        console.log(e);
        throw new Error("Unable to read tickets. Invalid data or database issue.");
    }
    return true;
}