
//BaseURL for the api
let baseURL = `https://www.boredapi.com/api/activity`


//Grab our btn we want to listen for
let randomBTN = document.getElementById("random")


//Where we will display the results
let results = document.getElementById("results")

//Add a event listening to the random button
randomBTN.addEventListener("click", ()=> {
//When button is clicked run the call back function which makes request to the api

    fetch(baseURL) // make the request to endpoint
    .then(response => {
      //console.log(response)
      return response.json()
    }) // take the response and parse 
    .then(data => {
      console.log(data)
    let activity = data.activity
    let type = data.type
    let price = data.price

    results.innerHTML = `${activity} <br> ${type} <br> ${price}`

    }) // Do something with the data
    .catch() // If something goes wrong catch it
})



//Grab our button for selecting activity
let activityBTN = document.getElementById("activity")



activityBTN.addEventListener("click", ()=> {
    //Grab the current input selection and value on click
    let type = document.querySelector('input[name="type"]:checked').value;
    console.log(type)
  //concatinating our endpoint having it dynamic for the user to select the type  
 let endpoint = `${baseURL}?type=${type}`
    fetch(endpoint) // make the request to endpoint
    .then(response => {
      //console.log(response)
      return response.json()
    }) // take the response and parse 
    .then(data => {
      console.log(data)
      let activity = data.activity
      let type = data.type
      let price = data.price
  
      results.innerHTML = `${activity} <br> ${type} <br> ${price}`
    }) // Do something with the data
    .catch() // If something goes wrong catch it


})