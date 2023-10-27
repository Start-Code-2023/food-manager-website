import ItemComponent from "./item"

interface Props{
    items: Item[]
}


export default function ItemList({items}: Props){

    return (
        <div className="w-96 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900">In my fridge:</h5>
           </div>
           <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-700">
                   {items.map((item)=>{
                     return (<ItemComponent key={item.id} name={item.name} quantity={item.quantity} />)
                   })}
                </ul>
           </div>
        </div>
        )
}