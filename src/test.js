console.log(1);

setTimeout(function(){
  console.log(2);
}, 0);


var res = new Promise((resolve, reject) =>{  
    console.log(3)
    resolve(6)})
    .then(function(value){
    console.log(4);
    return value
    });

res.then(function(value){
  console.log(value);
});

console.log(5);

 