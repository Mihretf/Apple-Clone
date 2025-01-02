import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Iphone() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://apple-backend-rb28.onrender.com")
      .then((res) => res.json())
      .then((products) => {
        setProducts(() => products.products);
      });
  }, []);

  console.log(products);

  return (
    <div>
      <section className="internal-page-wrapper top-100">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <br />
              <br />
              <br />
              <br />
              <div className="title-wraper bold">Iphones</div>
              <div className="brief-description">
                The best for the brightest.
              </div>
            </div>
          </div>
          {products.map((product, index) => {
            const {
              product_url: id,
              product_name: title,
              product_img: img,
              product_brief_description: Brief,
              starting_price: StartPrice,
              price_range: PriceRange,
            } = product;

            const productPage = `/iphone/${id}`;

            // Logic for alternating order
            const order1 = index % 2 === 0 ? 1 : 2;
            const order2 = index % 2 === 0 ? 2 : 1;

            return (
              <div
                key={id}
                className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
              >
                <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                  <div className="product-title">{title}</div>
                  <div className="product-brief">{Brief}</div>
                  <div className="starting-price">{`Starting at ${StartPrice}`}</div>
                  <div className="monthly-price">{PriceRange}</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={productPage}>Learn more</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={`col-sm-12 col-md-6 order-${order2}`}>
                  <div className="product-image">
                    <img src={img} alt={title} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Iphone;
