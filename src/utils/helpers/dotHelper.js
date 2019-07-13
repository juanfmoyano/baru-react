export function createDotsArray(arraySize) {
  const dotsArray = [...new Array(arraySize)];
  for(let arrayPosition in dotsArray){
      dotsArray[arrayPosition] = parseInt(arrayPosition);
  }
  return dotsArray;
}
