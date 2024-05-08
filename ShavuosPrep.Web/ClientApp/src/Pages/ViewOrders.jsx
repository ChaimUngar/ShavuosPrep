import { Link } from "react-router-dom"

const ViewOrders = () => {
    return (
        <div className="container" style={{marginTop: '80px'}}>
            <div className="d-flex justify-content-center">
                <table className="table text-center shadow-lg" style={{borderCollapse: 'separate', borderSpacing: '0px 15px', maxWidth: '80%'}}>
                    <thead>
                        <tr style={{backgroundColor: 'rgb(33, 37, 41)', color: 'white', borderRadius: '15px'}}>
                            <th>Name/Email</th>
                            <th>Base Flavor</th>
                            <th>Toppings</th>
                            <th>Special Requests</th>
                            <th>Quantity</th>
                            <th>Delivery Date</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{backgroundColor: 'rgb(248, 249, 250)', borderRadius: '15px'}}>
                            <td style="padding-top: 15px; padding-bottom: 15px;">
                                <Link to="/">John Doe - john@doe.com</Link>
                            </td>
                            <td>Chocolate</td>
                            <td>Caramel Drizzle, Pecans, Almonds</td>
                            <td>Please put a lot of caramel!!!</td>
                            <td>1</td>
                            <td>05/21/2024</td>
                            <td>$61.84</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewOrders