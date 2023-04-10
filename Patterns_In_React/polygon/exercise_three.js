/* 
Exercise 3

Modify exercise #2 to use a class
for the "points."

Refer to the
point as a "feature" and write
the code to support changing
the definition of the feature.


Feature types can be:
Round
Square
Cross-hair

The class should have a method
to return the coordinates of a
feature.


Return the coordinates of each
of the four features.

*/


class Point {
	constructor(x, y) {
		this._x = x;
		this._y = y;
	}

	get points() {
		return [this._x, this._y]
	}

	square(width, height) {

		var coordinates = {
			p1: [0, 0],
			p2: [0, 0],
			P3: [0, 0],
			p4: [0, 0]

		}

		for (const point in coordinates) {
			if (point == 'p1') {
				// Start bottom left of square
				coordinates[point] = [(this._x - width / 2), (this._y - height / 2)]
			}
			else if (point == 'p2') {
				// Bottorm right
				coordinates[point] = [(this._x + width / 2), (this._y - height / 2)]
			} else if (point == 'p3') {
				// Top right 
				coordinates[point] = [(this._x + width / 2), (this._y + height / 2)]
			} else if (point == 'p4') {
				// Top left
				coordinates[point] = [(this._x - width / 2), (this._y + height / 2)]
			}

		}

		return coordinates

	}
}

// Create new instance
var origin = new Point(0, 0)

// Showing what origin is
console.log(origin)

// Getter to show origin points
console.log(origin.points)


// Feature for displaying square coordinates.
console.log(origin.square(4, 4))

