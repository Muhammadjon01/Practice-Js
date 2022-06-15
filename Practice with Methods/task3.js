let country = prompt("Enter the name if country");
let area = +prompt("Enter the area of " + `${country}`);

let wroldArea = 148940000;

let findPer;

if (area == "") {
  alert(`Enter the area of ${country}`);
} else {
  findPer = (area * 100) / wroldArea;

  alert(`${country}  is ${findPer}% of the total world's landmass`);
}