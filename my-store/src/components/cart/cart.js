import React from 'react';
import Products from '../products/products';
import { FormattedNumber } from 'react-intl';


export default class Cart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cart: [],
            addedToCart: false,
            countItens: 0,
        }
    }

    showProductsInformation() {
        this.state.cart.map((item) => {
            return (
                <div>
                    <div>
                        <p>{item.title}</p>
                        <p>{item.availableSizes[0]} | {item.style}</p>
                        <p>
                            <FormattedNumber
                                value={item.price}
                                style="currency"
                                currency={item.currencyId} />
                        </p>
                    </div>
                </div>
            );
        });
    }

    addedToCart(item, isAdd) {
        console.log(item);
        console.log(isAdd);

        if (isAdd) {
            this.state.cart.push(item);
            this.state.countItens++;

            console.log('foi add');
        }

    }

    render() {
        this.addedToCart(this.props.location.shopping, this.props.location.addedToCart);
        return (
            <div>

                <div className="cartList">

                    <h2>SACOLA</h2>
                    <span>Qtde: {this.state.countItens}</span>
                    {this.showProductsInformation()}
                </div>
                <div>
                    <Products />

                </div>
            </div>

        );
    }

}