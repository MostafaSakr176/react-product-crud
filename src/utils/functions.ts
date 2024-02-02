
/**

Slices a text string to a maximum length
@param {string} txt - The input text string
@param {number} max - The maximum length of the sliced text (default is 50)
@returns {string} - The sliced text string 
*/

export function txtSlicer(txt:string , max:number=50){
  if (txt.length >= max) return `${txt.slice(0,max)} ...`;
  return txt;
}