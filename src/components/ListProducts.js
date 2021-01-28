import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';

 function ListProducts({ data,setClick ,setFormData}){
    // const list=data.map((value,index)=>{ });
    const onClickHandler=(event,index, value)=>{
        setClick(index);
        setFormData(value);
    }
  return(
      <Table>
          <TableHead>
              <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Price</TableCell>
              </TableRow>
          </TableHead>
          <TableBody>
              {
                  data.map((value,index)=>{
                      return <TableRow 
                      key="index"
                      onClick={
                          (event)=>{
                              onClickHandler(event,index, value);
                          }
                        }>
                          <TableCell> {value.id} </TableCell>
                          <TableCell> {value.name} </TableCell>
                          <TableCell> {value.price} </TableCell>
                      </TableRow>
                  })
              }
        </TableBody>
      </Table>
  );
}
ListProducts.propTypes = {
    data: PropTypes.arrayOf(// mảng các phần tử
        PropTypes.shape({// cấu trúc của phần tử
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
        })
    ).isRequired
};
export default ListProducts;