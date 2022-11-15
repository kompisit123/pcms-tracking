import { tableIcons } from "./icon";
import { EditForm } from "../index";


export const action =[
	{
		icon: tableIcons.Edit,
		tooltip: "แก้ไขข้อมูล",
		onClick: (event, rowData) => {
		 // const router = useRouter()
		  console.log("Row Data: " , rowData)
		  alert("edit row" +rowData.id)
          return(
		  <EditForm />
		  )
		}
	  },
            {
              icon: tableIcons.Delete,
              tooltip: "ลบแถวนี้",
              onClick: (event, rowData) => {
               // const router = useRouter()
                console.log("Row Data: " , rowData)
                alert("ddddddd" +rowData.id)

				var myHeaders = new Headers();
                myHeaders.append("Authorization", "Bearer cff0c3992591b70c40eab298c01cb784593fd949f9f01a3e1af4c0f184ccb3a7e496c545c15c11b883cb866bf662235a8b4dfd61a1734922dacfe1b0133b54eb07574016474eb795d0e58d700675967de05fb015b5026bad55e71690395aa35aaa519fb07e0d4268a87899af6609b68e0496efc66faa1396fd99b7f3380cc986");

				var requestOptions = {
				method: 'DELETE',
				headers: myHeaders,
				redirect: 'follow'
				};

				fetch(`http://localhost:1337/api/stocks/${rowData.id}`, requestOptions)
				.then(response => response.text())
				.then(result => location.reload())
				.catch(error => console.log('error', error));
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
