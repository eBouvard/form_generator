const oof = function(foo) {
	console.log(foo);
}

export default function(foo) {
	console.log("FOOOOOOOOOOO");
	oof(foo);
	return foo;
} 
