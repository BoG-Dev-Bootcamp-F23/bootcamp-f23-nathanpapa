export default function handler(req, res) {
    if (req.method === "GET") {
        const name = req.query.name;
        console.log(name);
        if (name === "") {
            req.status(401).json({status: "ERROR: Must input a Pokemon's name."});
        }
        async function fetchData() {
            try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
            const data = await response.json();
            await console.log(data);
            let types = [];
            data["types"].forEach((type)=> {
                types.push(type["type"]["name"]);
            });
            return res.status(200).json({"pokemonName": data["name"], "sprite": data["sprites"]["front_default"], "types": types});
            } catch {
                res.status(400).json({status: `ERROR: ${name} is not a Pokemon.`});
            }
        }
        fetchData();
    }
}