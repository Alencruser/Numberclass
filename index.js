class Mystery {
	x=input_one
	life=input_two
	checkNumber(input){
		switch(input){
			case <x:
			console.log('Plus grand')
			break;
			case >x:
			console.log('Plus petit')
			break;
		}
		if (input==x) {
			console.log('C\'est gagné')
		}
	}
	substract(){
		return life--;
	}
}
let mystery_one = new Mystery()