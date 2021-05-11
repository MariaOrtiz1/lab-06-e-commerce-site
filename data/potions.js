const minorElixirOfLife = {
    id: 'minorElixirOfLife',
    name: 'Minor Elixir of Life',
    image: 'placeholder.png',
    description: 'The elixir restores 1d6 health, and a +1 to saving throws against diseases and poisons for 10 minutes! Handmade with love and other various potent reagents!',
    category: 'lvl1Potions',
    price: 3,
};

const lesserAntiPlague = {
    id: 'lesserAntiPlague',
    name: 'Lesser AntiPlague',
    image: 'placeholder.png',
    description: 'Antiplague can fortify the body’s defenses against diseases, upon drinking, you gain +2 to Fortitude saving throws against diseases for 24 hours. Handmade with love and other various potent reagents!',
    category: 'lvl1Potions',
    price: 3,
};

const lesserDrakeheartMutagen = {
    id: 'lesserDrakeheartMutagen',
    name: 'Lesser Drakeheart Mutagen',
    image: 'placeholder.png',
    description: 'Your skin grows tough scales like a drake, your eyesight become sharp and your pupils slitted, and your limbs grow wiry and quick, but your mind and reflexes become slow. You gain the listed bonus to AC, a Dexterity cap of +2 (as usual, use your lowest Dexterity cap if you have more than one), and an item bonus to Perception checks. You take a –1 penalty to Will saves, Reflex saves, and all skill checks to Recall Knowledge. Handmade with love and other various potent reagents!',
    category: 'lvl1Potions',
    price: 4,
};

const silversheen = {
    id: 'silversheen',
    name: 'Silversheen',
    image: 'placeholder.png',
    description: 'For the next hour, the weapon or ammunition that is covered in the liquid counts as silver instead of its normal precious material (such as cold iron) for any physical damage it deals. Silversheen spoils quickly, so once you open a vial, you must use it all at once, rather than saving it. Handmade with love and other various potent reagents!',
    category: 'lvl2Potions',
    price: 6,
};

const nectarOfPurification = {
    id: 'nectarOfPurification',
    name: 'Nectar of Purification',
    image: 'placeholder.png',
    description: 'This oil casts a 1st-level purify food and drink spell over any food or drink onto which it’s poured. The nectar evaporates as it takes effect, leaving the taste and texture of the food or drink unaltered. Handmade with love and other various potent reagents!',
    category: 'lvl1Potions',
    price: 3,
};


const handmadePotions = [minorElixirOfLife, lesserAntiPlague, lesserDrakeheartMutagen, silversheen, nectarOfPurification];

export default handmadePotions;