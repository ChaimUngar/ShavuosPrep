import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Order = () => {
    const [order, setOrder] = useState({
        name: '',
        email: '',
        specialRequests: ''
    }
    )

    const { name, email, specialRequests } = order

    const navigate = useNavigate()

    const onInputChange = e => {
        const copy = { ...order }
        copy[e.target.name] = e.target.value
        setOrder(copy)
    }

    const onSubmitClick = async () => {
        await axios.post('/api/orders/addorder', order)
        navigate('/')
    }




    return (
        <>
            <div className="container" style={{ marginTop: '80px' }}>
                <h1 className="text-center my-4">Cheesecake Order Form</h1>
                <div className="row">

                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" name="name" className="form-control" onChange={onInputChange} value={name} />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" name="email" className="form-control" onChange={onInputChange} value={email} />
                        </div>

                        {/* <div className="mb-3">
                            <label className="form-label">Special Requests</label>
                            <textarea name="specialRequests" className="form-control" 
                                rows="3" onChange={onInputChange} value={specialRequests}></textarea>
                        </div> */}

                        <button type="submit" className="btn btn-primary" onClick={onSubmitClick}>Submit Order</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Order