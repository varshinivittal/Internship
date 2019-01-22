import React from 'react';

const Credentials = ({onHandleChange,FirstName,LastName,Email,Password}) => (
	
	<div className="container">
	<form>
	<div className="row">
	<div className="col">
	<input type="text" id="FirstName" name="FirstName" value={FirstName}  className="form-control" placeHolder="First name" onChange={(e) => onHandleChange(e)} />
	</div>
	<div className="col">
	<input type="text" id="LastName" class="form-control" placeHolder="Last name" value={LastName} onChange={(e) => onHandleChange(e)} />
	</div>
	</div>
	
	<div className="input-group">
	<i className="material-icons email">email</i>
	<input id="email" type="text" className="form-control" id="Email" placeHolder="Email" value={Email} onChange={(e) => onHandleChange(e)} />
	</div>
	<div className="input-group">
	<i className="material-icons lock">lock</i>
	<input id="password" type="password" className="form-control" id="Password" placeHolder="Password" value={Password} onChange={(e) => onHandleChange(e)} />
	</div>
	</form>
	</div>

	);


export default Credentials;