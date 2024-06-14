// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// function Home() {
//     const [title, setTitle] = useState([]);
//     const logo = "http://10.9.39.82:8000/";

//     function fetchDataHandler() {
//         fetch('http://10.9.39.82:8000/api/setb')
//             .then((response) => response.json())
//             .then((data) => {
//                 setTitle(data.data);
//             });
//     }

//     return (
//         <Container>
//             <Row className="mt-4">
//                 <Col>
//                     <Button variant="primary">Breakfast</Button>
//                 </Col>
//                 <Col>
//                     <Button variant="primary">Lunch</Button>
//                 </Col>
//                 <Col>
//                     <Button variant="primary">Evening</Button>
//                 </Col>
//                 <Col>
//                     <Button variant="primary">Dinner</Button>
//                 </Col>
//                 <Col>
//                     <Button variant="warning">All</Button>
//                 </Col>
//             </Row>
//             <Row className="mt-4">
//                 {title.map((list) => (
//                     <Col key={list.id} xs={12} sm={6} md={4} lg={3}>
//                         <Card style={{ marginBottom: '20px' }}>
//                             <Card.Img variant="top" src={`${logo}${list.image}`} />
//                             <Card.Body>
//                                 <Card.Title>{list.name}</Card.Title>
//                                 <Card.Text>{list.category}</Card.Text>
//                                 <Card.Text>{list.description}</Card.Text>
//                                 <Button variant="danger">Order Now</Button>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 ))}
//             </Row>
//             <Button className="mt-4" variant="primary" onClick={fetchDataHandler}>Show</Button>
            
//         </Container>
//     );
// }

// export default Home;


import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState(null);
    const apiUrl = 'https://fakestoreapi.com/products';

    useEffect(() => {
        fetchData();
    }, [category]);

    const fetchData = () => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => setProducts(data))
            // .catch(error => console.error('Error fetching data:', error));
    };
    

    const handleCategoryClick = category => {
        setCategory(category);
    };

    const filteredProducts = category ? products.filter(product => product.category === category) : products;

    const categories = ['electronics', 'jewelery', "men's clothing", "women's clothing", null];

    return (
        <Container>
            <Row className="mt-4">
                {categories.map(cat => (
                    <Col key={cat}>
                        <Button variant="primary" onClick={() => handleCategoryClick(cat)}>
                            {cat ? cat.charAt(0).toUpperCase() + cat.slice(1) : 'All'}
                        </Button>
                    </Col>
                ))}
            </Row>
            <Row className="mt-4">
                {filteredProducts.map(product => (
                    <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Card style={{ marginBottom: '20px' }}>
                            <Card.Img variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>{product.category}</Card.Text>
                                <Card.Text>${product.price}</Card.Text>
                                <Button variant="danger">Order Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Home;

// import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// function Home() {
//     const [students, setStudents] = useState([]);
//     const [category, setCategory] = useState(null);
//     const apiUrl = 'https://randomuser.me/api/?results=10';

//     useEffect(() => {
//         fetchData();
//     }, [category]);

//     const fetchData = () => {
//         fetch(apiUrl)
//             .then(response => response.json())
//             .then(data => setStudents(data.results))
//             .catch(error => console.error('Error fetching data:', error));
//     };

//     const handleCategoryClick = category => {
//         setCategory(category);
//     };

//     const filteredStudents = students.filter(student => {
//         if (!category) return true;
//         if (category === 'men') return student.gender === 'male';
//         if (category === 'women') return student.gender === 'female';
//         return false;
//     });

//     const categories = ['All', 'Men', 'Women'];

//     return (
//         <Container>
//             <Row className="mt-4">
//                 {categories.map(cat => (
//                     <Col key={cat}>
//                         <Button variant="primary" onClick={() => handleCategoryClick(cat.toLowerCase())}>
//                             {cat}
//                         </Button>
//                     </Col>
//                 ))}
//             </Row>
//             <Row className="mt-4">
//                 {filteredStudents.map((student, index) => (
//                     <Col key={index} xs={12} sm={6} md={4} lg={3}>
//                         <Card style={{ marginBottom: '20px' }}>
//                             <Card.Img variant="top" src={student.picture.large} />
//                             <Card.Body>
//                                 <Card.Title>{`${student.name.first} ${student.name.last}`}</Card.Title>
//                                 <Card.Text>{student.gender}</Card.Text>
//                                 <Card.Text>Email: {student.email}</Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 ))}
//             </Row>
//         </Container>
//     );
// }

// export default Home;



