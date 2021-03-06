let quips = [
    "↑↑↓↓←→←→ⒷⒶ",
    "Bring me the Imperial Swear Jar!",
    "Insert quarter...",
    "Subbed and dubbed for all tastes as long as it's in English.",
    "And you will derive great pleasure from it.",
    "And all will be well.",
    "You have awakened the gazebo.  Roll for initiative.",
    "Like watching a mental breakdown in slow-motion!",
    "A \"double-dog dare\" is not a legal defense.",
    "This was a triumph.",
    "You have lost the game.",
    "East coast is the Beast Coast.",
    "Now asbestos-free!",
    "The Aristocrats!",
    "It was a pretty bad idea in hindsight.",
    "It was a pretty bad idea in foresight.",
    "Buckling spring action!",
    "Aaah! It's a bear holding a shark!",
    "Lies and violence!",
    "Squared Cool",
    "#Dave4Prez2024",
    "Incurring additional fees for not rewinding the tape when returning it since 199X!",
    "Incurring additional fees for not rewinding the DVD when returning it since 200X!",
    "What wouldst thou deau???",
    "Anything that you thought was so important didn't really matter after all.",
    "Looks like a scientific-enough paper.  Even has graphs and stuff!  Would it lie to us?",
    "Nothing but us metal plates and chicken bones on the road here!",
    "Ask your parents before going online (but don't tell them you're coming here).",
    "A game about running and escaping!",
    "Jukebox Hero is a hard game.",
    "It's a site!",
    "It's not a bug, mom!",
    "Denied by O5-█",
    "It is now safe to turn off your computer.",
    "It is not safe to turn off your computer.",
    "As delightful as a game of Prussian roulette.",
    "The greatest thing since sliced bread.",
    "The greatest thing since canned bread.",
    "The greatest thing since sliced bread was legalized again in 1947.",
    "Somebody get this freaking duck away from me!",
    "But verily it be the nature of dreams to end.",
    "You'll understand it when you're older.",
    "Creeper? Aw y-💥",
    "Also try Factorio!",
    "Oh no!  That owl's getting too buff!",
    "What a horrible night to be literate.",
    "The embodiment of evil shenanigans",
    "Always imitated; never duplicated... Thank goodness.",
    platonicRelationship,
    excuseMePrincess,
    iKnowWhatThisSushiNeeds,
    handBushExchangeRate,
];

function platonicRelationship() {
    const SHAPES = [
        "tetrahedron",
        "cube",
        "octahedron",
        "dodecahedron",
        "isocahedron",
    ];

    return `A bizarre love ${RNG.randomElement(SHAPES)}!`;
}

function excuseMePrincess() {
    return "Well EXCU" + ("SE ME, PRINCESS!".padStart(18 + RNG.between(10), "U"));
}

function iKnowWhatThisSushiNeeds() {
    const SAUCES = [
        "sriracha",
        "ketchup",
        "catsup",
        "mayonnaise",
        "spray butter",
        "wasabi",
        "more wasabi",
        "sort of existensial crisis",
        "more cowbell",
        "Chick-Fil-A sauce",
    ];

    return `I know what this sushi needs!  Some ${RNG.randomElement(SAUCES)}!`;
}

function handBushExchangeRate() {
    const RATE = (Math.random() + 1).toFixed(2);
    return `The bird in the hand is now worth ${RATE} in the bush.`;
}

const TODAY = new Date();

// Christmas and other Decembery quips

if (TODAY.getMonth() === 11) {
    if (TODAY.getDate() === 25) { // Months start at 0, but dates start at 1?  What?
        quips = RNG.randomElement(["merr", "hap", "yay it"]) + " " +
	    RNG.randomElement(["crimbus", "festvus", "holldæy", "holliliday", "crispmas", "crithmuth"]);
    } else {
        function nthDayOfChristmas() {
            const DAY = RNG.randomElement(["third", "fifth", "seventh", "ninth", "eleventh"]);
            return `On the ${DAY} day of Christmas my true love said to me, \"I want a divorce\".`;
        }

        quips.push(
            "Bah, humbug.",
            "With bunnies running for their lives, I wish this one was super-sized.",
            "A Festivus for the rest of us!",
            "Aloha shirts?  At the White Elephant?  It's more likely than you think.",
	    "📎💬 Looks like you're writing a last-minute Christmas card.  Would you like any help?",
            nthDayOfChristmas,
        );
    }
}

export default quips;
