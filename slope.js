x1 = 10
x2 = 12

m = 1/2
b = 0.3

y1 = m * x1 + b
y2 = m * x2 + b

if (m > 0) {
	console.log("Things are trending up!")
} else if (m < 0) {
	console.log("Things are trending down :(")
} else {
	console.log("Slope is neutral.")
}