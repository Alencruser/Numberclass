class Mystery {
	constructor(life,max) {
		this.life = life;
		this.answer = Math.floor(Math.random() * Math.floor(max));
	}
	checkNumber(input){
		switch(true){
			case input<this.answer:
			console.log('Plus grand')
			break;
			case input>this.answer:
			console.log('Plus petit')
			break;
			default:
			console.log('C\'est gagné')
			break;
		}
	}
	substract(){
		return life--;
	}
}
let mystery_one = new Mystery(3,10)