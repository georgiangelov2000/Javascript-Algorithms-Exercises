function solve(array) {
    let heroes = [];
    array.forEach(line => {
        let [name, level, items] = line.split(' / ');
        level = Number(level);
        items = items.split(', ');

        let hero = {
            name,
            level,
            items
        };
        heroes.push(hero)
    });
    console.log(JSON.stringify(heroes))
}
solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])



