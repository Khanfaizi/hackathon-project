const Sidebar = () => {
    return (
      <div className="w-64 p-4 border-r border-gray-200">
        <h2 className="text-lg font-bold mb-4">New (500)</h2>
        <ul className="space-y-4">
          <li> 
            <h3 className="font-semibold">Shoes</h3>
          </li>
          <li>Sports Bras</li>
          <li>Tops & T-Shirts</li>
          <li>Hoodies & Sweatshirts</li>
          <li>Jackets</li>
          <li>Trousers & Tights</li>
          <li>Shorts</li>
          <li>Tracksuits</li>
          <li>Accessories & Equipment</li>
        </ul>
        
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Gender</h3>
          <div className="space-y-2">
            <label>
              <input type="checkbox" className="mr-2" /> Men
            </label>
            <label>
              <input type="checkbox" className="mr-2" /> Women
            </label>
            <label>
              <input type="checkbox" className="mr-2" /> Unisex
            </label>
          </div>
        </div>
  
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Kids</h3>
          <div className="space-y-2">
            <label>
              <input type="checkbox" className="mr-2" /> Boys
            </label>
            <label>
              <input type="checkbox" className="mr-2" /> Girls
            </label>
          </div>
        </div>
  
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Shop By Price</h3>
          <div className="space-y-2">
            <label>
              <input type="checkbox" className="mr-2" /> Under ₹2,500
            </label>
            <label>
              <input type="checkbox" className="mr-2" /> ₹2,501 - ₹
            </label>
          </div>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  