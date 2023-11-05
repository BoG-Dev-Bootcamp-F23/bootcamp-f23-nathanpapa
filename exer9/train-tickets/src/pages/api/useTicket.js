import deleteTicket from "../../../server/mongodb/actions/deleteTicket.js";

export default async function handler(req, res) {
    if (req.method === "DELETE") {
        try {
            await deleteTicket(req.query);
        } catch {
            return res.status(500).send("Failed");
        }
        return res.status(200).send("Success");
    }
    return res.status(401).send("Cannot make a request of this type.");
}