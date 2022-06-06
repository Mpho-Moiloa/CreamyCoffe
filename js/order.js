
class Ingrediants {
    constructor() {
        this.expressoShot = 0.75;
        this.milk = 0.5;
        this.cream = 1;
        this.sugar = 0.2;
        this.syrup = 5;//for now this is golden syrup only!
    }
    
};
var chosenOrder = new Ingrediants;

class Size extends Ingrediants{
    constructor(){
        super();
        this.small = 12;
        this.tall = 14;
        this.grande = 16;
        this.messageSmall = "a small";
        this.messageTall = "a tall";
        this.messageGrande = "a grande";
    };
    calculateSmall() {
        var shot = this.expressoShot;
        var price = shot + this.small;
        return price;
        
    };
    calculateTall() {
        var shot = this.expressoShot * 2;
        return shot + this.tall
        
    };
    calculateGrande() {
        var shot = this.expressoShot * 3;
        return shot + this.grande
        
    };
};
var chosenSize = new Size;
// console.log(size.small);

class Style extends Ingrediants{
    constructor(){
        super();
        this.americano = 0; //nothing
        this.cappuccino = this.cream; //cream
        this.latte = this.milk; //milk
        this.messageAmericano = "Americano";
        this.messageCappucino = "Cappuccino";
        this.messageLatte = "Latte";
    }
};
var chosenStyle = new Style;
//Purchase button functionality
var purchase = function() {
    var small = document.querySelector('#small');
    var tall = document.querySelector('#tall');
    var grande = document.querySelector('#grande');
    var americano = document.querySelector('#americano');
    var cappuccino = document.querySelector('#cappucino');
    var latte = document.querySelector('#latte');
    
    if (small.checked && americano.checked){
        document.getElementById("orderResult").innerHTML = `You have ordered ${chosenSize.messageSmall +" "+ chosenStyle.messageAmericano}; price is R${chosenSize.calculateSmall()}`;
    } else if(tall.checked && americano.checked) {
        document.getElementById("orderResult").innerHTML = `You have ordered ${chosenSize.messageTall +" "+ chosenStyle.messageAmericano}; price is R${chosenSize.calculateTall()}`;
    } else if (grande.checked && americano.checked) {
        document.getElementById("orderResult").innerHTML = `You have ordered ${chosenSize.messageGrande +" "+ chosenStyle.messageAmericano}; price is R${chosenSize.calculateGrande()}`;
    } else if (small.checked && cappuccino.checked) {
        document.getElementById("orderResult").innerHTML = `You have ordered ${chosenSize.messageSmall +" "+ chosenStyle.messageCappucino}; price is R${chosenSize.calculateSmall() + chosenStyle.cappuccino}`;
    } else if(tall.checked && cappuccino.checked) {
        document.getElementById("orderResult").innerHTML = `You have ordered ${chosenSize.messageTall +" "+ chosenStyle.messageCappucino}; price is R${chosenSize.calculateTall() + chosenStyle.cappuccino}`;
    } else if (grande.checked && cappuccino.checked) {
        document.getElementById("orderResult").innerHTML = `You have ordered ${chosenSize.messageGrande +" "+ chosenStyle.messageCappucino}; price is R${chosenSize.calculateGrande() + chosenStyle.cappuccino}`;
    } else if (small.checked && latte.checked) {
        document.getElementById("orderResult").innerHTML = `You have ordered ${chosenSize.messageSmall +" "+ chosenStyle.messageLatte}; price is R${chosenSize.calculateSmall() + chosenStyle.latte}`;
    } else if(tall.checked && latte.checked) {
        document.getElementById("orderResult").innerHTML = `You have ordered ${chosenSize.messageTall +" "+ chosenStyle.messageLatte}; price is R${chosenSize.calculateTall() + chosenStyle.latte}`;
    } else if (grande.checked && latte.checked) {
        document.getElementById("orderResult").innerHTML = `You have ordered ${chosenSize.messageGrande +" "+ chosenStyle.messageLatte}; price is R${chosenSize.calculateGrande() + chosenStyle.latte}`;
    } else {
        document.getElementById("orderResult").innerHTML = "Order incomplete, please choose the correct options";
    }
    
}



// console.log();
