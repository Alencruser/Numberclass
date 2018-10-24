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
			case ==x:
			console.log('C\'est gagné')
			break;
		}
	}
	substract(){
		return life--;
	}
}
let mystery_one = new Mystery()