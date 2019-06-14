//mode fucktion
var data = [1,4,4,4,5]
console.log("before");
console.log(data);
console.log("after");
console.log(mode(data));

function sort(arr){
  var i = 0;
  var ref = 0;
  var spot = 0;
  var rdata = [];
  var max = 0;
  for (var i = 0; i < arr.length; i++) {
    if(arr[i]>max){
      max=arr[i];
    }
  }
  while (ref<max+1){
    if(i==arr.length){
      i=0;
      ref++;
    }
    if(arr[i]==ref){
      rdata[spot]=arr[i];
      spot++;
    }
    i++;
  }
  return rdata;
}

function mode(arr){
  var data = sort(arr);
  console.log(data);
  var rdata = [];
  var tally = 0;
  var spot = 0;
  var max = 0;
  var ref = 0;
  for (var i = 0; i < data.length; i++) {
    if(arr[i]>max){
      max=arr[i];
    }
  }
  for(var i = 0; i<=max; i++){
    let tally=0
    for(var spot = 0; spot<=max; spot++){
      if(data[spot]==ref){
        tally++;
      }
    }
    rdata[ref]=tally;
    tally=0;
    ref++;
  }
  console.log(rdata);
  var mode = 0;
  var modeValue = 0
  for (var i = 0; i < rdata.length; i++) {
    if(rdata[i]>modeValue){
      modeValue=rdata[i];
      mode=i-1;
    }
  }
  return mode+1;
}
