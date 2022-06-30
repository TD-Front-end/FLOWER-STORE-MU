import axios from 'axios';
import React, { useEffect, useReducer, userState } from 'react'
import { link } from 'react-router-dom';
import logger from 'use-reducer-logger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddNewFlower from './AddNewFlower';

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

function Flowers() {
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
                    <AddNewFlower />
                </div>
            </div><br />
            <div className="table-responsive-md">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Mã loại hoa</th>
                            <th scope="col">Tên loại hoa</th>
                            <th scope="col">Color</th>
                            <th scope="col">Price</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>{
                        flowers.map((flower) => (
                            <tbody key={flower.flower_id}>
                                <tr>
                                    <td scope="row">{flower.FlowerID}</td>
                                    <td scope="row">{flower.FlowerName}</td>
                                    <td scope="row">{flower.Color}</td>
                                    <td scope="row">{flower.Price}</td>
                                    <td scope="row">
                                        <button type="button" className="btn btn-primary"><i className="far fa-eye"></i></button>
                                        <button type="button" className="btn btn-success"><i className="fas fa-edit"></i></button>
                                        <button type="button" className="btn btn-danger"><i className="far fa-trash-alt"></i></button>
                                    </td>
                                </tr>

                            </tbody>
                        ))}
                </table>

            </div>
        </React.Fragment >
    )
}

export default Flowers;