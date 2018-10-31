import React, { Component } from 'react';
import Book from './Book'

function Turn({author, books}){
return (
	<div className="row turn"
	style={{backgroundColor: "white"}}>
		<div className="col-4 offset-1">
			<img src={author.imageUrl} className="authorimage"
			alt="Author"/>
		</div>
		<div className="col-6">
			{books.map((title)=> <Book title={title} key={title}/>)}
		</div>
	</div>
	);
}

export default Turn;