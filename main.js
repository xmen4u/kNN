var wine = require('./wine')

var knn = require('./knn')

var data = wine.generateWineDataset(300)

//4
// console.log(knn.kNNEstimate(data,{rating: 95.0, age: 5.0}))
// console.log(knn.weightedkNN(data,{rating: 95.0, age: 5.0}))


//3 
//console.log(knn.subtractWeight(0.1))
//console.log(knn.inverseWeight(0.1))
//console.log(knn.gaussianWeight(0.1))
//console.log(knn.gaussianWeight(1.0))
//console.log(knn.subtractWeight(1))
//console.log(knn.inverseWeight(1))
//console.log(knn.gaussianWeight(3.0))

//2
// console.log(knn.kNNEstimate(data,{rating: 95.0, age: 3.0}))
// console.log(knn.kNNEstimate(data,{rating: 99.0, age: 3.0}))
// console.log('predicted rating: 99, age: 5 with 5 neighbors')
// console.log(knn.kNNEstimate(data,{rating: 99.0, age: 5.0}))
// console.log('actual rating: 99, age: 5')
// console.log(wine.winePrice(99.0,5.0))
// console.log('predicted rating: 99, age: 5 , with 1 neighbor')
// console.log(knn.kNNEstimate(data,{rating: 99.0, age: 5.0},1)) // k = 1, fewer neighbors


//1
//console.log(wine.winePrice(95.0, 3.0))
//console.log(wine.winePrice(95.0,8.0))
//console.log(data)