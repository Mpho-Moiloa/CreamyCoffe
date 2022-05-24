
function Ingrediants() {};
    Ingrediants.prototype.expressoShot = 0.75;
    Ingrediants.prototype.milk = 0.5;
    Ingrediants.prototype.cream = 1;
    Ingrediants.prototype.sugar = 0.2;
    Ingrediants.prototype.syrup = 5;


Ingrediants.prototype = new Ingrediants;

function Size() {};
    Size.prototype.small = 12;
    Size.prototype.medium = 14;
    Size.prototype.grande = 16;
    Size.prototype.calculateSmall = function() {
        var shot = Ingrediants.prototype.expressoShot;
        return Size.prototype.small + shot;
    };

Size.prototype = new Size;
// console.log(size.small);

function Style() {};
    Style.prototype.americano = null;
    Style.prototype.cappuccino = 1; //cream
    Style.prototype.latte = 0.5; //milk


Style.prototype = new Style;

console.log(Size.prototype.calculateSmall + ", Martin BIG Balla!");
