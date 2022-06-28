import React from 'react'

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
    //http://localhost:4000/api/flowers
    componentDidMount() {
        fetch("http://localhost:4000/api/flowers")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div>;
        return (
            <React.Fragment>
                <div className="alert alert-info mt-3">
                    <strong>Danh sách loại hoa</strong>
                </div><div className="row">
                    <div className="col-xs-12">
                        <a href="/AddNewCategory" classNameName="">Thêm loại hoa</a>

                    </div>
                </div><br /><div className="table-responsive-md">
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
                            items.map((item) => (
                                <tbody key={item.flower_id}>
                                    <tr>
                                        <td scope="row">{item.FlowerID}</td>
                                        <td scope="row">{item.FlowerName}</td>
                                        <td scope="row">{item.Color}</td>
                                        <td scope="row">{item.Price}</td>
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
}

export default Category