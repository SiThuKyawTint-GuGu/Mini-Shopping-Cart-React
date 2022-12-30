import React, { useEffect } from 'react'
import Master from './layouts/Master'
import '../index.css'
const Cart = (props) => {
  const data = props.cart;
  const handleadd = (product) => {
    props.setCart(prev => 
      prev.map((d) => {
        if (d.id === product.id) {
          return {
           ...d,qty:d.qty + 1
         }
        } else {
          return d
       }
     })
   )
  } 

  const handleminus = (product) => {
     props.setCart((prev) =>
       prev.map((d) => {
         if (d.id === product.id) {
           return {
             ...d,
             qty: d.qty - 1,
           };
         } else {
           return d;
         }
       })
     );
   }; 
  return (
    <>
      <Master {...props}>
        <div className="container">
          <div className="row justify-content-center mt-5 pt-5">
            <div className="col-8">
              <div>
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Card Table</h4>
                    <p className="card-description">Card List with card</p>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Total Qty</th>
                            <th>Total Price</th>
                            <th>Option</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            data.map((d) => {
                              return (
                                <tr key={d.id}>
                                  <td>{d.category}</td>
                                  <td>${d.price}</td>
                                  <td>{d.qty}</td>
                                  <td>${d.qty * d.price}</td>
                                  <td className="">
                                    <button
                                      onClick={() => handleadd(d)}
                                      className="btn btn-sm btn-success w-25 rounded-0 h-50 me-2"
                                    >
                                      +
                                    </button>
                                    <button
                                      onClick={() => handleminus(d)}
                                      className="btn btn-sm btn-danger w-25 rounded-0 h-50"
                                    >
                                      -
                                    </button>
                                  </td>
                                </tr>
                              );
                            })
                         }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Master>
    </>
  );
}

export default Cart