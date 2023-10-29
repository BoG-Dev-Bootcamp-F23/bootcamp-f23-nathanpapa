export default function handler(req, res) {
    if (req.method === "GET") {
        const name = req.query.name;
        async function fetchData() {
            try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name.toLowerCase()}`);
            const pokemonData = await response.json();
            const evolutionChainResponse = await fetch(pokemonData["evolution_chain"]["url"]);
            const evolutionChainData = await evolutionChainResponse.json();
            const evolutionChain = evolutionChainData["chain"];
            if (evolutionChain["species"]["name"] === name.toLowerCase()) {
                if (evolutionChain["evolves_to"].length === 0) {
                    return res.status(201).json({pokemon: `${name.toLowerCase()} doesn't evolve.`});
                }
                return res.status(200).json({pokemon: `${name.toLowerCase()} evolves into ${evolutionChain["evolves_to"][0]["species"]["name"]}.`});
            } else if (evolutionChain["evolves_to"][0]["species"]["name"] === name.toLowerCase()) {
                if (evolutionChain["evolves_to"][0]["evolves_to"].length === 0) {
                    return res.status(201).json({pokemon: `${name.toLowerCase()} doesn't evolve.`});
                }
                return res.status(200).json({pokemon: `${name.toLowerCase()} evolves into ${evolutionChain["evolves_to"][0]["evolves_to"][0]["species"]["name"]}.`});
            } else {
                return res.status(201).json({pokemon: `${name.toLowerCase()} doesn't evolve.`});
            }
            } catch {
                res.status(400).json({status: `ERROR: ${name} is not a Pokemon.`});
            }
        }
        fetchData();
    } else {
        return res.status(401).json({status: `Cannot complete a request of this type.`});
    }
}