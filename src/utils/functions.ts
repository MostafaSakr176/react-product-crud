
/**

Slices a text string to a maximum length
@param {string} txt - The input text string
@param {number} max - The maximum length of the sliced text (default is 50)
@returns {string} - The sliced text string 
*/

export function txtSlicer(txt:string , max:number=40){
  if (txt.length >= max) return `${txt.slice(0,max)} ...`;
  return txt;
}

export function uId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export function getDate(){
  var currentdate = new Date(); 
  var datetime = "added at : " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear();
      
                return datetime;
}