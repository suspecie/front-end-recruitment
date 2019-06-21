import React from 'react';
import PRODUCT_DATA from '../../data/products.json';
import { FormattedNumber } from 'react-intl';

export default class Products extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            products: PRODUCT_DATA,
            addedToCart: false,
        }
    }


    render() {
        const productList = this.state.products.products;
        const list = productList.map((item, index) => {
            console.log('item:', item);
            const installmentValue = item.price / item.installments;
            return (
                <div className="card" key={index}>
                    <img src={item.image} alt="Placeholder de imagem tamanho 250 x 350." />
                    <p>{item.title}</p>
                    <hr/>
                    <p>
                    <FormattedNumber
                        value={item.price}
                        style="currency"
                        currency={item.currencyId} />
                    </p>
                    <p> ou {item.installments} x  {installmentValue.toFixed(2)}</p>
                </div>
            );
        });

        return ( <div className="container">{list}</div>);
    }

}