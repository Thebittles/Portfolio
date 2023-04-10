//Write a function that takes as input the width(x) and height (y) of a "box" and an "offset"

// Return the coordinates of each of the four points by applying the offset to each  corner uniformly relative to the center of the "box" 
// As shown in the graphic 


// Width(x) - 6 and Height(y) - 7
// Points on the first one (x,y)
// A - (0,0) B - (6,0) C - (6,7) D (0,7)

// Offset - 1
// Offset Points 
//
// A - (-1, -1) 
//B - (7, -1) 
//C -(7,8)
// D (-1, 8)

function poly_graph(width, height, offset) {
    // Create object with coordinates
    var coordinates = {
        p1: [0, 0],
        p2: [0, 0],
        p3: [0, 0],
        p4: [0, 0],
    }

    // Use the keys in object to assign correct coordinates points based on width and height
    // Assumes you are always starting at 0,0 to draw the square
    for (const point in coordinates) {
        //console.log(typeof point);
        if (point == 'p2') {
            coordinates[point] = [width, 0]
        } else if (point == 'p3') {
            coordinates[point] = [width, height]
        } else if (point == 'p4') {
            coordinates[point] = [0, height]
        }

    }

    // Copy the original object to a new object to store updated coordinates for offset
    const offset_coordinates = JSON.parse(JSON.stringify(coordinates));

    // Need to check if value is + or - to adjust coordinate point accordingly
    for (const point in offset_coordinates) {
        if (offset_coordinates[point][0] > 0) {
            offset_coordinates[point][0] += offset
        }
        if (offset_coordinates[point][0] <= 0) {
            offset_coordinates[point][0] -= offset
        }
        if (offset_coordinates[point][1] <= 0) {
            offset_coordinates[point][1] -= offset
        }
        if (offset_coordinates[point][1] > 0) {
            offset_coordinates[point][1] += offset
        }
    }



    console.log("Original Coordinates", coordinates)
    console.log("New Coordinates", offset_coordinates)

}


poly_graph(6, 7, 1)
poly_graph(10, 5, 2)