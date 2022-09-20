const getJokes = async () => {
    try {
        const res = await fetch("https://api.chucknorris.io/jokes/random");
        const data = await res.json();
        const myJokes = document.querySelector('#myJokes');
        myJokes.innerHTML = data.value;
    } catch (error) {
        
    }
}

window.addEventListener('load',() => {
    getJokes();
})