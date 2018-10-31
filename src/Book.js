import React, {Component} from 'react';

function Book({title}){
console.log(title);
return (
	<div className="answer">
	<h4>{title}</h4>
	</div>
	);
}

export default Book;