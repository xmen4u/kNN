var distance_temp = require('./distance'),
	Distance = new distance_temp(),
	_ = require('underscore')//('lodash')

function getDistances(data, vec){
	var distance_list = [],
		i,
		len = data.length,
		vec2;

	for(i = 0; i < len; i++){

		vec2 = data[i]
		distance_list.push({index: i, distance: Distance.euclidean([vec2.age,vec2.price],[vec.age,vec.price])})
	}// for
	distance_list = _.sortBy(distance_list,'distance')
	return distance_list
}

function kNNEstimate(data, vec, k){
	var distance_list,
		avg = 0.0,
		i,
		index

	k = k || 5

	// get sorted distance
	distance_list = getDistances(data,vec)

	// take the average of the top K results

	for( i = 0; i < k; i++){
		index = distance_list[i].index
		avg += data[index].price
	}// for

	avg /= k
	return avg
}

/* converting Distance to weight section 
	wrote 2 options, or a 1/x , x > 0 function
	or a linear Subrtion function 
*/
// converting Distance to Weight 
// it basically looks like abs (1/x), x > 0
function invesreWieght(distance, num, constant){
	num = num || 1.0
	constant = constant || 0.1

	return num / (distance + constant)
}

// subtracting the distance from a constant
// overcomes the potential issue of overweighting close items
// weight falls between 0..1, it's possible that there will be nothing
// close enough to be considered a close neighbor
// for some items the algorithm won't make a prediction at all
function subtractWegith(distance, constant){
	constant = constant || 1.0

	return distance > constant? 0 : constant - distance
}



module.exports = {
	getDistances: getDistances,
	kNNEstimate: kNNEstimate
}
