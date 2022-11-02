const btns = document.querySelectorAll('.btn');
const storeProducts = document.querySelectorAll('.umio-products');

for (i=0; i<btns.length;i++) {
	btns[i].addEventListener('click', (e)=>{
		e.preventDefault()

		const filter = e.target.dataset.filter;
		console.log(filter);

		storeProducts.forEach((product)=>{
			if(filter === 'all'){
				product.style.display = "block";
			}
			else{
				if(product.classList.contains(filter)){
					product.style.display = "block";
				}
				else{
					product.style.display = "none";
					
				}
			}
		});

	});
	
}


const search = document.getElementById('search');
const productName = document.querySelectorAll('.umio-product-detail h2');
search.addEventListener('keyup', filterproduct);

function filterproduct(e){
	const text = e.target.value.toLowerCase();
	productName.forEach((product)=>{
		const item = product.firstChild.textContent;
		if(item.toLocaleLowerCase().lastIndexOf(text) != -1){
			product.parentElement.parentElement.style.display = "block";
		}
		else{
			product.parentElement.parentElement.style.display = "none";
		}
	});
}



// const renderText = (data) => {
// 	const main = document.getElementsByClassName("umio-products");
// 	main.innerHTML = "";
// 	data.forEach((ele) => {
// 		const text = document.createElement("p");
// 		text.innerHTML = `${ele.id}, ${ele.color}`;
// 		main.appendChild(text);
// 	});
// 	console.log(renderText);
// };


// const filterByColor = (color) => {
// 	const filteredData = products.filter((elemento) => {
// 		return elemento.color === color;
// 	});
// 	renderText(filteredData);
// };

// displayProducts();
// displayCategories();

// function displayProducts() {
// 	const container = document.getElementById('umio-products');

// 	products.forEach((product) => {
// 		const card = document.createElement('li');
// 		card.innerHTML = `<h2>${product.name}</h2>
// 			<p>${product.price}</p>
// 			<p>${product.category}</p>`;
		
// 			container.append(card);
// 	})

	
// }

// function displayCategories(){
// 	const colorArr = [];
// 	products.forEach((product)=>{
// 		if(!colorArr.includes(product.category)){
// 			colorArr.push(product.category);
// 		}
// 	});
// 	const dropdown = document.getElementById('category');

// 	colorArr.forEach((category) =>{
// 		const optionElem = document.createElement('option');
// 		optionElem.value = category;
// 		optionElem.textContent = category;

// 		dropdown.append(optionElem);
// 	})
// }

// function handleCategories(input){
// 	const category = input.value;
// 	const filteredArray = products.filter((product) => product.category === category || category === 'all');
// 	displayProducts(filteredArray);
// }
