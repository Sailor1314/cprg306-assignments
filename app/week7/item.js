export default function Item({ list, onSelect }) {
    const handleClick = () => {
      onSelect(list);
    };
  
    return (
      <div className="bg-blue-500 p-5 rounded" onClick={handleClick}>
        <h3 className="text-2xl"><b>Name:</b> {list.name}</h3>
        <p><b>Id:</b> {list.id}</p>
        <p><b>Quantity:</b> {list.quantity}</p>
        <p><b>Category:</b> {list.category}</p>
      </div>
    );
  }
  