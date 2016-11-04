'use strict'

import React from 'react';
import homeComponent from '../components/homeComponent';

const createHomeHOC = HomeComponent => {
    return (
        class HomeHOC extends React.Component{
            constructor(props){
                super(props);
            }

            componentWillMount () {
                this.props.onLoadCategories();
                this.props.onLoadProducts(); // make this function
                // need to populate cart based on what is on the local storage.
            }

            render () {
                return (
                    <HomeComponent categories={this.props.categories}
                                   products={this.props.products}
                                   cart={this.props.cart}
                                   />
                );
            }
        }
    )
}

export default createHomeHOC(homeComponent);
