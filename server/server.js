const mongoose = require('mongoose');

//define which Promise type to use - the ES6 one 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

let Todo = mongoose.model('Todo', {
	text: {
		type: String
	},
	completed: {
		type: Boolean
	},
	completedAt: {
		type: Number
	}
});

let newTodo = new Todo({
	text: 'Cook dinner'
});

newTodo.save().then((doc) => {
	console.log("Saved todo", doc);
}, (err) => {
	console.log('Unable to save Todo');
});

let otherTodo = new Todo({
	text: 'Learn NodeJS',
	completed: true,
	completedAt: 123
});

otherTodo.save().then((doc) => {
	console.log("Saved todo", JSON.stringify(doc, null, 2));
}, (err) => {
	console.log('Unable to save Todo');
});