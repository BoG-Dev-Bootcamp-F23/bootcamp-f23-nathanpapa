import connectDB from "../index.js";
import Ticket from "../models/Ticket.js";
import User from "../models/User.js";

export default async function readTicketByUser(data) {
    try {
        await connectDB();
        const users = await User.find();
        let userFound = false;
        users.forEach(async (user)=> {
            console.log(user._id.toString());
            if (user._id.toString() === data["userId"].toString()) {
                userFound = true;
                return;
            }
        });
        const tickets = (userFound === true) ? await Ticket.find(data) : false;
        return tickets;
    } catch (e) {
        console.log(e);
        throw new Error("Unable to read tickets. Invalid data or database issue.");
    }
}