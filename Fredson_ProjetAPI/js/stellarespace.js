
//Methode Fetch

fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
.then((response)=> {
    return response.json();
})
.then((json) => {
    console.log(json);
});
