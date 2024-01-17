//displayData
//displayDetails

//class have two function(displayData , displayDetails)


export class Ui{

	display(data){
		let cartona=``

		for (let i = 0; i < data.length; i++) {
			cartona +=`
			<div class=" cards col-md-6 col-lg-4 col-xl-3 text-white">
                        <div class="card bg-transparent h-100" data-id="${data[i].id}">
                            <img src="${data[i].thumbnail}" class="card-img-top" alt="...">
                            <div class="card-body ">
                              <div class="my-1 d-flex justify-content-between align-items-center">
                                <h3 class="h4 ">${data[i].title}</h3>
                                 <span class="badge bg-primary p-2">free</span>
                              </div>
                              <p class="card-text small text-center opacity-50">${data[i].short_description.split(',',8)}</p>
                            </div>
                            <div class="card-footer d-flex justify-content-between small">
                              <span class="badge badge-color text-capitalize">${data[i].genre}</span>
                              <span class="badge badge-color text-capitalize">${data[i].platform}</span>
                            </div>
                        </div>
                        
                    </div>
			`
			
		}
		document.querySelector('.row').innerHTML=cartona

		
	}

	displayDetails(data){
		let cartona =``
		cartona =`
		<div class="container">
        <div class="details-header ">
          <h1 class="py-3">Details Game</h1>
          <button class="btn close-btn"><i class="fa-solid fa-x fs-5"></i></button>
        </div>
        <div class="row">
          <div class="col-md-4">
            <img src="${data.thumbnail}" class="w-100 mb-3" alt="${data.title}">
          </div>
          <div class="col-md-8">
            <div class="detail-content">
              <h3 class="h1">Title:${data.title}</h3>
              <div>
                <p>Category: <span class="badge bg-info text-black text-uppercase">${data.genre}</span> </p>
                <p>Platform: <span class="badge bg-info text-black ">${data.platform}</span> </p>
                <p>Status: <span class="badge bg-info text-black ">${data.status}</span> </p>
              </div>
              <p>${data.description}</p>
              <button class="btn btn-outline-warning"><a href="${data.game_url}" target='_blank' class="text-white text-decoration-none"> Show Game</a></button>
            </div>
            
          </div>
        </div>
      </div>
		`

		document.querySelector('.details').innerHTML=cartona
	}


}