export const panel =[
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
  ]