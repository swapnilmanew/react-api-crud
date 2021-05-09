import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

const Index = () => {
    return (
        <div>
            <div className="container">
                <h1 className="text-center fw-bold display-3 my-3">User's List</h1>
                <div className="row">
                    <div className="col-12 col-md-10 m-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td><button className="btn btn-success">Edit</button></td>
                                    <td><button className="btn btn-danger">Delete</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
