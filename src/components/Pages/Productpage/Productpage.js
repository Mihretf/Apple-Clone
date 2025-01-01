import React, { Component } from "react";

class Productpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productID: props.match.params.pid, // Ensure this matches the route parameter
    };
  }

  componentDidMount() {
    fetch("/iphones")
  }

  render() {
    return (
      <div>
        <section className="internal-page-wrapper top-100">
          <div className="container">
            {this.state.products.map((product) => {
              const {
                product_url: id,
                product_name: title,
                product_img: img,
                product_brief_description: Brief,
                starting_price: StartPrice,
                price_range: PriceRange,
                product_description: details,
              } = product;

              return (
                <div key={id} className="bottom-100">
                  <div className="row justify-content-center text-center bottom-50">
                    <div className="col-12">
                      <div className="title-wraper bold">{title}</div>
                      <div className="brief-description">{Brief}</div>
                    </div>
                  </div>

                  <div className="row justify-content-center text-center product-holder h-100">
                    <div className={`col-sm-12 col-md-6 my-auto`}>
                      <div className="starting-price">
                        {`Starting at ${StartPrice}`}
                      </div>
                      <div className="monthly-price">{PriceRange}</div>
                      <div className="product-details">{details}</div>
                    </div>

                    <div className={`col-sm-12 col-md-6`}>
                      <div className="prodict-image">
                        <img src={img} alt={title} />
                      </div>
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
}

export default Productpage;