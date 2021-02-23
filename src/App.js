
import { useState,useEffect } from 'react';
import './App.css';
import { AppBar,IconButton,Container,Toolbar,Typography } from '@material-ui/core';
import ListProducts from './components/ListProducts';
import CreateProcduct from './components/CreateProduct';
import axios from 'axios';

function App() {
  // const[Id, setId]= useState('');
  // const[Name, setName]= useState('');
  // const[Price, setPrice]= useState('');
  //   const onChangeHandler = (event) => {

  //       setId(event.target.value);
  //       setName(event.target.value);
  //       setPrice(event.target.value);
  //   }
  //  const  handleSubmit=(event)=> {
       
  //  }
  //  const initValue=[
  //   { id:1 ,name: 'Iphone12',price:'33,999,99.00'},
  //   { id:2 ,name: 'Iphone11',price:'2,999,99.00'},
  //   { id:3 ,name: 'Iphone10',price:'1,999,99.00'},
  // ];
  const formDataInitValue= { id:'', name:'', price: '' };
  const [products, setProducts]=useState([]);
  const [click, setClick]=useState(-1);
  const [formData, setFormData] = useState(formDataInitValue);
  const url="https://601246c684695f0017779f0a.mockapi.io/products";
  useEffect(() => {
    axios({
      method: 'GET',
      url: url,
    }).then((response) => {
        const { data } = response;
        console.log(data);
        setProducts(data);
    })
      .catch((error) => {
        console.log(error, error.response);
      });
  }, [
    //
  ]);
  
  return(
    
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" >

          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWRAP>Dashbroad</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm">
      
        <Typography 
        component="div" 
        style={{ 
          backgroundColor: '#cfe8fc', 
          height: '100vh' 
          }} >
            <CreateProcduct
              formData= {formData}
              setFormData={setFormData}
              click={click} 
              products={products}
              setClick= {setClick}
              setProducts={setProducts} />
              
            <ListProducts
            setProducts= {setProducts}
            setFormData= {setFormData}
             setClick={ setClick }
             data={products}/>
            
          </Typography>
          
      </Container>
     
    </div>
    
  )
 
}


export default App;
