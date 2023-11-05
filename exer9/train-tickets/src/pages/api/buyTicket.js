import createTicket from "../../../server/mongodb/actions/createTicket";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            await createTicket(req.body);
        } catch {
            return res.status(500).send("Failed");
        }
        return res.status(200).send("Success");
    }
    return res.status(401).send("Cannot make a request of this type.");
}