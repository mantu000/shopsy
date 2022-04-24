import React from 'react'
import { Container,Card,ListGroup,Carousel } from 'react-bootstrap'

export default function About() {


  return (
    <div >
        <Container className='myabout'>
         <h1>Welcome To The About Page</h1>
         


         <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 img"
            src="../../../../../img/3.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 img"
            src="../../../../../img/bat.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 img"
            src="../../../../../img/team2.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 img"
            src="../../../../../img/team.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img"
            src="../../../../../img/bat3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

         <Card style={{ width: '18rem' }}>
  <Card.Header>ITEM</Card.Header>
  <ListGroup variant="flush" className='itembar'>
    <ListGroup.Item>Cricket bats</ListGroup.Item>
    <ListGroup.Item>Cricket Ball </ListGroup.Item>
    <ListGroup.Item>Cricket Helmet</ListGroup.Item>
     <ListGroup.Item>Cricket Batting Legguard</ListGroup.Item>
      <ListGroup.Item>Gloves</ListGroup.Item>
  </ListGroup>
</Card>
         
         </Container>
         
         </div>
  )
}
