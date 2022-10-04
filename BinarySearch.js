// Program to search element using binary search method
const arr = [2,4,6,6,8,8,9,10,13,15,17,21,24,26,28,36,58,78,90];
//binary search function
//returns the element index if found otherwise -1
const binarySearch = (arr, start, end, num) => {
   const mid = start + Math.floor((end - start)/2);
   if(start <= end){
      if(arr[mid] === num){
         return mid;
      }
      if(num < arr[mid]){
         return binarySearch(arr, start, mid-1, num);
      }
      if(num > arr[mid]){
         return binarySearch(arr, mid+1, end, num);
      }
   }
   return -1;
};
console.log(binarySearch(arr, 0, arr.length-1, 13));
console.log(binarySearch(arr, 0, arr.length-1, 11));
