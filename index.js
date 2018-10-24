class Mystery {
	x=input_one
	life=input_two
	checkNumber(input){
		switch(true){
			case input<x:
			console.log('Plus grand')
			break;
			case input>x:
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
let mystery_one = new Mystery()