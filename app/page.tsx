import ItemList from '@/components/itemList'
import Image from 'next/image'
import { demoItems } from '@/constants/demo_items'

export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-2xl font-bold">Food Manager</h1>


        <h3>You have:</h3>

        <div>
          <ItemList items={demoItems} />
        </div>


    </main>
  )
}
