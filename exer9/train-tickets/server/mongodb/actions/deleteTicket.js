import connectDB from "../index.js";
import Ticket from "../models/Ticket.js";
import mongoose from "mongoose";

export default async function deleteTicket(data) {
    try {
        await connectDB();
        const identifier = new mongoose.Types.ObjectId(data["_id"].toString());
        const result = await Ticket.findByIdAndDelete(identifier);
        return result;
    } catch (e) {
        console.log(e);
        throw new Error("Unable to delete ticket. Invalid data or database issue.");
    }
}