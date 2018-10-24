class Mystery 
{
	constructor(attempt,min,max)
	{
		this._attempt = attempt
		this._min = min
		this._max = max
		this._myst = Math.floor(Math.random() * (max-min+1) + min)
	}

	checkNumber(input)
	{
		if(input==this.myst)
		{
			return "C'est gagné !"
		}
		else if (input<this.myst)
		{
			this.attempt--
			return this.attempt==0?"Perdu !":"Plus grand !"
		}
		else
		{
			this.attempt--
			return this.attempt==0?"Perdu !":"Plus petit !"
	}

	set attempt  (input)  { this._attempt = input }
    get attempt  ()       { return this._attempt }
    set min (input) { this._min = input}
    get min ()       { return this._min }
    set max (input) { this._max = input }
    get max ()       { return this._max }
    get myst ()       { return this._myst }
}

mystery = new Mystery (3,0,10);

console.log(mystery.myst)
for(i=0;i<11;i++)
{
	console.log(mystery.checkNumber(i))
}
