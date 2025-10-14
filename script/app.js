let myDate = new Date();
let todaysDate = myDate.toDateString();
document.querySelector('#date').innerHTML = 'Today is ' + todaysDate;

const dateClass = document.getElementById("date");
dateClass.classList.add("date");

let newPara = document.createElement('p');
newPara.textContent = "Hello GWNYS members!";

let sectionElement = document.querySelector('section');
sectionElement.parentNode.insertBefore(newPara, sectionElement);
newPara.classList.add('newpara')





let newList = document.createElement('li');
newList.classList.add("newList")
newList.textContent = "Helps improve blood circulation"


let articleElement = document.querySelector('main article ul');
articleElement.insertBefore(newList, articleElement.lastElementChild);
articleElement.removeChild(articleElement.lastElementChild)