import { MTableToolbar }  from "material-table";
export const overide ={
    //overide searchbar
    Toolbar: props => (
        <div style={{ 
            backgroundColor: '#FFFFFF' ,
            fontFamily : 'Kanit',
            }}>
            <MTableToolbar {...props} />
        </div>
    )
}