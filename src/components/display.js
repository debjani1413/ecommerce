import React from "react";
import useProduct from "../hooks/useProduct";
import Card from "./card";

const Display = ({showLimited, start, end}) => {
    const products = useProduct();

    return (
        <div className="display">
            {(showLimited ? products.slice(start,end) : products).map(({ node }) => {
                return (
                    <Card 
                        key={node.id}
                        productImg={node?.featuredImage?.url}
                        title={node?.title}
                        price={node?.variants?.edges[0]?.node?.price?.amount} 
                        currency={node?.variants?.edges[0]?.node?.price?.currencyCode}
                    />
                );
            })}
        </div>
    );
}

export default Display;
