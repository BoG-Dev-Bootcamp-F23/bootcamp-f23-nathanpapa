export default function handler(req, res) {
    if (req.method === "GET") {
        const name = req.query.name;
        async function fetchData() {
            try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
            const data = await response.json();
            let types = [];
            data["types"].forEach((type)=> {
                types.push(type["type"]["name"]);
            });
            const typeKey = (types.length === 1) ? "type" : "types";
            const pokemonJSON = {"name": data["name"], "sprite": data["sprites"]["front_default"]};
            pokemonJSON[typeKey] = types;
            return res.status(200).json(pokemonJSON);
            } catch {
                return res.status(400).json({status: `ERROR: ${name} is not a Pokemon.`});
            }
        }
        fetchData();
    } else {
        return res.status(401).json({status: `Cannot complete a request of this type.`});
    }
}