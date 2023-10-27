import ItemList from '@/components/itemList'
import { demoItems } from '@/constants/demo_items'
import Drawer from '@/components/drawer'

export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
        <h1 className="text-2xl font-bold">Food Manager</h1>
        <h3>You have:</h3>

        <div>
          <ItemList items={demoItems} />
        </div>

        <Drawer />
    </main>
  )
}
