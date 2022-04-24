import React, { useState } from 'react'
import { Carousel, CardGroup, Row, Button, } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
// import Image from 'react-bootstrap/Image'
import './Home.css';


export default function Home() {





  // const [ setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };
  const [setShow] = useState(false);


  return (
    <div className='hb'>

      {/* First slide */}
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 img"
            src="../../../../../img/12.jpg"
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
            src="../../../../../img/trophy1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3><h1>50% Discount coupun</h1></h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 img"
            src="../../../../../img/tshirt.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Best Choice</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 img"
            src="../../../../../img/2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>M_D</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img"
            src="../../../../../img/1.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>M_D Sport Shop</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      {/* 2nd card sec */}
      <CardGroup style={{ height: '2rem' }}>
        <Row xs={1} md={4} className="g-4">
          <Card>
            <Card.Img variant="top" className='img2' src="../../../../../img/bat4.jpg" />
            <Card.Body>
              <Card.Title>Elevar Gully</Card.Title>
              <Card.Text><small>
                This bat is made for destructive tennis ball batting. Thank you Elevar for another excellent addition to your product range.</small>
                <p><b>M.R.P.: ₹1,358.00</b></p>
              </Card.Text>
            </Card.Body>

          </Card>
          <Card>
            <Card.Img variant="top" className='img2' src="../../../../../img/ss1.jpg" />
            <Card.Body>
              <Card.Title>SS BAT</Card.Title>
              <Card.Text><small>
                S S Sports Weapon Popular Willow Cricket Bat.</small>
                <p><b>M.R.P.: ₹1,599.00</b></p>
              </Card.Text>
            </Card.Body>

          </Card>
          <Card>
            <Card.Img variant="top" className='img2' src="../../../../../img/mrf1.jpg" />
            <Card.Body>
              <Card.Title>MRF BAT</Card.Title>
              <Card.Text><small>
                PMG Wooden Cricket Bat Size 6, for Boys of 12-14 Year, Poplar Willow.</small>
                <p><b>M.R.P.: ₹699.00</b></p>
                <Button variant="primary" onClick={() => setShow(true)}>
                  Booking
                </Button>
              </Card.Text>
            </Card.Body>

          </Card>
          <Card>
            <Card.Img variant="top" className='img2' src="../../../../../img/ton1.jpg" />
            <Card.Body>
              <Card.Title>TON BAT</Card.Title>
              <Card.Text><small>
                This card has supporting text below as a natural lead-in to additional
                content.</small>
                <p><b>M.R.P. : ₹999.00</b></p>
                <Button variant="primary" onClick={() => setShow(true)}>
                  Booking
                </Button>
              </Card.Text>
            </Card.Body>

          </Card>
          <Card>
            <Card.Img variant="top" className='img2' src="../../../../../img/cover.jpg" />
            <Card.Body>
              <Card.Title>Nodens Cricket Bat Grip</Card.Title>
              <Card.Text><small>
                Nodens Cricket Bat Grip, (Multicolour Pack of 6)</small>
                <p><b>M.R.P. : ₹699.00</b></p>
                <Button variant="primary" onClick={() => setShow(true)}>
                  Booking
                </Button>
              </Card.Text>
            </Card.Body>

          </Card>
          <Card>
            <Card.Img variant="top" className='img2' src="../../../../../img/toy.jpg" />
            <Card.Body>
              <Card.Title>Toyshine Cricket bat Care Accessory kit</Card.Title>
              <Card.Text><small>
                Toyshine Cricket bat Care Accessory kit- Bat Toe, Handle, Thread, Cone, Fiber Tape, Grips, Hammer and Cover SSTP, Multicolour.</small>
                <p><b>M.R.P. :₹2,999.00</b></p>
                <Button variant="primary" onClick={() => setShow(true)}>
                  Booking
                </Button>
              </Card.Text>
            </Card.Body>

          </Card>
          <Card>
            <Card.Img variant="top" className='img2' src="../../../../../img/boll1.jpg" />
            <Card.Body>
              <Card.Title>Vicky Boll</Card.Title>
              <Card.Text><small>
                Vicky Rubber Cricket Tennis Ball - Super (Heavy), Maroon Standard Size.</small>
                <p><b>M.R.P. :₹580.00</b></p>\
                <Button variant="primary" onClick={() => setShow(true)}>
                  Booking
                </Button>
              </Card.Text>
            </Card.Body>

          </Card>
          <Card>
            <Card.Img variant="top" className='img2' src="../../../../../img/glove.jpg" />
            <Card.Body>
              <Card.Title>BAS Glove</Card.Title>
              <Card.Text><small>
                BAS Vampire Player Edition Batting Glove (Right).</small>
                <p><b>M.R.P. : ₹3,999.00</b></p>
                <Button variant="primary" onClick={() => setShow(true)}>
                  Booking
                </Button>
              </Card.Text>
            </Card.Body>

          </Card>
          <Card>
            <Card.Img variant="top" className='img2' src="../../../../../img/tshirt1.jpg" />
            <Card.Body>
              <Card.Title>Sport T-shirt</Card.Title>
              <Card.Text><small>
                Sports Cricket t-shirt jersey design template, mock up uniform kit with front and back view.</small>
                <p><b>M.R.P. : ₹447.00</b></p>
                <Button variant="primary" onClick={() => setShow(true)}>
                  Booking
                </Button>
              </Card.Text>
            </Card.Body>

          </Card>
        </Row>
      </CardGroup>


      {/* 3rd sec */}
      {/* <Row xs={1} md={6} className="g-2">
        {Array.from({ length: 2}).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src="../../../../../img/bats2.jpg" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row> */}

      {/* <div
        aria-live="polite"
        aria-atomic="true"
        className="bg-dark position-relative"
        style={{ minHeight: '240px' }}
      >

      </div>
      <Card style={{ width: '20rem', margin: "5pc" }}>
        <Card.Header>M_D sport shop</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Card> */}

    </div>

  )
}  
