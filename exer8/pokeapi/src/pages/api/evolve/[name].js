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
                let evolutions = "";
                if (evolutionChain["species"]["name"] === name.toLowerCase()) {
                    if (evolutionChain["evolves_to"].length === 0) {
                        return res.status(201).json({pokemon: `${name.toLowerCase()} doesn't evolve.`});
                    }
                    for (let i = 0; i < evolutionChain["evolves_to"].length; i++) {
                        if (evolutionChain["evolves_to"].length === 1) {
                            evolutions = `${evolutionChain["evolves_to"][i]["species"]["name"]}`;
                        } else if (evolutionChain["evolves_to"].length === 2) {
                            evolutions = `${evolutionChain["evolves_to"][i]["species"]["name"]}` + " and "
                                + `${evolutionChain["evolves_to"][i+1]["species"]["name"]}`;
                            break;
                        } else if (i + 1 === evolutionChain["evolves_to"].length) {
                            evolutions += `and ${evolutionChain["evolves_to"][i]["species"]["name"]}.`;
                        } else {
                            evolutions += `${evolutionChain["evolves_to"][i]["species"]["name"]}, `;
                        }
                    }
                    return res.status(200).json({pokemon: `${name.toLowerCase()} evolves into ${evolutions}`});
                } else {
                    for (let i = 0; i < evolutionChain["evolves_to"].length; i++) {
                        if (evolutionChain["evolves_to"][i]["species"]["name"] === name.toLowerCase()) {
                            if (evolutionChain["evolves_to"][i]["evolves_to"].length === 0) {
                                return res.status(201).json({pokemon: `${name.toLowerCase()} doesn't evolve.`});
                            }
                            for (let j = 0; j < evolutionChain["evolves_to"][i]["evolves_to"].length; j++) {
                                if (evolutionChain["evolves_to"][i]["evolves_to"].length === 1) {
                                    evolutions = `${evolutionChain["evolves_to"][i]["evolves_to"][j]["species"]["name"]}`;
                                } else if (evolutionChain["evolves_to"][i]["evolves_to"].length === 2) {
                                    evolutions = `${evolutionChain["evolves_to"][i]["evolves_to"][j]["species"]["name"]}` + " and "
                                        + `${evolutionChain["evolves_to"][i]["evolves_to"][j + 1]["species"]["name"]}`;
                                    break;
                                } else if (j + 1 === evolutionChain["evolves_to"][i]["evolves_to"].length) {
                                    evolutions += `and ${evolutionChain["evolves_to"][i]["evolves_to"][j]["species"]["name"]}.`;
                                } else {
                                    evolutions += `${evolutionChain["evolves_to"][i]["evolves_to"][j]["species"]["name"]}, `;
                                }
                            }
                        }
                    }
                    return (evolutions === "") ? res.status(201).json({pokemon: `${name.toLowerCase()} doesn't evolve.`})
                        : (res.status(200).json({pokemon: `${name.toLowerCase()} evolves into ${evolutions}`}));
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