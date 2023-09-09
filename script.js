async function fetchData() {
    const url = 'https://quotes15.p.rapidapi.com/quotes/random/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fd1e1d2c59mshf7c280b0aa0bb74p1420dajsn843dea00ec2c',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};


	const res = await fetch(url, options);
	const result = await res.json();
	console.log(result);


document.getElementById("quotes").innerHTML = result.content
}

fetchData();