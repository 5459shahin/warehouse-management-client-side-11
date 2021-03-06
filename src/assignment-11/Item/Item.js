import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Item.css';

const Item = ({ service }) => {
    const { img, cycle, price, quantity, description, supplier, _id } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/productDetails/${id}`);

    }
    return (
        <div className=''>
            

           <div className='col-md-6 col-lg-4 col-12'>
           <div className="product card  text-center py-3">
                <img className="  mx-auto item-image" src={img} alt="" />
                {quantity === 0 ? <h6 className="sold-out">Sold <br /> Out</h6> : ""}
                <div className="card-body">
                    <h4 className="card-title" style={{ textTransform: "capitalize" }}>
                        {cycle}
                    </h4>
                    <div className="column d-flex justify-content-between my-3 px-3">
                        <h6 className="card-text">${price}</h6>
                        <h6 className="card-text">{quantity} Pieces</h6>
                    </div>
                    <h6 className="card-text">Supplier: {supplier}</h6>
                    <p className="card-text">{description}</p>
                    
                </div>
                <div className="card-footer bg-transparent border-0">
                    <button onClick={()=> navigateToServiceDetail (_id)} className="btn btn-dark w-100">
                        Update Stock
                    </button>
                </div>
            </div>
           </div>
            

           
        </div>
    );
};

export default Item;