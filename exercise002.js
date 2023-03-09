import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

//You'll have to grab an api key from superheroapi.com and throw it into the variable here.
const apiKey = //!REPLACE THIS COMMENT WITH YOUR API KEY
const superheroAPI = `https://superheroapi.com/api/${apiKey}/620`;

const fetchData = async (apiEndPoint) => {
	try {
		const data = await (await fetch(jsonTypicode)).json();
		const superherodata = await (await fetch(superheroAPI)).json();
		console.log(data);
    //should display Spiderman
		console.log(superherodata.name);
	} catch (error) {
		console.log(e);
	}
};

fetchData(jsonTypicode);
