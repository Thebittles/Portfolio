
/* 
Modify exercise #1 to allow for definition of an origin to use as then center point of the box

The default origin will be (0,0) as shown
Changing the origin will result in moving the center of the "box"
to the defined location


Return the cooridinates of each of the four point
*/

//Example coordinates
// Width - 8
// Height - 8
// Origin - (0,0)


//  y = mx + b -  slope/length of line?
// Get center of square
// xCenter = (x1 + x2 ) / 2
// yCenter = (y1 + y2) / 2

// If you know width &  height...
// Center x = x + 1/2 of width
// Center y = y + 1/2 of height

//  Lets say origin (1,1)




function poly_graph(width, height, origin) {
    // Create object with coordinates
    var coordinates = {
        p1: [0, 0],
        p2: [0, 0],
        p3: [0, 0],
        p4: [0, 0],
    }




    for (const point in coordinates) {
        if (point == 'p1') {
            // Start bottom left of square
            coordinates[point] = [(origin[0] - width / 2 ), (origin[1] - height / 2)] 
        }
        else if(point == 'p2') {
             // Bottorm right
            coordinates[point] = [(origin[0] + width / 2 ), (origin[1] - height / 2)]
        } else if (point == 'p3') {
            // Top right 
            coordinates[point] = [(origin[0] + width / 2 ), (origin[1] + height / 2)]
        } else if (point == 'p4') {
            // Top left
            coordinates[point] = [(origin[0] - width / 2 ), (origin[1] + height / 2)]
        }

    }

    console.log("Original Coordinates", coordinates)
    return coordinates 
}


poly_graph(8, 6, [1, 1])
poly_graph(8, 8, [0,0])
poly_graph(8, 8, [1,1])
poly_graph(8, 8, [-1,-1])