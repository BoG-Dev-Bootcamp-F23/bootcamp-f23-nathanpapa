export default function handler(req, res) {
    if (req.method === "POST") {
        if (!req.body["pokemon1"] || !req.body["pokemon2"]) {
            return res.status(403).json({status: "ERROR: Must input two pokemon to battle."});
        }
        const pokemon1 = req.body["pokemon1"];
        const pokemon2 = req.body["pokemon2"];
        async function fetchData() {
            try {
                const pokemon1Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon1.toLowerCase()}`);
                const pokemon1Data = await pokemon1Response.json();
                const pokemon2Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon2.toLowerCase()}`);
                const pokemon2Data = await pokemon2Response.json();
                let pokemon1BST = 0;
                let pokemon2BST = 0;
                pokemon1Data["stats"].forEach((stat) => {
                    pokemon1BST += stat["base_stat"];
                });
                pokemon2Data["stats"].forEach((stat) => {
                    pokemon2BST += stat["base_stat"];
                });
                if (pokemon1BST < pokemon2BST) {
                    return res.status(200).json({result: `${pokemon2.toLowerCase()} beats ${pokemon1.toLowerCase()}.`});
                } else if (pokemon1BST > pokemon2BST) {
                    return res.status(200).json({result: `${pokemon1.toLowerCase()} beats ${pokemon2.toLowerCase()}.`});
                } else {
                    return res.status(200).json({result: "The battle results in a draw."});
                }
            } catch {
                return res.status(400).json({status: `ERROR: One of the pokemon is not a pokemon.`});
            }
        }
        fetchData();
    } else {
        return res.status(401).json({status: `Cannot complete a request of this type.`});
    }
}