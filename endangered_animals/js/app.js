document.addEventListener('DOMContentLoaded', () => {
  console.log( 'JavaScript loaded' );

  const newItemform = document.querySelector( '#new-item-form' );
  newItemform.addEventListener( 'submit', handleNewItemFormSubmit );

  const deleteAllButton = document.querySelector( '#delete-all' );
  deleteAllButton.addEventListener( 'click', handleDeleteAll );
})

const handleNewItemFormSubmit = function ( event ) {
  event.preventDefault();

  const animalListItem = createAnimalListItem( event.target );
  const animalList = document.querySelector( '#endangered-list' );
  animalList.appendChild( animalListItem );

  event.target.reset();
}

const createAnimalListItem = function ( form ) {
  const animalListItem = document.createElement('li');
  animalListItem.classList.add('animal-list-item');

  const name = document.createElement('h3');
  name.textContent = `Name: ${form.name.value}`;
  animalListItem.appendChild( name )

  const species = document.createElement('h4');
  species.textContent = `Species: ${form.species.value}`;
  animalListItem.appendChild( species );

  const continent = document.createElement('p');
  continent.textContent = `Continent: ${form.continent.value}`;
  animalListItem.appendChild( continent );

  const status = document.createElement('p');
  status.textContent = `Status: ${form.status.value}`;
  animalListItem.appendChild( status );

  const cuddly = document.createElement('p');
  cuddly.textContent = `Cuddly? ${form.cuddly.value}`;
  animalListItem.appendChild( cuddly );

  return animalListItem;
}

const handleDeleteAll = function ( event ) {
  const animalList = document.querySelector('#endangered-list');
  animalList.innerHTML = '';
}
