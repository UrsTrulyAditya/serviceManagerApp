const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 overflow-hidden">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-3">{service.description}</p>
        <p className="text-green-600 font-bold text-lg">
          {service.price}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
