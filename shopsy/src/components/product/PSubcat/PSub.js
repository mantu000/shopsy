import React, { useEffect, useState } from 'react'
import { Card, Container,Button,Row,Col, CardImg} from 'react-bootstrap';
import { useParams,Link } from 'react-router-dom'
import productData from '../product.json'; 
import './PSub.css';
import axios from 'axios';


export default function PSub() {
    let data=useParams();
    console.log("Received value in subcat:",data);
    //recived value in subcat:{catname:#}
    const [searchText,setSearchItem]=useState('');

    const[subcatState,setSubCat]=useState({subProduct:[]})
     
    useEffect(()=>{
      axios.get(data.catname)
      .then(res=>{
        console.log("Axios res in subcat:",res)
        setSubCat({subProduct:res.data})  
      })
      .catch(err=>{
      console.log("Axios error in subcat:",err)
      })
    },[setSubCat,data.catname])
    let productdata=ProductObj.product1.find((x)=>x.P_name === data.prodname);
    console.log("product1: ",productdata);

  return (
    <>
     <Container>
     <h2>{product.p_name}:</h2>
     
       <Row xs={1} md={3}>
         {
          productdata.P_subcat.map((psub)=>(
          <Col key={psub.s_id}>
           <Card>
            <Card.Body>
              <Card.Title>{psub.s_name}</Card.Title>
              <Card.Text>{psub.desc}</Card.Text>
              <Button  variant="warning"><Link to={`/PDet/${data.prodname}/${psub.s_name}`}>Show details</Link></Button>
            </Card.Body>
         </Card>
         </Col>
           ))
     }
    </Row>
    </Container>
    <Container>
     <h2>Category: {data.catname} </h2>
     <br/>
     <h3>Search</h3>
     <input type="text" placeholder='Searching ....' onChange={even=>{setSearchItem(event.target.value)}}/>
     
       <Row xs={1} md={3}>
         {
          subcatState.subProduct.filter((val)=>{
            if (searchText==="")
            {
              return val
            }else if(val.title.toLowerCase().include(searchText.toLowerCase())){
              return val;
            }
          })
          
          .map((psub)=>(
          <Col key={psub.id}>
           <Card>
             <CardImg variant="top" src={psub.image}/>
            <Card.Body>
              <Card.Title>{psub.title}</Card.Title>
              <Card.Text>{psub.price}</Card.Text>
              <Button  variant="warning">
                <Link to={`/PDet/${psub.id}`}>Show details</Link></Button>
            </Card.Body>
         </Card>
         </Col>
           ))
     }
    </Row>
    </Container>
    </>
  )
}
