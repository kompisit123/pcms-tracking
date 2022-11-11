import React, { useState, useEffect } from "react";

// import { forwardRef } from "react";

import MaterialTable , { MTableToolbar }  from "material-table";

import { columns } from "./column";
import { tableIcons } from "./icon";
import { option } from "./option";
import { statement } from "./statement";
import { action } from "./action";
import { edit } from "./edit";
import { panel } from "./expandpanel";
import { overide } from "./overide";

const TableManager = () => {

   	const [data, setData] = useState();

	const url = "http://localhost:1337/api/stocks";

	useEffect(() => {
		getClient();
	}, []);

	const getClient = () => {
		fetch(url)
			.then((resp) => resp.json())
			.then((resp) => {
				let ccc= resp.data.map(lsubstation => lsubstation.attributes); 
				console.log(ccc)	
				setData(ccc)		
			})
	};

  const tableRef = React.createRef();

  return (
      <>
        <MaterialTable  
          title="PCMS Tracking"
          columns={columns}
          data={data} // data for render
		  actions={ action}
		  editable={edit}
          icons={tableIcons}
		  tableRef={tableRef}
		  options={ option }
		  //detailPanel={ panel}
		  localization= { statement }  //overide text
		  components={overide}
        />
      </>
  );
};

export default TableManager;

// import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
// import DateFnsUtils from '@date-io/date-fns';

// export default function TableManager() {
// 	const [data, setData] = useState();

// 	const url = "http://localhost:1337/api/stocks";

// 	useEffect(() => {
// 		getClient();
// 	}, []);

// 	const getClient = () => {
// 		fetch(url)
// 			.then((resp) => resp.json())
// 			.then((resp) => {
// 				let ccc= resp.data.map(lsubstation => lsubstation.attributes); 
// 				console.log(ccc)	
// 				setData(ccc)		
// 			})
// 	};

// 	const createRow = (
// 		newRow
// 		// quantity,
// 		// unit,
// 		// budget,
// 		// status,
// 		// remark,
// 		// owner,
// 		// year_budget,
// 		// bid_no,
// 		// list_no,
// 		// item_no,
// 		// item_name,
// 		// date_contract
// 	) => {

// 		var myHeaders = new Headers();
// 		myHeaders.append("Authorization", "Bearer cff0c3992591b70c40eab298c01cb784593fd949f9f01a3e1af4c0f184ccb3a7e496c545c15c11b883cb866bf662235a8b4dfd61a1734922dacfe1b0133b54eb07574016474eb795d0e58d700675967de05fb015b5026bad55e71690395aa35aaa519fb07e0d4268a87899af6609b68e0496efc66faa1396fd99b7f3380cc986");
// 		myHeaders.append("Content-Type", "application/json");

// 		var raw = JSON.stringify({
// 		"data": {
// 			"quantity": newRow.quantity,
//             "unit": newRow.unit,
//             "budget": newRow.budget,
//             "status": newRow.status,
//             "remark": newRow.remark,
//             "owner": newRow.owner,
//             "year_budget": newRow.year_budget,
//             "detail_plan": newRow.detail_plan,
//             "bid_no": newRow.bid_no,
//             "list_no": newRow.list_no,
//             "item_no": newRow.item_no,
//             "item_name": newRow.item_name,
//             "date_contract": newRow.date_contract
// 		}
// 		});

// 		console.log(raw)

// 		var requestOptions = {
// 		method: 'POST',
// 		headers: myHeaders,
// 		body: raw,
// 		redirect: 'follow'
// 		};

// 		fetch("http://localhost:1337/api/stocks", requestOptions)
// 		.then(response => response.text())
// 		.then(result => console.log(result))
// 		.catch(error => console.log('error', error));	
// 	};

// 	const deleteRow = (id) => {

// 		var myHeaders = new Headers();
// 		myHeaders.append("Authorization", "Bearer cff0c3992591b70c40eab298c01cb784593fd949f9f01a3e1af4c0f184ccb3a7e496c545c15c11b883cb866bf662235a8b4dfd61a1734922dacfe1b0133b54eb07574016474eb795d0e58d700675967de05fb015b5026bad55e71690395aa35aaa519fb07e0d4268a87899af6609b68e0496efc66faa1396fd99b7f3380cc986");

// 		var requestOptions = {
// 		method: 'DELETE',
// 		headers: myHeaders,
// 		redirect: 'follow'
// 		};
        
// 		console.log("Heyyyyyyyyyyyy"+id)
// 		fetch(`http://localhost:1337/api/stocks/${id}`, requestOptions)
// 		.then(response => response.text())
// 		.then(result => console.log(result))
// 		.catch(error => console.log('error', error));

// 	};


// 	const tableRef = React.createRef();

// 	return (
// 		<>
		
// 			<div>
// 			<h2>ข้อมูลวางแผนพัสดุ</h2>
// 			<MaterialTable

// 				components={{
// 					//overide searchbar
// 					Toolbar: props => (
// 						<div style={{ 
// 							backgroundColor: '#FFFFFF' ,
// 							fontFamily : 'Kanit',
// 							}}>
// 							<MTableToolbar {...props} />
// 						</div>
// 					)
// 				}}
				
// 				tableRef={tableRef}




// 					 headerStyle: {
// 						backgroundColor: '#9B59B6',
// 						color: '#9B59B6',
// 						fontFamily: 'Kanit',
// 						fontSize: 16,
// 						fontWeight:300
						
					
// 					},
// 					searchFieldStyle: {
// 						backgroundColor: '#FFF',
// 						color: '#99A3A4',
// 						fontFamily: 'Kanit',
// 						fontSize: 16,
// 						fontWeight:300,
// 						padding: "5px 10px 5px 15px",
// 						borderRadius: "12px",
// 						disableUnderline: true,
// 						border: "1px solid #707070",
// 						InputProps: {disableUnderline: true },
						
// 					},
// 				}}

// 				detailPanel={[
// 					{
// 					  tooltip: 'รายละเอียด',
// 					  render: rowData => {
// 						return (
// 						  <div
// 							style={{
// 							  fontSize: 16,
// 							  textAlign: 'center',
// 							  color: 'white',
// 							  backgroundColor: '#43A047',
// 							}}
// 						  >
// 							{rowData.remark}
							
// 						  </div>
// 						)
// 					  },
// 					},
// 				  ]}

				
// 			/>
// 		</div>
// 		</>
		
// 	);
// }

