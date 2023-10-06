export default function Item({name, quantity, category}){
    return(
        <div>
            <p>
                Name: {name}
            </p>
            <p>
                Quantity: {quantity}
            </p>
            <p>
                Catrgory: {category}
            </p>
        </div>
    );
}