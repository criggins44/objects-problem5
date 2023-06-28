//Object Problem 5

/*
Write a JavaScript function to sort the following array of objects by title value.
Hint: Read about the JavaScript sort method.
*/
const arrayOfBooks = [ 

   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},

   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},

   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}

   ];

const arrayOfSortedObjects = arrayOfBooks.sort(function(a, b) {
//variable that stores the sorted array of objects
	
	if (a.title.toLowerCase() < b.title.toLowerCase()){return -1};
/*
if the title property of the object smaller than the one after it, 
it is placed earlier
*/

	if(a.title.toLowerCase() > b.title.toLowerCase()){return 1};
//if the title property is larger than the one after it, it is placed later
	
	return 0;
})

const sortTheObjects = arrayOfSortedObjects => {

	console.log(arrayOfSortedObjects);
}
sortTheObjects(arrayOfSortedObjects);