console.log ('333 conectando....') // estos 333 son para identificar que son mis console log

    document.addEventListener('DOMContentLoaded', () => {
    loadData(city = null)
    })

    const loadData = async (city) => {
        if (!city) {
            city = 'new york'
        }
    }
    const url = `https://realty-in-us.p.rapidapi.com/locations/v2/auto-complete?input=${city}&limit=2`;
    const options = {
	    method: 'GET',
	    headers: {
		'x-rapidapi-key': 'Sign Up for Key',
		'x-rapidapi-host': 'realty-in-us.p.rapidapi.com'
	    }
    };
    
    try {
	    const response = await fetch (url, options);
	    const result = await response.json();
	    console.log('333 result =>', result);
    } catch (error) {
	    console.error(error);
    }