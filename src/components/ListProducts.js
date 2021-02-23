import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import axios from 'axios';


 function ListProducts({ data,setClick ,setFormData, setProducts}){
    // const list=data.map((value,index)=>{ });
    const onClickHandler=(event,index, value)=>{
        setClick(index);
        setFormData(value);
    }
    const btnDeleteOnclick= function (event, value, index){
        event.stopPropagation();
        console.log(value, '---' ,index);
        const deleteUrl ="https://601246c684695f0017779f0a.mockapi.io/products/" + value.id;
        axios.delete(deleteUrl)
        .then(function (response){
          const listNew=  data.filter(function (val, idx) {
                
                if(idx===index){
                      //loại bỏ phần tử
                return false;
                }
                //giữ nguyên phần tử
                return true;
               
            });
            setProducts(listNew);
        })
        .catch(function (error){
            console.error(error);
        })
      }
  return(
      <Table>
          <TableHead>
              <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Action</TableCell>
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
                          <TableCell>
                              <Button
                               color="secondary"
                               onClick={
                                   (event)=>{
                                       btnDeleteOnclick(event, value, index);
                                   }
                               }
                                >
                                      Delete
                              </Button>
                          </TableCell>
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