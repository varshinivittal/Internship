import React from 'react';

const MyFooter = ({Reset,Click,Submitted,getData}) => (
	
	<div className="container">
	<div className="btn-group">
	<button type="button" className="btn btn-danger" onClick={Reset}>Reset</button>
	</div>

	<a href="#" className="btn btn-success btn-lg">
	<span className="glyphicon glyphicon-print"></span> Print 
	</a>
	<button type="button" className="btn btn-primary" onClick={Submitted}>Submit</button>
	</div>
	
	);

export default MyFooter;


