let quips = [
    "↑↑↓↓←→←→ⒷⒶ",
    "Bring me the Imperial Swear Jar!",
    "Insert quarter...",
    "Subbed and dubbed for all tastes as long as it's in English.",
    "Saïba Dave and the Tasty Riff Dinner",
    "Saïba Dave and the Vape Juice Chug",
    "Saïba Dave and the Beige Module Cartridge",
    "And you will derive great pleasure from it.",
    "And all will be well.",
    "You have awakened the gazebo.  Roll for initiative.",
    "Featuring D.J. Cheese-Like Product!",
    "Like watching a mental breakdown in slow-motion!",
    "A \"double-dog dare\" is not a legal defense.",
    "This was a triumph.",
    "You have lost the game.",
    "East coast is the Beast Coast.",
    "Now asbestos-free!",
    "The Aristocrats!",
    "Best viewed using Netscape 1.0 or lower.",
    "More lasers!",
    "It was a pretty bad idea in hindsight.",
    "It was a pretty bad idea in foresight.",
    "Buckling spring action!",
    "Aaah! It's a bear holding a shark!", // http://www.hrwiki.org/wiki/Bear_holding_a_Shark
    "Yoink!", // https://practicalguidetoevil.wordpress.com/2017/09/13/chapter-31-high-noon/
    "Lies and violence!",
    "Squared Cool",             // 🆒
    "#Dave4Prez2024",
    "Incurring additional fees for not rewinding the tape when returning it since 199X!",
    "Incurring additional fees for not rewinding the DVD when returning it since 200X!",
    "What wouldst thou deau???",
    "Anything that you thought was so important didn't really matter after all.",
    "Looks like a scientific-enough paper.  Even has graphs and stuff!  Would it lie to us?",
    "Like the movie Hitch but without a treacherous vizir!",
    "It's not stealing if you're not dressed like the Hamburgler.",
    "At least you don't have to funcall and quote functions here!",
    "Nothing but us metal plates and chicken bones on the road here!",
    "Ask your parents before going online (but don't tell them you're coming here).",
    "A game about running and escaping!", // That was "Run Escape" back in third grade.  Holy crap that was early 2001!
    "He's half-man and half-machine!",
    "He rides the metal monster breathing smoke and fire!",
    "Jukebox Hero is a hard game.",
    "Man, clerics are just the worst.", // https://www.giantitp.com/comics/oots1215.html
    "It's a site!",
    "Shooping whoops since 2000!", // Us late millenials are weird, m'kay?
    "Beware!  I live!",
    "What's this?  Your PEANUT BUTTER is evolving!", // Press B to stop it.
    "Barbara Manatee was the OG waifu!",
    "Zebuuuuuu!", // DAMMIT THIS IS STUCK IN MY HEAD AGAIN!
    "It's not a bug, mom!",
    "Denied by O5-█",
    "It is now safe to turn off your computer.",
    "It is not safe to turn off your computer.",
    "As delightful as a game of Prussian roulette.", // (🗡) Okay who goes first?
    "The greatest thing since sliced bread.",
    "The greatest thing since canned bread.",
    "The greatest thing since sliced bread was legalized again in 1947.",
    "I OBLITERATED this packet of turkey slices from the deli with FACTS and LOGIC!", // They always tear around the resealable zipper. I've Shapiro'd this dead bird. ;_;
    "Somebody get this freaking duck away from me!",
    "BUT, VERILY, IT BE THE NATURE OF DREAMS TO END.", // Koholint from LoZ: Link's Awakening being in the same universe as my Animal Crossing: New Horizons island is now confirmed.  Marin wanted to be a seagull and sing for people.  Gulliver is a seagull and "he" keeps washing up on my beach and gripes about how his smartphone is busted.  Coïncidence?  I THINK NOT!  Gulliver _also_ says he "heard a fish say that".  THE WIND FISH IN NAME ONLY FOR IT IS NEITHER.
    "You'll understand it when you're older.",
    "You'll understand it when you're younger.",
    "Creeper? Aw y-💥",
    platonicRelationship,       // A classic staple of soap operas and Japanese cartoons.
    excuseMePrincess,           // I once saw a frequency chart of how many 'U's there would be.
    iKnowWhatThisSushiNeeds,    // Inspired by a box of frozen sushi thawed from a microwave oven.
    handBushExchangeRate,
];

function platonicRelationship() {
    const SHAPES = [
        // "triangle", // Meh, the cool kids smoke THREE dimensions a day behind the dumpster after school.
        "tetrahedron",
        "cube",
        "octahedron",
        "dodecahedron",         // Any more than this and it becomes a Roman orgy.
        "isocahedron",          // And NOW it's a Roman orgy.  That's anything BUT Platonic!
        // Platonic solids.  That's the joke.  Now it's ruined, source code reader.  Go home.
    ];

    return "A bizarre love " + RNG.randomElement(SHAPES) + "!";
}

function excuseMePrincess() {
    return "Well EXCU" + ("SE ME, PRINCESS!".padStart(18 + RNG.between(10), "U"));
}

function iKnowWhatThisSushiNeeds() {
    const SAUCES = [
        "sriracha",             // Nah.  Too smokey.
        "ketchup",
        "catsup",               // Just to piss off the ketch-cats debate.
        "mayonnaise",           // Just to piss off anyone who still has taste buds.
        "spray butter",         // Just to piss off anyone who has self-worth.
        "wasabi",
        "more wasabi",          // Aldi never puts enough packets in their frozen box.
        "sort of existensial crisis",
        "more cowbell",         // This used to be a meme back when I was a kid.
        "Chick-Fil-A sauce",    // Did you know you could just BUY that stuff at the store?
    ];

    return "I know what this sushi needs!  Some " + RNG.randomElement(SAUCES) + "!";
}

function handBushExchangeRate() {
    const RATE = (Math.random() + 1).toFixed(2);
    return `The bird in the hand is now worth ${RATE} in the bush.`;
}

const TODAY = new Date();

// Christmas and other Decembery quips

if (TODAY.getMonth() === 11) {
    if (TODAY.getDay() === 25) {
        quips = RNG.randomElement(["merr", "hap", "yay it"]) +
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
