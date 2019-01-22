import React from 'react';

const Gender = ({onHandleChange}) => (
	
	<div className="container">
	<fieldset className="form-group">
	<div className="row">
	<legend id="App-gender" className="col-form-label col-sm-2">Gender</legend>
	<div className="col-sm-10">
	<div className="form-check">
	<input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="Female" checked onChange={(e) => onHandleChange(e)} />
	<label className="form-check-label" for="gridRadios1">
	Female
	</label>
	</div>
	<div className="form-check">
	<input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="Male" onChange={(e) => onHandleChange(e)} />
	<label className="form-check-label" for="gridRadios2">
	Male
	</label>
	</div>
	</div>
	</div>
	</fieldset>			
	</div>
			);
	

export default Gender;