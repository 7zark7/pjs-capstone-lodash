
const _ = {};

// add clamp method
_.clamp = function(number, lower, upper){
  let lowerClampedValue = Math.max(number, lower);
  let clampedValue  = Math.min(lowerClampedValue, upper);
  return clampedValue;
}

// add inRange method
_.inRange = function(number, startValue, endValue){
  let _endValue = endValue;
  let _startValue = startValue;
  if(endValue == null){
    _startValue = 0;
    _endValue = startValue;
  };

  if(startValue>endValue){
    _startValue = endValue;
    _endValue = startValue;
  }

  if(number < _startValue || number >= _endValue){
    return false
  }else{
    return true
  }
}

// add implement words method
_.words = function(string){
  return string.split(" ");
}

// add method pad
_.pad = function(string, length){
  let stringLength = string.length;
  let _length = length;
  if(length<stringLength){
    _length = stringLength;
  }
  let totalPadding = _length - stringLength;
  let beginingPadding = Math.floor(totalPadding / 2);
  let endingPadding = Math.ceil(totalPadding / 2);
  let paddedString = ' ';
  paddedString = paddedString.repeat(beginingPadding) + string + paddedString.repeat(endingPadding);
  return paddedString;
}

// add has method
_.has = function(object, key){
  let hasValue = object[key];
  if(hasValue!=null){
    hasValue = true;
  }else{
    hasValue = false;
  }
  return hasValue;
}
// add invert method
_.invert = function(object){
  let invertedObject = {};
  let key;
  let keyValue;
  var objKeys =  Object.keys(object);
  for(i=0;i<objKeys.length;i++){
    keyValue = objKeys[i];
    key = object[objKeys[i]];
    invertedObject[key] = keyValue;
  }
  return invertedObject;
}

// add findKey
_.findKey = function(object, funct){
  let returnValue = null;
  let key;
  let keyValue;
  var objKeys =  Object.keys(object);
  for(i=0;i<objKeys.length;i++){
    key = objKeys[i];
    keyValue = object[objKeys[i]];
    returnValue = funct(keyValue);
    if(returnValue === true){
      return key;
    }
  }
}
// add drop method:
_.drop = function(array, number){
  let droppedArray  = [];
  let nIterate = array.length; 
  if(!number){
    nIterate = array.length - 1;
    number = 1;
  }
  for(i=number;i<nIterate;i++){
    droppedArray.push(array[i]);
  }
  return droppedArray;
}

// add dropWhile:
_.dropWhile = function(array, funct){
  let newArray = [];
  let nIterate = array.length; 
  for(i=0;i<nIterate;i++){
    console.log(funct(array[i], i, array));
    if(funct(array[i], i, array) === false){
       newArray = array.slice(i);
       return newArray;
      break;
    }
  }
}


// Do not write or modify code below this line.
module.exports = _;