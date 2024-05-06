import './body.css';
const $ = require('jquery');
const _ = require('lodash');

$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"><p>');

const updateCounter = () => {
	let count = $('#count').html() || 0;
	$('button').on('click', () => {
		count++;
		$('#count').html(`${count} clicks on the button`);
	});
};

_.debounce(updateCounter, 500);
updateCounter();