import React from 'react';

const Women = () => {
  const products = [
    {
      title: 'Titan',
      image:
        'https://cdn1.titaneyeplus.com/tep_m2_prod/media/catalog/product/cache/614e2406485059d8c03655e235f03687/t/s/ts1026mfc3_3_lar.webp',
      price: '450',
    },
    {
      title: 'lenskart',
      image:
        'https://cdn1.titaneyeplus.com/tep_m2_prod/media/catalog/product/cache/614e2406485059d8c03655e235f03687/t/s/ts1026mfc3_3_lar.webp',
      price: '450',
    },
    {
      title: 'Titan2',
      image:
        'https://cdn1.titaneyeplus.com/tep_m2_prod/media/catalog/product/cache/614e2406485059d8c03655e235f03687/t/s/ts1026mfc3_3_lar.webp',
      price: '450',
    },
    {
      title: 'Titan3',
      image:
        'https://cdn1.titaneyeplus.com/tep_m2_prod/media/catalog/product/cache/614e2406485059d8c03655e235f03687/t/s/ts1026mfc3_3_lar.webp',
      price: '450',
    },
  ];
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product) => (
            <a href="/product/look" className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={product.image}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {product.title}
                </h2>
                <p className="mt-1">{product.price}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Women;
