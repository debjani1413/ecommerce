    const request = await fetch('https://mock.shop/api?query={products(first:%2040){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}')
    export const response = await request.json();

