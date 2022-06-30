import React from 'react'
import axios from 'axios';
// import {Link} from 'react-router-dom'
class EditCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {},
            DataisLoaded: false,
            CategoryName: '',
            //id: this.props.categoryId
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
    }
    handleChange = event => {
        this.setState({ CategoryName: event.target.value });
    }
    componentDidMount(){
        var category = {}
        const getCategory = async () => {
            try {
                const res = await axios.get(`http://localhost:4000/api/category/${this.props.categoryId}`)
                this.setState({
                    //item: res.data,
                    DataisLoaded: true,
                    CategoryName: res.data.CategoryName
                })
            } catch (error) {
                console.log(error);
            }
        }
        getCategory();
        return category;
    }
    handleUpdate = event => {
        event.preventDefault();

        const category = {
            CategoryName: this.state.CategoryName
        };
        
        (async () => {
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(category)
            };
            await fetch(`http://localhost:4000/api/category/${this.props.categoryId}`, requestOptions);
        })();
            // .then(res => {
            //     console.log(this.props.categoryId);
            //     console.log(res);
            //     console.log(res.data);
            // })
    }
    render() {
        return (
            <React.Fragment>
                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target={'#editModal'+this.state.item.CategoryID}>
                    <i className="fas fa-edit"></i>
                </button>
                
                <div className="modal fade" id={'editModal'+this.state.item.CategoryID} aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalToggleLabel">Thêm loại hoa</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <form onSubmit={this.handleUpdate}>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label htmlFor="CategoryName" className="col-form-label">Tên loại hoa:</label>
                                        <input type="text" className="form-control" id="CategoryName" value={this.state.CategoryName} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                    <button type="submit" className="btn btn-primary" onClick={()=>window.location.reload(false)}>Lưu thay đổi</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default EditCategory