class Mystery {
	constructor(input_two){
		this.x = ''
		this.life = input_two

		this.genNumber(0,9)
	}
	set set_x(number){ this.x = number }
	get get_x(){ return this.x }

	genNumber(min, max) {
		let number = Math.floor(Math.random() * max) + min
		this.set_x = number
	}
	checkNumber(input){
		switch(true){
			case input<this.get_x():
			console.log('Plus grand')
			break;
			case input>this.get_x():
			console.log('Plus petit')
			break;
			default:
			console.log('C\'est gagné')
			break;
		}
	}
	substract(){
		return this.life--;
	}
}

let mystery_one = new Mystery()