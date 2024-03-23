import React from 'react';

const data = [
    {
        src: 'https://images.unsplash.com/photo-1608667508764-33cf0726b13a',
        title: 'Jhang Air Max sneakers',
        desc: 'In this product card, the link goes on top of all the content except the button. It overlaps even this text. But if the text and other elements are assigned position: relative, then such elements will be on the top of the link.',
        in_stock: 'In stock',
        price: '6452',
        price_old: '8054',
        btn_text: 'Add to your cart',
    },
    {
        src: 'https://images.unsplash.com/photo-1608666634759-4376010f863d',
        title: 'Кроссовки Shang Air Max',
        desc: 'В этой карточке товара ссылка идет поверх всего контента, кроме кнопки. Она перекрывает даже этот текст. Но если тексту и другим элементам присвоить position: relative, то такие элементы будут поверх ссылки.',
        in_stock: 'В наличии',
        price: '6452',
        price_old: '8054',
        btn_text: 'Добавить в корзину',
    },
    {
        src: 'https://images.unsplash.com/photo-1608667508764-33cf0726b13a',
        title: 'Valenki from Matveyevna',
        desc: 'Matveyevna makes felt boots very well and even supplies them to 112 countries in South Africa.',
        in_stock: 'In stock',
        price: '11680',
        price_old: '15068',
        btn_text: 'Добавить в корзину',
    },
];





const ProductList = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {data.map((entry, index) => (
                <div key={index} className="product-card relative overflow-hidden flex flex-col rounded shadow-md transition duration-200 ease-in-out hover:shadow-lg">
                    <a href="https://aharito.ru" target="_blank" className="product-card__image relative">
                        <img src={`${entry.src}?crop=edges&cs=tinysrgb&fit=crop&fm=jpg&w=600&h=450&q=80`} alt="Product List Card UI" className="w-full" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-0 hover:opacity-100"></div>
                    </a>
                    <div className="product-card__body flex flex-col flex-grow p-4">
                        <a href="https://aharito.ru" target="_blank" className="product-card__title text-lg font-semibold text-gray-800 hover:text-green-500">{entry.title}</a>
                        <p className="product-card__desc text-sm text-gray-600 line-clamp-3">{entry.desc}</p>
                        <div className="product-card__stock flex items-center text-green-500 text-sm font-medium mt-auto mb-2">
                            <span className="w-3 h-3 bg-green-500 rounded-full mr-1"></span>
                            {entry.in_stock}
                        </div>
                        <div className="product-card__price flex items-end mb-3">
                            <span className="price__current text-lg font-semibold text-gray-800">{entry.price}р</span>
                            <span className="price__old text-sm text-gray-500 line-through ml-2">{entry.price_old}р</span>
                        </div>
                        <div className="product-card__labels absolute top-0 right-0 flex gap-2 p-4">
                            <span className="label label_hit bg-green-500 text-white text-xs font-medium uppercase">Хит</span>
                            <span className="label label_sale bg-red-500 text-white text-xs font-medium uppercase">Скидка -25%</span>
                        </div>
                    </div>
                    <div className="product-card__btn text-center">
                        <button className="btn btn_product">{entry.btn_text}</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
