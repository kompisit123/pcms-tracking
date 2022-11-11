import { tableIcons } from "./icon";
export const action =[
            {
              icon: tableIcons.Feedback,
              tooltip: "หมายเหตุ",
              onClick: () => {
                console.log("Hello")
              }
            },
			// {
			// 	icon: Clear,
			// 	tooltip: 'Duplicate User',
			// 	onClick: (event, rowData) => {
			// 	  const materialTable = this.materialTableRef.current;
	
			// 	  this.setState({
			// 		initialFormData: {
			// 		  ...rowData,
			// 		  name: null,
			// 		},
			// 	  });
	
			// 	  materialTable.dataManager.changeRowEditing();
			// 	  materialTable.setState({
			// 		...materialTable.dataManager.getRenderState(),
			// 		showAddRow: true,
			// 	  });
			// 	}
			//   }
          ]
