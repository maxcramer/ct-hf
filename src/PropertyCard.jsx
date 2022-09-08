import { FaBookmark } from "react-icons/fa";

function PropertyCard({ property, addItem }) {
  let image = `https://mr0.homeflow.co.uk/${property.photos[0]}`;
  let backupImage =
    "https://www.idxhome.com/service/resources/images/listing/no-photo.jpg?1662456134206";
  return (
    <div className="border-2 bg-gray-50">
      <div className="relative">
        <img
          src={image}
          alt={property.display_address}
          onError={(event) => {
            event.target.src = backupImage;
            event.onerror = null;
          }}
        />

        <button
          className="absolute top-0 right-2"
          title="Click to bookmark this property"
          onClick={() => addItem(property)}
        >
          <FaBookmark className="text-yellow-400" size="40" />
        </button>

        <p className="absolute bottom-0 right-0 px-2 py-1 border-t border-l bg-gray-50">
          {property.price}
        </p>
      </div>

      <div className="px-3 py-2">
        <p>{property.display_address}</p>
      </div>
    </div>
  );
}

export default PropertyCard;
