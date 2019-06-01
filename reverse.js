var data = [1, 2, 3, 4, 5, 6];
var rdata = [];

i = 0; 
while (i <= data.length){
    rdata[i] = data[data.length - i]
    i++
}

console.log(rdata)