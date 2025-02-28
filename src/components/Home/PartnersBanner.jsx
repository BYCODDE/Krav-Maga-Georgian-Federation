import React from 'react';

const partners = [
  {
    id: 1,
    name: "Brand One",
    description: "Leading industry innovator with a focus on cutting-edge technology and sustainable solutions.",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Brand Two",
    description: "Achieve mental clarity and focus for effective self-defense techniques, ensuring you stay sharp and ready.",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Brand Three",
    description: "Delivering excellence globally with a commitment to quality and customer satisfaction.",
    image: "https://via.placeholder.com/100",
  }
];

function PartnersBanner() {
  return (
    <div className="w-full h-auto py-12 bg-gray-100 flex items-center justify-center px-4 sm:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {partners.map((partner) => (
          <div key={partner.id} className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full overflow-hidden">
              <img 
                src={partner.image} 
                alt={partner.name} 
                className="w-full h-full object-cover" 
              />
            </div>

            <div className="flex-1 min-w-0 text-center sm:text-left">
              <h3 className="text-xl font-bold text-gray-800 truncate">
                {partner.name}
              </h3>
              <p className="text-gray-600 text-sm sm:whitespace-nowrap sm:overflow-hidden sm:overflow-ellipsis">
                {partner.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PartnersBanner;