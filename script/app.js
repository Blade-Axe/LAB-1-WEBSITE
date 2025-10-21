if(document.getElementById("date")){
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
}

let hamburger = document.getElementById("hamburger");

hamburger.addEventListener('click', function(){ 
    document.querySelector('nav ul').classList.toggle('shownav');
});



if(document.getElementById("myForm")){
    let myForm = document.getElementById("myForm");
    let myName = document.getElementById("name");
    let myEmail = document.getElementById("email");
    let mySubmission = document.getElementById("subject");
    let confirmMessage = document.getElementById("confirmMessage");

    myForm.addEventListener("submit", (e)=>{
        e.preventDefault();   
        confirmMessage.textContent=`Hi ${myName.value}, your message has been received, we will contact you at ${myEmail.value}`;
    });
}

