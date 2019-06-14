console.log("before");
console.log([84758689,1,5,2,4,3]);
console.log("after");
console.log(sort([84758689,1,5,2,4,3]));
function sort (arr){
  var holder = 0;
  var end = 0;
  for(var i=0; i<=arr.length-1; i++){
    for(var j=arr.length-1; j>=end; j--){
       if(arr[j]<arr[j-1]){
        holder=arr[j-1];
        arr[j-1]=arr[j];
        arr[j]=holder;
        console.log(arr);;
      }
    }
    end++;
  }
  return arr;
}
