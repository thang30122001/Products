import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';
// import { useState } from 'react';
function CreateProcduct({ click, products, setProducts, formData: data, setFormData: setData, }) {
  // console.log(click);
  // const prod = click === -1 ? { id: '', name: '', price: '' } : products[click];
  // console.log(click, prod)
  // const [data, setData] = useState(prod);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value
    });
  }
  const onSubmitHandler=(e)=>{
    e.preventDefault();
    if (click===-1) {
      //tạo mới
      
      setProducts([
        ...products,
        data,
      ])
    } else {
      //cập nhật
      setProducts(function (oldState) {
        const newState= oldState.map((value, index) => {
          if(index === click) {
            return data;
          } else {
            return value;
          }
          // return index === click ? data : value;
        });
        return newState;
      }); 
    }
  }
  return (
    <div>
      <form onSubmit={ onSubmitHandler }>
        <Grid container spacing={0} justify="center" >

          <Grid item={8}>
            <Grid container justify="center" spacing={0}>
              <TextField
                onChange={onChangeHandler}
                name="id"
                value={data.id}
                fullWidth
                style={{ marginTop: '3px' }}
                label="Id"
                variant="outlined" />
              <TextField
                onChange={onChangeHandler}
                name="name" value={data.name}
                fullWidth
                style={{ marginTop: '20px' }}
                label="Name"
                variant="outlined" />
              <TextField
                onChange={onChangeHandler}
                name="price"
                value={data.price}
                fullWidth
                style={{ marginTop: '20px' }}
                label="Price"
                variant="outlined" />
              <Box textAlign='center'>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ marginTop: '20px' }}>Submit
               </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </form>
      <form >
      <Button     
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ marginTop: '20px' }}>Refesh
               </Button>
      </form>
    </div>


  )
}
export default CreateProcduct;