import axios from 'axios';
import React, { useEffect, useReducer, userState } from 'react'
import logger from 'use-reducer-logger';
import LoadingBox from './LoadingBox';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import flower_product from './Flowers/flower_product';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';



const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, flowers: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function Home() {
  const [{ loading, error, flowers }, dispatch] = useReducer(logger(reducer), {
    flowers: [],
    loading: true,
    error: '',
  });
  //
  // const [flowers, setFlowers] = userState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/flowers');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });

      }
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <div className="alert alert-info mt-3">
        <strong>Danh sách loại hoa</strong>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <a href="/AddNewCategory" classNameName="">Thêm loại hoa</a>

        </div>
      </div><br />
      <div className="flowers">
        {loading ? (
          <LoadingBox />
        ) : (
          <Row>
            {flowers.map((flower) => (
              <Col key={flower.flower_id} sm={6} md={4} lg={3} className="mb-3">
                <Card>
                  <Link to={`/flower/${flower.flower_id}`}>
                    <img src={flower.imgeFlower} className="card-img-top" alt={flower.FlowerName} />
                  </Link>
                  <Card.Body>
                    <Link to={`/flower/${flower.flower_id}`}>
                      <Card.Title>{flower.FlowerName}</Card.Title>
                    </Link>
                    <Card.Text>${flower.Price}</Card.Text>
                    <Button>Add to cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </React.Fragment >
  )
}

export default Home