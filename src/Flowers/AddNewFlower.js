import React, { useEffect, useReducer, userState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import logger from 'use-reducer-logger';
//
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

class AddNewFlower extends React.Component {

    constructor(props) {
        super(props);
        this.state = { FlowerName: '' };
        this.state = { Color: '' };
        this.state = { imgeFlower: '' };
        this.state = { Unit: '' };
        this.state = { Price: '' };
        this.state = { CategoryID: '' };
        this.state = { SupplierID: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange = event => {
        this.setState({ FlowerName: event.target.value });
        this.setState({ Color: event.target.value });
        this.setState({ imgeFlower: event.target.value });
        this.setState({ Unit: event.target.value });
        this.setState({ Price: event.target.value });
        this.setState({ CategoryID: event.target.value });
        this.setState({ SupplierID: event.target.value });
    }
    handleSubmit = event => {
        event.preventDefault();

        const flower = {
            FlowerName: this.state.FlowerName,
            Color: this.state.Color,
            imgeFlower: this.state.imgeFlower,
            Unit: this.state.Unit,
            Price: this.state.Price,
            CategoryID: this.state.CategoryID,
            SupplierID: this.state.SupplierID
        };

        axios.post(`http://localhost:4000/api/flowers`, flower)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    };

    render() {
        const [{ loading, error, category }, dispatch] = useReducer(logger(reducer), {
            category: [],
            loading: true,
            error: '',
        });
        //
        useEffect(() => {
            const fetchData = async () => {
                dispatch({ type: 'FETCH_REQUEST' });
                try {
                    const result = await axios.get('/api/category');
                    dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
                } catch (err) {
                    dispatch({ type: 'FETCH_FAIL', payload: err.message });

                }
            };
            fetchData();
        }, []);
        return (
            <React.Fragment>
                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#insertModal">
                    Thêm hoa
                </button>
                <div className="modal fade" id="insertModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalToggleLabel">Thêm hoa</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <form onSubmit={this.handleSubmit}>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label htmlFor="FlowerName" className="col-form-label">Tên hoa:</label>
                                        <input type="text" className="form-control" id="FlowerName" onChange={this.handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Color" className="col-form-label">Màu hoa:</label>
                                        <input type="text" className="form-control" id="Color" onChange={this.handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="imgeFlower" className="col-form-label">Ảnh hoa:</label>
                                        <input type="text" className="form-control" id="imgeFlower" onChange={this.handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Unit" className="col-form-label">Đơn vị:</label>
                                        <input type="text" className="form-control" id="Unit" onChange={this.handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Price" className="col-form-label">Giá hoa:</label>
                                        <input type="text" className="form-control" id="Price" onChange={this.handleChange} />
                                    </div>
                                    {
                                        category.map((item) => (
                                            <div className="mb-3" key={item.CategoryID}>
                                                <select value={item.CategoryID}>
                                                    <option value={item.CategoryName} ></option>                                              
                                                </select>
                                            </div>
                                        ))

                                    }
                                    <div className="mb-3">
                                        <label htmlFor="SupplierID " className="col-form-label">Nhà cung cấp:</label>
                                        <input type="text" className="form-control" id="SupplierID " onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                    <button type="submit" className="btn btn-primary" onClick={() => window.location.reload(false)}>Lưu</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default AddNewFlower;