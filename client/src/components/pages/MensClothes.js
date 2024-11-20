import React from 'react';
import { useNavigate } from 'react-router-dom';

const MensClothes = () => {
    const navigate = useNavigate();

    const handleCardClick = (cardId) => {
        navigate(`/productDetails/${cardId}`);
    };

    const products = [
        {
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },
        {
            id: 2,
            name: 'Basic Shirt',
            href: '#',
            imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },
        {
            id: 3,
            name: 'Basic Pant',
            href: '#',
            imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$40',
            color: 'Black',
        }
    ]

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full border border-gray-300 rounded-md pl-10 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <svg
                        className="absolute left-3 top-2.5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width="20"
                        height="20"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-4.35-4.35m1.85-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} onClick={() => handleCardClick(product.id)} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    alt={product.imageAlt}
                                    src={product.imageSrc}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default MensClothes;
