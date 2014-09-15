var wine = require('./wine')

var knn = require('./knn')


var data = wine.generateWineDataset(300)
console.log(knn.kNNEstimate(data,{rating: 95.0, age: 3.0}))
console.log(knn.kNNEstimate(data,{rating: 99.0, age: 3.0}))
console.log('predicted rating: 99, age: 5 with 5 neighbors')
console.log(knn.kNNEstimate(data,{rating: 99.0, age: 5.0}))
console.log('actual rating: 99, age: 5')
console.log(wine.winePrice(99.0,5.0))
console.log('predicted rating: 99, age: 5 , with 1 neighbor')
console.log(knn.kNNEstimate(data,{rating: 99.0, age: 5.0},2)) // k = 1, fewer neighbors

//console.log(wine.winePrice(95.0, 3.0))
//console.log(wine.winePrice(95.0,8.0))
//console.log(data)