import MaterialTable from "material-table";
import { forwardRef } from "react";
////import AddBox from "@material-ui/icons/AddBox";
//import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import VisibilityIcon from '@material-ui/icons/Visibility';

import React, { useState, useEffect } from "react";
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

export default function Table() {
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

	const createRow = (
		newRow
		// quantity,
		// unit,
		// budget,
		// status,
		// remark,
		// owner,
		// year_budget,
		// bid_no,
		// list_no,
		// item_no,
		// item_name,
		// date_contract
	) => {

		var myHeaders = new Headers();
		myHeaders.append("Authorization", "Bearer cff0c3992591b70c40eab298c01cb784593fd949f9f01a3e1af4c0f184ccb3a7e496c545c15c11b883cb866bf662235a8b4dfd61a1734922dacfe1b0133b54eb07574016474eb795d0e58d700675967de05fb015b5026bad55e71690395aa35aaa519fb07e0d4268a87899af6609b68e0496efc66faa1396fd99b7f3380cc986");
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
		"data": {
			"quantity": newRow.quantity,
            "unit": newRow.unit,
            "budget": newRow.budget,
            "status": newRow.status,
            "remark": newRow.remark,
            "owner": newRow.owner,
            "year_budget": newRow.year_budget,
            "detail_plan": newRow.detail_plan,
            "bid_no": newRow.bid_no,
            "list_no": newRow.list_no,
            "item_no": newRow.item_no,
            "item_name": newRow.item_name,
            "date_contract": newRow.date_contract
		}
		});

		var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
		};

		fetch("http://localhost:1337/api/stocks", requestOptions)
		.then(response => response.text())
		.then(result => console.log(result))
		.catch(error => console.log('error', error));	
	};


	const deleteRow = (id) => {

		var myHeaders = new Headers();
		myHeaders.append("Authorization", "Bearer cff0c3992591b70c40eab298c01cb784593fd949f9f01a3e1af4c0f184ccb3a7e496c545c15c11b883cb866bf662235a8b4dfd61a1734922dacfe1b0133b54eb07574016474eb795d0e58d700675967de05fb015b5026bad55e71690395aa35aaa519fb07e0d4268a87899af6609b68e0496efc66faa1396fd99b7f3380cc986");

		var requestOptions = {
		method: 'DELETE',
		headers: myHeaders,
		redirect: 'follow'
		};

		fetch(`http://localhost:1337/api/stocks/${id}`, requestOptions)
		.then(response => response.text())
		.then(result => console.log(result))
		.catch(error => console.log('error', error));

	};


	const tableIcons = {
		//Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
		Add: forwardRef((props, ref) => <AddCircleIcon {...props} ref={ref} />),
		Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
		Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
		Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
		DetailPanel: forwardRef((props, ref) => (
			<ChevronRight {...props} ref={ref} />
		)),
		Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
		Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
		Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
		FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
		LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
		NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
		PreviousPage: forwardRef((props, ref) => (
			<ChevronLeft {...props} ref={ref} />
		)),
		ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
		Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
		SortArrow: forwardRef((props, ref) => (
			<ArrowDownward {...props} ref={ref} />
		)),
		ThirdStateCheck: forwardRef((props, ref) => (
			<Remove {...props} ref={ref} />
		)),
		ViewColumn: forwardRef((props, ref) => <VisibilityIcon {...props} ref={ref} />),
	};


	const columns = [
		// { title: "ID", field: "unit", editable: false },
		{ 
			title: "ปีที่ได้รับงบประมาณ", 
			field: "year_budget",
			cellStyle: {
				whiteSpace: 'nowrap'
			   },
			headerStyle: {
				backgroundColor: '#DEF3FA',
				color: 'Black',
				 whiteSpace: 'nowrap'
			  },
	    },
		{ 
			title: "รายการแผนการจัดซื้อ/จ้าง/เช่า", 
			field: "detail",
			cellStyle: {
				whiteSpace: 'nowrap'
			   },
			headerStyle: {
				backgroundColor: '#DEF3FA',
				color: 'Black',
				 whiteSpace: 'nowrap'
			  }, 
		},
		{ 
			title: "Bid No.", 
			field: "bid_no",
			cellStyle: {
				whiteSpace: 'nowrap'
			   },
			headerStyle: {
				backgroundColor: '#DEF3FA',
				color: 'Black',
				 whiteSpace: 'nowrap'
			  }, 
		},
		{ 
			title: "รายการที่", 
			field: "list_no",
			headerStyle: {
				backgroundColor: '#DEF3FA',
				color: 'Black',
				 whiteSpace: 'nowrap'
			  }, 
		},
		{ 
			title: "รหัสพัสดุ", 
			field: "item_no",
			cellStyle: {
				whiteSpace: 'nowrap'
			   },
			headerStyle: {
				backgroundColor: '#DEF3FA',
				color: 'Black',
				 whiteSpace: 'nowrap'
			  },  
		},
		{ 
			title: "ชื่อพัสดุ", 
			field: "item_name",
			cellStyle: {
				whiteSpace: 'nowrap'
			   },
			headerStyle: {
				backgroundColor: '#DEF3FA',
				color: 'Black',
				 whiteSpace: 'nowrap'
			  },  
		},
		{ 
			title: "จำนวน", 
			field: "quality",
			cellStyle: {
				whiteSpace: 'nowrap'
			   },
			headerStyle: {
				backgroundColor: '#DEF3FA',
				color: 'Black',
				 whiteSpace: 'nowrap'
			  },  
		},
		{ 
			title: "หน่วยนับ", 
			field: "unit",
			cellStyle: {
				whiteSpace: 'nowrap'
			   },
			headerStyle: {
				backgroundColor: '#DEF3FA',
				color: 'Black',
				 whiteSpace: 'nowrap'
			  },  
		},
		{ 
			title: "วงเงินงบประมาณ", 
			field: "budget",
			cellStyle: {
				whiteSpace: 'nowrap'
			   },
			headerStyle: {
				backgroundColor: '#DEF3FA',
				color: 'Black',
				 whiteSpace: 'nowrap'
			  },  
		},
		{ 
			title: "สถานะ",
			field: "status",
			lookup: { 1: 'เสนอราคา', 2: 'อยู่ระหว่างดำเนินการ', 3: 'แล้วเสร็จ' },
			cellStyle: {
				whiteSpace: 'nowrap'
			   },
			headerStyle: {
				backgroundColor: '#DEF3FA',
				color: 'Black',
				 whiteSpace: 'nowrap'
			  }, 
		},
		{ 
			title: "วัน/เดือน/ปี", 
			field: "date_contract",
			editComponent: props => (
				<MuiPickersUtilsProvider utils={DateFnsUtils} 
							locale={props.dateTimePickerLocalization}
							>
					   <DatePicker
							  format="dd/MM/yyyy"
							  value={props.value || null}
							  onChange={props.onChange}
							  clearable
							  InputProps={{
									   style: {
											fontSize: 13,
									   }
							  }}
						 />
				  </MuiPickersUtilsProvider>
				 ),
			cellStyle: {
				whiteSpace: 'nowrap'
			   },
			headerStyle: {
				backgroundColor: '#DEF3FA',
				color: 'Black',
				 whiteSpace: 'nowrap'
			  }, 
		 },
		{ 
			title: "รายละเอียดปัญหาอุปสรรค", 
			field: "remark",
			headerStyle: {
				backgroundColor: '#DEF3FA',
				color: 'Black',
				 whiteSpace: 'nowrap'
			  },  
			hidden: true,
		},
		{ 
			title: "วันที่แก้ไขข้อมูล", 
			field: "updatedAt",
			type: "date",
			dateSetting: { locale: "en-th" },
			cellStyle: {
				whiteSpace: 'nowrap'
			   },
			editable: false,
			headerStyle: {
				backgroundColor: '#DEF3FA',
				color: 'Black',
				 whiteSpace: 'nowrap'
			  }, 
			hidden: false, 
			 
		 },
		{ 
			title: "ผู้ที่รับผิดชอบ", 
			field: "owner",
			cellStyle: {
				whiteSpace: 'nowrap'
			   },
			editable: false,
			headerStyle: {
				backgroundColor: '#DEF3FA',
				color: 'Black',
				 whiteSpace: 'nowrap'
			  },
			hidden: true, 
		 },
	];

	const tableRef = React.createRef();
	return (
		<div>
			<h2>ข้อมูลวางแผนพัสดุ</h2>
			<h4 align="center">ฝ่ายวางแผนจัดหาพัสดุ</h4>
			<MaterialTable
				tableRef={tableRef}
				icons={tableIcons}
				//title="Client Details"
				title="กองวางแผนจัดหาพัสดุ 1"
				data={data}
				columns={columns}
				editable={{
					onRowAdd: (newRow) =>
						new Promise((resolve, reject) => {
							const updatedRows = [
								...data,
								{ id: Math.floor(Math.random() * 100), ...newRow },
							];
							setTimeout(() => {
								setData(updatedRows);
								console.log(newRow)
								//push to Backend
								createRow(newRow);
								resolve();
							}, 2000);
						}),
					onRowDelete: (selectedRow) =>
						new Promise((resolve, reject) => {
							const index = selectedRow.tableData.id;
							const updatedRows = [...data];
							updatedRows.splice(index, 1);
							setTimeout(() => {
								setData(updatedRows);
								//deleteRowonDatabase
								deleteRow(index);
								resolve();
							}, 2000);
						}),
					onRowUpdate: (updatedRow, oldRow) =>
						new Promise((resolve, reject) => {
							const index = oldRow.tableData.id;
							const updatedRows = [...data];
							updatedRows[index] = updatedRow;
							setTimeout(() => {
								setData(updatedRows);
								resolve();
							}, 2000);

							console.log(updatedRow);
						}),
				}}
				options={{
					actionsColumnIndex: -1,
					addRowPosition: "first",
					columnsButton: true, //show hide column button
					exportButton: true,
				}}

				detailPanel={[
					{
					  tooltip: 'รายละเอียด',
					  render: rowData => {
						return (
						  <div
							style={{
							  fontSize: 16,
							  textAlign: 'center',
							  color: 'white',
							  backgroundColor: '#43A047',
							}}
						  >
							{rowData.remark}
							
						  </div>
						)
					  },
					},
				  ]}
			//Text statement
			  localization={{
					pagination: {
						labelDisplayedRows: '{from}-{to} จาก {count}',
						labelRowsSelect: 'บรรทัด',
						firstTooltip: 'หน้าแรกสุด',
						previousTooltip: 'ย้อนกลับ',
						nextTooltip: 'ถัดไป',
						lastTooltip: 'หน้าสุดท้าย'

					},
					toolbar: {
						showColumnsTitle: 'เพิ่มลดคอลัมน์',
						nRowsSelected: '{0} แถว selected',
						addRemoveColumns: '',
						searchTooltip: 'ค้นหา',
						searchPlaceholder: 'ระบุสิ่งที่ต้องการ',
						exportTitle: 'ดาวน์โหลด',
						exportCSVName: 'ดาวน์โหลดเป็น Excel',
						exportPDFName: 'ดาวน์โหลดเป็น PDF'
					},
					header: {
						actions: 'จัดการ'
					},
					body: {
						emptyDataSourceMessage: 'ไม่มีข้อมูล',
						filterRow: {
							filterTooltip: 'กรอง'
						},
						addTooltip: 'เพิ่มแถวข้อมูล',
						deleteTooltip: 'ลบ',
						editTooltip: 'แก้ไข',
						editRow: { 
							deleteText: 'ลบข้อมูลแถวนี้',
							saveTooltip: 'ตกลง',
							cancelTooltip: 'ยกเลิก'
						 }
					}
				}}
			/>
		</div>
	);
}

// export default Table;
