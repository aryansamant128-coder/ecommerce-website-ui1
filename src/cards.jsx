import React from 'react';

export  function Cards() {
  const products = [
    { id: 1, name: "Minimalist Leather Watch", price: "$189.00", badge: "Hot", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80" },
    { id: 2, name: "Premium Cotton Hoodie", price: "$85.00", badge: "Sale", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=400&q=80" },
    { id: 3, name: "Urban Canvas Backpack", price: "$120.00", badge: null, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80" },
    { id: 4, name: "Classic Matte Sunglasses", price: "$65.00", badge: "New", img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=400&q=80" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-8">
      {products.map((product) => (
        <div key={product.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between">
          <div className="relative bg-gray-50 aspect-square overflow-hidden">
            {product.badge && (
              <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full text-white z-10 ${
                product.badge === 'Sale' ? 'bg-red-500' : product.badge === 'Hot' ? 'bg-orange-500' : 'bg-indigo-600'
              }`}>
                {product.badge}
              </span>
            )}
            <img 
              src={product.img} 
              alt={product.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="p-5 flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors line-clamp-1">
                {product.name}
              </h3>
              <div className="flex items-center space-x-1 mt-1 text-yellow-400">
                <span>★★★★★</span>
                <span className="text-xs text-gray-400 font-normal">(42 reviews)</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900">{product.price}</span>
              <button className="bg-gray-900 hover:bg-indigo-600 text-white text-xs font-semibold px-3 py-2 rounded-md transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}