let arr=[1,2,3,4,5,6,7,8,9,10];
console.log("Printing Array",arr);
console.log("Iterating Array through using for loop...");
for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
}
console.log("Filtering Array using filter function...");
arr.filter((element)=>element%2==0).forEach((element)=>console.log(element));