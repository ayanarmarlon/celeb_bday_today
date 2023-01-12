
 const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
 const d = new Date()
 const m = d.getMonth()
 const day = d.getDate()
 const month = months[m]
 const bdate = `${month} ${day}`
  
 console.log(`${month} ${day}`)

 const displayNames = document.querySelector('.actors')
 const date = document.getElementById('date')
 date.innerText = bdate
 

const url = 'https://tataymarlon-api-celebs-birthdays.onrender.com/api/celebsbirthdates'

fetch(url)
  .then(res => res.json())
  .then((data) => data.find(data =>{
    if(data.monthdate === bdate){
      console.log(data.actor)
      displayNames.innerText = data.actor
    }
  }));
