var ValueAccumulator = function(){
  var values = [];
  var accumulate = function(obj){
    if (obj){
      values.push(obj);
      return values;
    }else
    {
      return values;
    }
  };
  return accumulate;
}


var accumulator = ValueAccumulator();
var obj1 = {name: 'olo'};
var obj2 = {name: 'kolo'};

accumulator(obj1);
accumulator(obj2);

console.log(accumulator());