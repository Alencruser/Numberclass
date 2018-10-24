class Mystery {
	constructor(life,max) {
		this.life = life;
		this.answer = Math.floor(Math.random() * Math.floor(max));
	}
	checkNumber(input){
		if(this.life>0){
			switch(true){
				case input<this.answer:
				console.log('Plus grand')
				this.substract();
				break;
				case input>this.answer:
				console.log('Plus petit')
				this.substract();
				break;
				default:
				console.log('C\'est gagné')
				break;
			}
		}else{
			console.log("Perdu. Tu n'as plus d'essai la réponse était : "+this.answer);
		}
	}
	substract(){
		this.life--;
	}
}
let mystery_one = new Mystery(3,10)
