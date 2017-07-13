import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doTheSearch'
})
export class DoTheSearchPipe implements PipeTransform {
//value is equal to left side: foodArray, searchTerm is right side of pipe
  transform(value: any, searchTerm: string): any {
    searchTerm = searchTerm.toLowerCase();

//a filter returns an array that is a filtered version of the starting array, only if the oneFood.name matches the searchTerm will it be included in the filtered array.
    const matchedArray = value.filter((oneFood) =>{
      let foodName = oneFood.name.toLowerCase();
      //the line below is a boolean, if its true then auto pushes to the new filtered array else doesn't.
      return foodName.includes(searchTerm);
    });
    return matchedArray;
  }

}
// The other way to do it using a foreach loop
// let matchedArray = [];
// value.forEach((oneFood) => {
//   let foodName = oneFood.name.toLowerCase();
//   if (foodName.includes(searchTerm)) {
//     matchedArray.push(oneFood);
//   }
// });
// return matchedArray;
