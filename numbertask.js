const arr = [2,4,7,12,6];
let i;
let x = arr[2];
for(i=0;i<arr.length;i++){
    if(arr[i] > x){
        x = arr[i];
    }
}
document.write(x);