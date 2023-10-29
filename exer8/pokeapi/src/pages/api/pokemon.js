export default function handler(req, res) {
    if (req.method === "GET") {
        try {
            async function fetchData() {
                let id = Math.floor((Math.random() * 1017) + 1);
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                const data = await response.json();
                let types = [];
                data["types"].forEach((type)=> {
                    types.push(type["type"]["name"]);
                });
                const typeKey = (types.length === 1) ? "type" : "types";
                const pokemonJSON = {"name": data["name"], "sprite": data["sprites"]["front_default"]};
                pokemonJSON[typeKey] = types;
                return res.status(200).json(pokemonJSON);
            }
            fetchData();
        }
        catch {
            return res.status(400).json({status: "ERROR"});
        }
    } else {
        return res.status(401).json({status: `Cannot complete a request of this type.`});
    }
}