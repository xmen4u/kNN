var distance_temp = require('./distance'),
	Distance = new distance_temp(),
	_ = require('underscore')//('lodash')


// building a distance list
function getDistances(data, vec){
	var distance_list = [],
		i,
		len = data.length,
		vec2

	for(i = 0; i < len; i++){
		vec2 = data[i]
		distance_list.push({index: i, distance: Distance.euclidean([vec2.rating,vec2.age],[vec.rating,vec.age])})
	}// for
	distance_list = _.sortBy(distance_list,'distance')
	return distance_list
}

// basic kNN - not weighted
function kNNEstimate(data, vec, k){
	var distance_list,
		avg = 0.0,
		index, // distance_list's item has an index property!
		i

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

// weighted kNN 
function weightedkNN(data, vec, k, weight_func){
	var distances_list = [],
		avg = 0.0,
		total_weight = 0.0,
		i,
		index, // distance_list's item has an index property!
		weight,
		distance

	k              = k || 5
	weight_func    = weight_func || gaussianWeight
	
	// get distances
	distances_list = getDistances(data, vec)

	// get weighted average
	for( i =0; i < k; i++){
		distance = distances_list[i].distance
		index = distances_list[i].index
		weight = weight_func(distance)
		avg += weight * data[index].price
		total_weight += weight
	}// for

	avg /= total_weight
	return avg
}

/* converting Distance to weight section 
	wrote 3 options:
	(1) a 1/x , x > 0 function
	(2) linear Subrtion function 
	(3) Gaussian function
*/
// converting Distance to Weight 
// it basically looks like abs (1/x), x > 0
function inverseWeight(distance, num, constant){
	num = num || 1.0
	constant = constant || 0.1

	return num / (distance + constant)
}

// subtracting the distance from a constant
// overcomes the potential issue of overweighting close items
// weight falls between 0..1, it's possible that there will be nothing
// close enough to be considered a close neighbor
// for some items the algorithm won't make a prediction at all
function subtractWeight(distance, constant){
	constant = constant || 1.0

	return distance > constant? 0 : constant - distance
}

// the weight is 1 when distance is 0 and the weight declines
// as the distance increases. Unlike the subtraction, weight never falls all the way to 0
// always possible to make a prediction
function gaussianWeight(distance, sigma){
	sigma = sigma || 10.0
	return Math.exp( - (distance * distance * 10 * 10) /  (2 * sigma * sigma))
}


module.exports = {
	getDistances: getDistances,
	kNNEstimate: kNNEstimate,
	weightedkNN: weightedkNN,
	// weight functions
	inverseWeight: inverseWeight,
	subtractWeight: subtractWeight,
	gaussianWeight: gaussianWeight
}
