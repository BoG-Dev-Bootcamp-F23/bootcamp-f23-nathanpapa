import readTicketsByUser from "../../../server/mongodb/actions/readTicketsByUser";

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const tickets = await readTicketsByUser(req.query);
            return (tickets !== false) ? res.status(200).json(tickets) : res.status(400).send("User not found");
        } catch {
            return res.status(500).send("Failed");
        }
    }
    return res.status(401).send("Cannot make a request of this type.");
}