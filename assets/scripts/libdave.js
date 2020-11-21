"use strict";

/* TODO: Documentation comments. https://www.oracle.com/technical-resources/articles/java/javadoc-tool.html */

class RNG {
    static between(max) {
	return Math.floor(Math.random() * max); // [0, max)
    }

    static betweenInclusively(min, max) {
	return RNG.between(max) + min;
    }

    static randomIndex(ary) {
	return RNG.between(ary.length);
    }

    static randomElement(ary) {
	return ary[RNG.randomIndex(ary)];
    }

    static coin() {
	return RNG.between(2) === 0;
    }
}
