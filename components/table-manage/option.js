export const option = {
    actionsColumnIndex: -1, //ตำแหน่งของ action
    addRowPosition: "first", //ตำแหน่งแถวที่เพิ่ม
    columnsButton: true, //ซ่อนแสดงคอลัมภ์
    paging: true, //pagination
    search: true,
    tableLayout: "auto",
    exportButton: true,
    //toolbarButtonAlignment: "right",
    //maxBodyHeight: "900px",
    rowStyle : { 
        color: '#000000',
        fontFamily: 'Kanit',
        fontSize: 14,
        fontWeight:200
                },
    headerStyle: {
        backgroundColor: '#9B59B6',
        color: '#9B59B6',
        fontFamily: 'Kanit',
        fontSize: 16,
        fontWeight:300,
       
           
                },
    searchFieldStyle: {
        backgroundColor: '#FFF',
        color: '#99A3A4',
        fontFamily: 'Kanit',
        fontSize: 16,
        fontWeight:300,
        padding: "5px 10px 5px 15px",
        borderRadius: "12px",
        disableUnderline: true,
        border: "1px solid #707070",
        InputProps: {disableUnderline: true },

                },
}