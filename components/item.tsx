interface Props{
    name: string,
    quantity: number
    
}

export default function ItemComponent({name, quantity}: Props) {
    return (
        <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate ">
                        {name}
                    </p>
                </div>
                <div className="inline-flex items-center text-sm font-semibold text-gray-900 ">
                    {quantity > 1 ? quantity + " unit(s)": quantity + " unit"} 
                </div>
            </div>
        </li>
    );
}