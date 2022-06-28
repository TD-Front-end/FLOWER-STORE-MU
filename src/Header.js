import React from 'react'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary" aria-label="Ninth navbar example">
            <div className="container-xl">
                <a className="navbar-brand" href="/#">Hoa vui</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL"
                    aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample07XL">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-3">
                            <a className="nav-link active" aria-current="page" href="/#">Trang chủ</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link active" href="/#">Sản phẩm</a>
                        </li>

                        <li className="nav-item dropdown mx-3">
                            <a className="nav-link dropdown-toggle active" href="/#" id="dropdown07XL" data-bs-toggle="dropdown"
                                aria-expanded="false">Quản lý</a>
                            <ul className="dropdown-menu" aria-labelledby="dropdown07XL">
                                <li><a className="dropdown-item" href="/#">Quản lý loại hoa</a></li>
                                <li><a className="dropdown-item" href="/#">Quản lý nhà cung cấp</a></li>
                                <li><a className="dropdown-item" href="/#">Quản lý hoa</a></li>
                            </ul>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link active" href="/#" tabindex="-1" aria-disabled="true">Liên hệ</a>
                        </li>
                    </ul>
                    <a href="/#" className="btn btn-success"><i className="fas fa-shopping-cart"></i></a>
                </div>
            </div>
        </nav>
    )
}

export default Header