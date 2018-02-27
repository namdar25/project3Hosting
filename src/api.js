
//Api calls collected in this file

export function getRovers(){
	var url = 'https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=CIVXlQB6L717uhHZp0GLihzu9rU7gomgBrxfGXdw';
	console.log(url);
	return fetch(url);
};
export function getRoverPictures(rover, sol, camera){
	var url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/'+ rover +'/photos?sol=' + sol + '&camera=' + camera + '&api_key=CIVXlQB6L717uhHZp0GLihzu9rU7gomgBrxfGXdw';
	console.log(url);
	return fetch(url);
};