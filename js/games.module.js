import { Ui } from "./ui.module.js";
import { Details } from "./details.module.js";


export class Games {
    constructor(){
        this.getGames('mmorpg')
        this.getCategory()
    }
    async  getGames (category){
        document.querySelector('.layer').classList.remove('d-none')
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
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
       
            let ui =new Ui()
        
            ui.display(result)
            this.getId()
            document.querySelector('.layer').classList.add('d-none')
        } catch (error) {
            console.error(error);
        }
        }

         getCategory(){
            const navItems=document.querySelectorAll('.nav-item')
            navItems.forEach((item)=>{
                item.addEventListener('click',(e)=>{
                    this.getGames(e.target.innerText) 
                    this.removeActive()
                    item.firstElementChild.classList.add('active')
                })
            })
        }

        removeActive(){
            const navLinks=document.querySelectorAll('.nav-link')
            navLinks.forEach((item)=>{
                item.classList.remove('active')
            })
        }


        getId (){
            document.querySelectorAll('.card').forEach((item)=>{
                item.addEventListener('click',()=>{
                    const id=item.getAttribute("data-id")
                    let gameDetails=new Details()
                    gameDetails.getDetails(id)
                })
            })
           
        }

}
