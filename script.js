function firstWord(s) {
  // your code here
	s=s.trim();
	let sidx=s.indexOf(' ');
	if(sidx==-1) return s
	return s.substring(0,sidx);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
