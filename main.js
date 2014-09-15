var wine = require('./wine')

var knn = require('./knn')

var data = wine.generateWineDataset2(300)

// 7 - rescaling / normalization
// rating,age,aisle,bottlesize
var rescaled_data = knn.rescale(data,{rating: 10, age: 10, aisle: 0, bottle_size: 0.5})
console.log(knn.crossValidate(knn3,rescaled_data))

console.log(knn.crossValidate(knn.weightedkNN,rescaled_data))

// 6 - new dataset with extra variables
// console.log(knn.crossValidate(knn3,data))
// console.log(knn.crossValidate(knn.weightedkNN,data))

// 5 - cross validation
// console.log(knn.crossValidate(knn.kNNEstimate,data))

// // 254.068
function knn3(d,v){
	return knn.kNNEstimate(d,v,3)
}
// console.log(knn.crossValidate(knn3,data))
function knn1(d,v){
	return knn.kNNEstimate(d,v,1)
}
// console.log(knn.crossValidate(knn1,data))

// // weighted kNN cross-Validate
// console.log(knn.crossValidate(knn.weightedkNN,data))
function kNNInverse(d,v){
	// k = null => default value
	return knn.weightedkNN(d,v,null,knn.inverseWeight)
}
// console.log(knn.crossValidate(kNNInverse,data))


// 4 - kNN vs. weighted kNN
// console.log(knn.kNNEstimate(data,{rating: 95.0, age: 5.0}))
// console.log(knn.weightedkNN(data,{rating: 95.0, age: 5.0}))


// 3 - different weight functions
//console.log(knn.subtractWeight(0.1))
//console.log(knn.inverseWeight(0.1))
//console.log(knn.gaussianWeight(0.1))
//console.log(knn.gaussianWeight(1.0))
//console.log(knn.subtractWeight(1))
//console.log(knn.inverseWeight(1))
//console.log(knn.gaussianWeight(3.0))

// 2 - kNN prediction vs. actual 
// console.log(knn.kNNEstimate(data,{rating: 95.0, age: 3.0}))
// console.log(knn.kNNEstimate(data,{rating: 99.0, age: 3.0}))
// console.log('predicted rating: 99, age: 5 with 5 neighbors')
// console.log(knn.kNNEstimate(data,{rating: 99.0, age: 5.0}))
// console.log('actual rating: 99, age: 5')
// console.log(wine.winePrice(99.0,5.0))
// console.log('predicted rating: 99, age: 5 , with 1 neighbor')
// console.log(knn.kNNEstimate(data,{rating: 99.0, age: 5.0},1)) // k = 1, fewer neighbors


// 1 - verify random data 
//console.log(wine.winePrice(95.0, 3.0))
//console.log(wine.winePrice(95.0,8.0))
//console.log(data)