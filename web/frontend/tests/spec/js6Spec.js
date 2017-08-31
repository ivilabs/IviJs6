/*
 Vars
*/

describe('Változok', function () {
    console.log("Vars test");
    it('x = ' + x, function () {
        expect(x).toEqual(5);
    });
    it('y = ' + y, function () {
        expect(y).toEqual(6);
    });
    it('x + y = ' + z, function () {
        expect(z).toEqual(x + y);
    });
    it('x * y = ' + m, function () {
        expect(m).toEqual(x * y);
    });
    it('n = null', function () {
        expect(n).toBeNull();
    });
    it('u = undefined', function () {
        expect(u).toBeUndefined();
    });

});

/*
 Functions
*/

describe('Függvények', function () {
    it('Egy függvény visszatér egy meghatározott stringel.', function () {
        expect(returnString()).toEqual('Js6 project!');
    });
    it('Egy függvény visszatérő értéke tartalmaz egy megadott stringet.', function () {
        expect(returnString()).toContain('project');
    });
    it('Van két változó amit összeadok egy függvénnyel: ' + x + ' + ' + y + ' = ' + (x + y), function () {
        expect(add(x, y)).toBe(x + y);
    });
    it('Van két változó amit kivonok egymásból egy függvénnyel: ' + x + ' - ' + y + ' = ' + (x - y), function () {
        expect(sub(x, y)).toBe(x - y);
    });
    it('Van két változó amit összeszorzok egy függvénnyel: ' + x + ' * ' + y + ' = ' + (x * y), function () {
        expect(mul(x, y)).toBe(x * y);
    });
});

/*
 Calculator
*/

describe('Megvizsgáljuk random számokkal a függvényt hogyan müködik.', function () {
    for (var i = 5; i > 0; i--) {
        var number1 = Math.floor((Math.random() * 100) + 1),
            number2 = Math.floor((Math.random() * 100) + 1);

        it('Van két random számom amit összeadok egymással: ' + number1 + ' + ' + number2 + ' = ' + (number1 + number2), function () {
            expect(add(number1, number2)).toBe(number1 + number2);
        });

        it('Van két random számom amit kivonok egymásból: ' + number1 + ' - ' + number2 + ' = ' + (number1 - number2), function () {
            expect(sub(number1, number2)).toBe(number1 - number2);
        });

        it('Van két random számom amit megszorzok egymással ' + number1 + ' * ' + number2 + ' = ' + (number1 * number2), function () {
            expect(mul(number1, number2)).toBe(number1 * number2);
        });
    }
});

/*
 Data types
*/

describe('Adatípusok', function () {
    it('Ez egy szám', function () {
        expect(number).toEqual(jasmine.any(Number));
    });
    it('Ez egy szöveg', function () {
        expect(string).toEqual(jasmine.any(String));
    });
    it('Ez egy objektum', function () {
        expect(object).toEqual(jasmine.any(Object));
    });
    it('Ez egy boolean', function () {
        expect(boolean).toEqual(jasmine.any(Boolean));
    });
});

/*
 Arrays
*/

describe('Tömb', function () {
    it('Ez egy tömb', function () {
        expect(array).toEqual(jasmine.any(Array));
    });
    it('Ez a tömb ezeket az elemeket tartalmaza? ["Saab", "Volvo", "BMW"]', function () {
        expect(array).toEqual(["Saab", "Volvo", "BMW"]);
    });
    it('Ez a tömb 3 elemböl áll?', function () {
        expect(array.length).toEqual(3);
    });
    it('Tartalmaz Volvo -t a tömb?', function () {
        expect(array).toContain("Volvo");
    });
});

/*
 Ture or False
*/

describe('Igaz és Hamis', function () {
    it('Igaz', function () {
        expect(t).toBeTruthy();
    });
    it('Hamis', function () {
        expect(f).toBeFalsy();
    });
});

/*
 Bigger or lesser
*/

describe('Nagyobb és Kisebb', function () {
    it('Kisebb mint 10', function () {
        expect(x).toBeLessThan(10);
    });
    it('Nagyobb mint 1', function () {
        expect(x).toBeGreaterThan(1);
    });
});

/*
 Oop
*/

describe("Freighter", function () {
    var freighter;
    beforeEach(function () {
        freighter = new Freighter("Ibis", 300, 100, 200, 20);
    });
    it("Ha hozzáadok 120kg akkor a súlya 120kg lesz?", function () {
        freighter.loading(20);
        expect(freighter.mass).toEqual(120);
    });
    it("Ha kivonok belöle 20kg akkor a súlya 100kg lesz?", function () {
        freighter.loading(20);
        freighter.unloading(20);
        expect(freighter.mass).toEqual(100);
    });
    it("Ha hozzáadok 100kg ot az még lehetséges.", function () {
        expect(freighter.loading(100)).toBeTruthy();
    });
    it("Ha hozzáadok 101kg ot az már nem lehetséges.", function () {
        expect(freighter.loading(101)).toBeFalsy();
    });
});