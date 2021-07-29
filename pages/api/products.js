import React from "react";
import products from "../../data/products.json";
import orders from "../../data/orders.json";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderId: this.props.data,
      itemIdAndQuantity: [],
      allproducts: products,
      totalPrice: 0
    }
  }

  componentDidMount() {
    const items = orders.filter(i => i.orderId == this.state.orderId)
    this.setState({
      itemIdAndQuantity: items[0]["items"]
    });
    let value = 0;
    this.setState(prevState => {
      let changedState = { ...prevState }
      for (let k in changedState.itemIdAndQuantity) {
        for (let j in changedState.allproducts) {
          if (changedState.itemIdAndQuantity[k].offerId == changedState.allproducts[j].offerId) {
            value += changedState.itemIdAndQuantity[k].quantity * changedState.allproducts[j].linePrice
          }
        }
      }
      return {
        totalPrice : Math.round(value * 100)/ 100
      }
    });
}

  render() {
    return (
      <div className="modalBox">
          Order# {this.state.orderId}
          <div className="box">
            {this.state.itemIdAndQuantity.map((i) => <div className="product" key={i.offerId}>
              {this.state.allproducts.filter((p) => p.offerId == i.offerId).map((j) => <div key={j.name}>
                {j.isRollback ? <div>{j.isRollback}</div> : <div></div>}
                <img src={j.imageUrl} alt="ProductImage" className="productImage"></img>
                <div>
                  ${j.linePrice}
                </div>
                <div>
                  {j.pricePerUnit}
                </div>
                <div>
                  {j.finalCostByWeight}
                </div>
                <div>
                  {j.name}
                </div>
                <div>
                  Quantity: {i.quantity}
                </div>
              </div>)}
            </div>)}
          </div>
          <div className="totalPrice" type="number">
            Total: ${this.state.totalPrice}
          </div>
      </div>
    )
  }
};

export default Products;

