import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from '../Components/Loader';
import Master from './layouts/Master'
const Home = (props) => {
  const [product, setproduct] = useState([]);
  const [loader, setloader] = useState(true);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(res => {
      setproduct(res.data);
      setloader(false);
    });
  },[])
  
  const handleadd = (product) => {
    product.qty = 1;
   let findpd = props.cart.find((d) => {
      return d.id === product.id
    })
    if (findpd) {
      product.qty += 1;
    } else {
      product.qty = 1;
     props.setCart([...props.cart, product]);
    }
   
    
  }
  return (
    <Master {...props}>
      {loader && <Loader />}
      <div className="container">
        <div className="row">
          {!loader &&
            product.map((p) => {
              return (
                <div className="col-3 mt-5" key={p.id}>
                  <div className="card overflow-hidden">
                    <div>
                      <img
                        src={p.image}
                        className='d-block mx-auto p-4'
                        style={{ height: "200px",objectFit:'contain',width:'200px' }}
                        alt=""
                      />
                    </div>
                    <div>
                      <h6 className=" text-black fw-light p-3">{ p.category}</h6>
                    </div>
                    <div className="d-flex justify-content-around mb-4">
                      <div>
                        <small className="border border-success p-2 rounded-1">
                          ${p.price}
                        </small>
                      </div>
                      <button onClick={() => handleadd(p)}  className="btn btn-sm btn-outline-success">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </Master>
  );
}

export default Home