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
                return res.status(200).json({"pokemonName": data["name"], "sprite": data["sprites"]["front_default"], "types": types});
            }
            fetchData();
        }
        catch {
            return res.status(400).json({status: "ERROR"});
        }
    }
}