export const edit = {
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
                console.log("fffffffffffff")
                //deleteRow(index);
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
}