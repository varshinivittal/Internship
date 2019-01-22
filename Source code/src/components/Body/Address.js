import React from 'react';

const Address = ({onHandleChange,Address,State,City,Zip}) => (

	<div className="container">
	<div className="form-group">
	<label for="inputAddress">Address</label>
	<input type="text" class="form-control" id="Address" value={Address} onChange={(e) => onHandleChange(e)} />
	</div>
	<div className="form-row">
	<div className="form-group col-md-6">
	<label for="inputCity">City</label>
	<input type="text" className="form-control" id="City" value={City} onChange={(e) => onHandleChange(e)}/>
	</div>
	<div class="form-group col-md-4">
	<label for="inputState">State</label>
	<input type="text" className="form-control" id="State" value={State} onChange={(e) => onHandleChange(e)}/>
	</div>
	<div className="form-group col-md-2">
	<label for="inputZip">Zip</label>
	<input type="text" class="form-control" id="Zip" value={Zip} onChange={(e) => onHandleChange(e)}/>
	</div>
	</div>
	<div className="form-group">
	<div className="form-check">
	</div>
	</div>
	</div>


		);
	
export default Address;

