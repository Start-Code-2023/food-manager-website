import ItemList from '@/components/itemList'
import { demoItems } from '@/constants/demo_items'
import Drawer from '@/components/drawer'

import NavBar from '@/components/nav'

export default function FridgePage() {


  return (
    <>
      <NavBar />
      <main className="flex h-screen flex-col items-center p-24 pt-10 justify-between bg-white">
        <div>
          <ItemList items={demoItems} />
        </div>

        <Drawer />
      </main>
    </>

  )
}
