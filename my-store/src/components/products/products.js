import React from 'react';
import PRODUCT_DATA from '../../data/products.json';
import { FormattedNumber } from 'react-intl';
import { NavLink } from 'react-router-dom';

export default class Products extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            products: PRODUCT_DATA,
            addedToCart: false,
        }
    }

    calculateInstallment(price, installment) {
        if(installment > 0 ) {
            const installmentValue = price / installment;
            return (
                <p>ou {installment} x {installmentValue.toFixed(2)}</p>
            );
        }
    }

    render() {
        const productList = this.state.products.products;
        const list = productList.map((item, index) => {
            console.log('item:', item);    
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
                    {this.calculateInstallment(item.price, item.installments)}
                   
                     <NavLink to={{
                         pathname: '/cart',
                         shopping: item,
                         addedToCart: true
                     }}>
                         <button>Comprar</button>
                     </NavLink>
                </div>
            );
        });

        return ( <div className="container">{list}</div>);
    }

}