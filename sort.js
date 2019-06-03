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
console.log("before");
console.log([84758689,1,5,2,4,3]);
console.log("after");
console.log(sort([84758689,1,5,2,4,3]));
