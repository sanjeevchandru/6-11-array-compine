document.write("compine two array"+"<br>");
document.write("-----------------"+"<br>");

let arr=["hii","sanjeev"];
let arr1=["nice","to","meet","you"];
document.write("The 1st array : "+arr+"<br>");
document.write("The 2nd array : "+arr1+"<br>");
for(let i=0;i<arr1.length;i++){
    arr.push(arr1[i]);
}
document.write("compine array :" +arr+"<br><br>");

let x=[1,3,5,7,9];
let y=[2,4,6,8,10];
document.write("The 1st array : "+x+"<br>");
document.write("The 2nd array : "+y+"<br>");
for(let i=0;i<y.length;i++){
    x.push(y[i]);
}
document.write("compine array :" +x);