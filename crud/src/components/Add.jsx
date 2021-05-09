import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
const Add = () => {
    return (
        <div>
            <div className="container">
                <h1 className="text-center fw-bold display-3 my-3">Add User</h1>

                <div className="row">
                    <div className="col-12 col-md-10 m-auto">
                        <form>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Name</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Address</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" />
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add
