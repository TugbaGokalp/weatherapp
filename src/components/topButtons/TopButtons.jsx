import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Topbuttons = (setQuery) => {

const cities = [
    {
        id:1,
        title: 'London',
        link: '/weather/london'
    },
    {
        id:2,
        title: 'Sydney',
        link: '/sydney'
    },
    {
        id:3,
        title: 'Tokyo',
        link: '/tokyo'
    },
    {
        id:4,
        title: 'Paris',
        link: '/paris'
    },
    
]

  return (
    <Container>
        <Row className='flex items-center justify-center my-4 ms-5 ' >
            <Col>
    
        {cities.map((city) => (
            <Link to={city.link} key={city.id}>
            <button className=' btn text-light text-lg mx-4 font-medium bg-transparent' key = {city.id} onClick={() => setQuery({ q: city.title})}>
{city.title}
            </button>
            </Link>
        ))}
    
    </Col>
    </Row>
   </Container>
  )
}

export default Topbuttons;