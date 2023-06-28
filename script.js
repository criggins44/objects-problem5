//Object Problem 5

/*
Write a JavaScript function to sort the following array of objects by title value.

Hint: Read about the JavaScript sort method.

Example array: 
*/
const arrayOfBooks = [ 

   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},

   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},

   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}

   ];
const arrayOfSortedObjects = arrayOfBooks.sort(function(a, b) {
	if (a.title.toLowerCase() < b.title.toLowerCase()){return -1};
	if(a.title.toLowerCase() > b.title.toLowerCase()){return 1};
	return 0;
})
//console.log(arrayOfSortedObjects)

const sortTheObjects = arrayOfSortedObjects => {

	console.log(arrayOfSortedObjects);
}
sortTheObjects(arrayOfSortedObjects);