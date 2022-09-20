let count = 0;
let N=13;
for (let x=1; x<=N; x++){
  if (N%x==0){
    count++;
  }
  if(count==2){
    console.log("Prime number");
  }
  else{
    console.log("Not prime number");
  }
}