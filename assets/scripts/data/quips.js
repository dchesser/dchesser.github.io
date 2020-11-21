const QUIPS = [
    "Yes, my ass is quite dumb.  But I eventually taught my ass everything I know.",
    "Sat here so long my butt has suffocated!",
    "↑↑↓↓←→←→ⒷⒶ",
    "Remus!  Bring me the Imperial Swear Jar!",
    "Insert quarter...",
    "Subbed and dubbed for all tastes as long as it's in English.",
    "Saïba Dave and the Tasty Riff Dinner",
    "Saïba Dave and the Vape Juice Chug",
    "And you will derive great pleasure from it.",
    "And all will be well.",
    "You have awakened the gazebo.  Roll for initiative.",
    "Featuring D.J. Cheese-Like Product!",
    "(insert inane tripe here)",
    "Like watching a mental breakdown in slow-motion!",
    "A \"double-dog dare\" is not a legal defense.",
    "CD > vinyl #ChangeMyMind 😏",
    "This was a triumph.",
    "You have lost the game.",
    "East coast BEAST COAST!",
    "Now asbestos-free!",
    "The Aristocrats!",
    "Best viewed using Netscape 1.0 or lower.",
    "More lasers!",
    "It was a pretty bad idea in hindsight.",
    "It was a pretty bad idea in foresight.",
    "It looked like a good idea at the time.",
    "Buckling spring action!",
    "Aaah! It's a bear holding a shark!",
    "Yoink!", // https://practicalguidetoevil.wordpress.com/2017/09/13/chapter-31-high-noon/
    "Lies and violence!",
    "Squared Cool",             // 🆒
    "#Dave4Prez2024",
    "Incurring additional fees for not rewinding the tape when returning them since 199X!",
    "Incurring additional fees for not rewinding the DVD when returning them since 200X!",
    "Incurring additional fees for not rewinding the Internet packet when returning them since 201X!",
    "Incurring additional fees for not rewinding the tape when returning them since 20X6!",
    "The Djinni of the Potato Chip Bag is free from his starchy prison.",
    "What wouldst thou deau???",
    "Toilet paper for the pandemic?  Wait 'til you try the three clamshells!",
    "Anything that you thought was so important didn't really matter after all.",
    "Looks like a scientific-enough paper.  Even has graphs and stuff!  Would it lie to us?",
    "It's that time of month again!  That's right, it's GIZZARD TIME!",
    "Like the movie Hitch but with a treacherous vizir!",
    creeper,
    whatAWeek,
    platonicRelationship,       // A classic staple of soap operas and Japanese cartoons.
    excuseMePrincess,           // I once saw a frequency chart of how many 'U's there would be.
    iKnowWhatThisSushiNeeds,    // Inspired by a box of frozen sushi thawed from a microwave oven.
    ifCrazyReddSoldBootlegsFromWhatCD // The true quip is in the function names.
];

function creeper() {
    const INTERJECTIONS = [
        "Aw yeah.",
        "Ah s🤬!",
        "OH F🤬K!",
        "Aw y-💥",              // This is why you look both ways before placing torches.
    ];

    return "Creeper?  " + RNG.randomElement(INTERJECTIONS);
}

function whatAWeek() {
    return [
        "Some Sunday",
        "Manic Monday",
        "Titanic Tuesday",
        "What a week, huh?",    // Uh... It's Wednesday.
        "Thrice-Cursed Thursday",
        "F🤬ing Friday",
        "Shrill Saturday",
    ][(new Date).getDay()];
}

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
    ];

    return "I know what this sushi needs!  Some " + RNG.randomElement(SAUCES) + "!";
}

function ifCrazyReddSoldBootlegsFromWhatCD() {
    // The adjectives for the paintings I blatantly yoinked from a walkthrough.
    const ADJECTIVES = ["Academic", "Basic", "Calm", "Common", "Detailed", "Dynamic", "Famous", "Flowery", "Glowing", "Graceful", "Jolly", "Moody", "Moving", "Mysterious", "Nice", "Perfect", "Proper", "Quaint", "Scary", "Scenic", "Serene", "Sinking", "Solemn", "Twinkling", "Warm", "Wild", "Wistful", "Worthy"];

    // Music genres, though, are pulled straight out of my butt.
    // From, like, WAY up there. 👆😬
    const GENRES = [
        "avant-garde extreme baroque",
        "bossa nova",
        "heavy metal",
        "doom metal",
        "stoner metal",
        "stoner doom blues",    // Whoever curates that list has terrible tastes to throw in nothing but dreampop.
        "pop",
        "futurefunk",
        "jazz",
        "reggae",
        "power reggae",
        "Soviet march",
        "avant-garde extreme reggae", // Let's drive this avant-garde extreme joke to the ground!
        "vaporwave",                  // Æ S Þ E T I X X X
    ];

    return "Like the finest " + RNG.randomElement(GENRES) +
        " albums, I can't get enough of that " + RNG.randomElement(ADJECTIVES) + " Painting.";
    // Actually, quick question: how does he get a hold of THE REAL Mona Lisa?
}

export default QUIPS;