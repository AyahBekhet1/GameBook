import { Ui } from "./ui.module.js";

export class Details{
	constructor (){}

	async  getDetails(idGames){
		document.querySelector('.layer').classList.remove('d-none')
		const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`;
      const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd2d7641124msh810d8e47df34325p14a4b4jsn7b94914f707e',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

	
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		

		let ui = new Ui()
		ui.displayDetails(result)

		document.querySelector('.games').classList.add('d-none')
		document.querySelector('.details').classList.remove('d-none')
		this.closeDetails()
		document.querySelector('.layer').classList.add('d-none')
	} catch (error) {
		console.error(error);
	}
	}

	closeDetails (){
		document.querySelector(".close-btn").addEventListener('click',()=>{
			document.querySelector('.games').classList.remove('d-none')
			document.querySelector('.details').classList.add('d-none')
		})
	}
}


