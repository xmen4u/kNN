 function winePrice(rating, age){
	var peak_age = rating - 50,
		price

	price = rating / 2

	if (age > peak_age){
		// past it's peak, goes bad in 5 years
		price = price * (5 - (age - peak_age) )
	}// if
	else{
		// increases to 5x original value as it 
		// approaches it's peak
		price = price * (5 * ( (age + 1) / peak_age))

	}// else

	if (price < 0 ){
		price = 0
	}// if
	return price
}

function generateWineDataset(num_of_elements){
	var rows = [],
		price,
		age,
		rating,
		i

	for(i = 0; i < num_of_elements; i++){

		// creating a random age and rating
		rating = Math.random() * 50 + 50
		age = Math.random() * 50

		// get reference price
		price = winePrice(rating, age)

		// add some noise
		price = price * (Math.random() * 0.4 + 0.8)

		// add to dataset
		rows.push({rating: rating, age: age, price: price})
	}// for
	return rows
}

module.exports = {

					winePrice: winePrice,
					generateWineDataset: generateWineDataset
				}