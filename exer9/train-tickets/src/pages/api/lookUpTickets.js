import readTicketsByUser from "../../../server/mongodb/actions/readTicketsByUser";

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            await readTicketsByUser(req.query);
        } catch {
            return res.status(500).send("Failed");
        }
        return res.status(200).send("Success");
    }
    return res.status(401).send("Cannot make a request of this type.");
}