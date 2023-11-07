import updateTicketsByUser from "../../../server/mongodb/actions/updateTicketsByUser";

export default async function handler(req, res) {
    if (req.method === "PATCH") {
        try {
            const result = await updateTicketsByUser(req.body);
            if (result === null) {
                return res.status(400).send("Ticket not found.");
            } else if (result === false) {
                return res.status(400).send("User not found.");
            }
        } catch {
            return res.status(500).send("Failed");
        }
        return res.status(200).send("Success");
    }
    return res.status(401).send("Cannot make a request of this type.");
}