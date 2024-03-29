
// JavaScript program to check if four given points form a square or not.

// A utility function to find square of distance
// from point 'p' to point 'q'
function distSq( p, q){
	return (p.x - q.x) * (p.x - q.x) + (p.y - q.y) * (p.y - q.y);
}

// This function returns true if (p1, p2, p3, p4) form a
// square, otherwise false
function isSquare(p1, p2, p3, p4){
	let d2 = distSq(p1, p2); // from p1 to p2
	let d3 = distSq(p1, p3); // from p1 to p3
	let d4 = distSq(p1, p4); // from p1 to p4

	if (d2 == 0 || d3 == 0 || d4 == 0)
		return false;

	// If lengths if (p1, p2) and (p1, p3) are same, then
	// following conditions must met to form a square.
	// 1) Square of length of (p1, p4) is same as twice
	// the square of (p1, p2)
	// 2) Square of length of (p2, p3) is same
	// as twice the square of (p2, p4)

	if (d2 == d3 && 2 * d2 == d4
		&& 2 * distSq(p2, p4) == distSq(p2, p3)) {
		return true;
	}

	// The below two cases are similar to above case
	if (d3 == d4 && 2 * d3 == d2
		&& 2 * distSq(p3, p2) == distSq(p3, p4)) {
		return true;
	}
	if (d2 == d4 && 2 * d2 == d3
		&& 2 * distSq(p2, p3) == distSq(p2, p4)) {
		return true;
	}

	return false;
}

// Driver program to test above function
let p1 = { x:20, y:10 }
let p2 = { x:10, y:20 }
let p3 = { x:20, y:20 }
let p4 = { x:10, y:10 }
isSquare(p1, p2, p3, p4) ? document.write("Yes") : document.write("No");

