export const columns = [

    { 
       // title: <h1 className={classes.colHeader}>"ปีที่ได้รับงบประมาณ"</h1>, 
        title: <p className="text-gray-200 hover:text-white ">ปีที่ได้รับงบประมาณ</p>, 
        field: "year_budget",
        editComponent: props => (
        	<input
        	  type="text"
        	  value={props.value}
        	  onChange={e => props.onChange(e.target.value)}
        	/>
        
          ),
        cellStyle: {
            whiteSpace: 'nowrap'
           },
        headerStyle: {
            backgroundColor: '#9B59B6',
            color: '#FFFFFF',
             whiteSpace: 'nowrap'
          },
    },
    { 
        title: "รายการแผนการจัดซื้อ/จ้าง/เช่า", 
        field: "detail_plan",
        cellStyle: {
            whiteSpace: 'nowrap'
           },
        headerStyle: {
            backgroundColor: '#9B59B6',
            color: '#FFFFFF',
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
            backgroundColor: '#9B59B6',
            color: '#FFFFFF',
             whiteSpace: 'nowrap'
          }, 
    },
    { 
        title: "รายการที่", 
        field: "list_no",
        headerStyle: {
            backgroundColor: '#9B59B6',
            color: '#FFFFFF',
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
            backgroundColor: '#9B59B6',
            color: '#FFFFFF',
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
            backgroundColor: '#9B59B6',
            color: '#FFFFFF',
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
            backgroundColor: '#9B59B6',
            color: '#FFFFFF',
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
            backgroundColor: '#9B59B6',
            color: '#FFFFFF',
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
            backgroundColor: '#9B59B6',
            color: '#FFFFFF',
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
            backgroundColor: '#9B59B6',
            color: '#FFFFFF',
             whiteSpace: 'nowrap'
          }, 
    },
    { 
        title: "วัน/เดือน/ปี", 
        field: "date_contract",
        // editComponent: props => (
        // 	<MuiPickersUtilsProvider utils={DateFnsUtils} 
        // 				locale={props.dateTimePickerLocalization}
        // 				>
        // 		   <DatePicker
        // 				  format="dd/MM/yyyy"
        // 				  value={props.value || null}
        // 				  onChange={props.onChange}
        // 				  clearable
        // 				  InputProps={{
        // 						   style: {
        // 								fontSize: 13,
        // 						   }
        // 				  }}
        // 			 />
        // 	  </MuiPickersUtilsProvider>
        // 	 ),
        cellStyle: {
            whiteSpace: 'nowrap'
           },
        headerStyle: {
            backgroundColor: '#9B59B6',
            color: '#FFFFFF',
             whiteSpace: 'nowrap'
          }, 
     },
    { 
        title: "รายละเอียดปัญหาอุปสรรค", 
        field: "remark",
        headerStyle: {
            backgroundColor: '#9B59B6',
            color: '#FFFFFF',
             whiteSpace: 'nowrap'
          },  
        hidden: true,
    },
    { 
        title: "วันที่แก้ไขข้อมูล", 
        field: "updatedAt",
        type: "date",
         dateSetting: { locale: "th-TH" },
        cellStyle: {
            whiteSpace: 'nowrap'
           },
        editable: false,
        headerStyle: {
            backgroundColor: '#9B59B6',
            color: '#FFFFFF',
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
            backgroundColor: '#9B59B6',
            color: '#FFFFFF',
             whiteSpace: 'nowrap'
          },
        hidden: true, 
     },
];