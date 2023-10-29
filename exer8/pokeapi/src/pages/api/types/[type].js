export default function handler(req, res) {
    if (req.method === "GET") {
        async function fetchData() {
            const type = req.query.type;
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/type/${type.toLowerCase()}`);
                const data = await response.json();
                let typeMons = {};
                typeMons[`${type.toLowerCase()}_types`] = [];
                data["pokemon"].forEach((pokemon) => {
                    typeMons[`${type.toLowerCase()}_types`].push(pokemon["pokemon"]["name"]);
                });
                return res.status(200).json(typeMons);
            } catch {
                return res.status(400).json({status: `ERROR: ${type} is not a valid Pokemon type.`});
            }
        }
        fetchData();
    } else {
        return res.status(401).json({status: `Cannot complete a request of this type.`});
    }
}