import React from 'react';

const MyHeader = () => (
	<div className="container.fluid">
	<div className="App-header">
	<h1>Hello! Lets sign you up..</h1>
	</div>

	<div className="App-navbar">
	<nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
	<a className="navbar-brand" href="#">Menu</a>
	<form className="form-inline">
	<button type="button" className="btn btn-success mr-1">Sign up</button>
	<button className="btn btn-sm btn-outline-secondary" type="button">About</button>
	</form>
	</nav>
	</div>
	</div>

	);
	
export default MyHeader;