export default function handler(req, res) {
    if (req.method === "GET") {
        return res.status(402).json({status: "ERROR: Must input a type."});
    } else {
        return res.status(401).json({status: `Cannot complete a request of this type.`});
    }
}