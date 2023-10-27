import Button from '@/components/button'
import ItemList from '@/components/itemList'
import { demoItems } from '@/constants/demo_items'

export default function Home() {

  let signedIn = false;


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-mainGreen">
        <span className="text-5xl inline-flex"><h1 className="font-bold">food</h1> manager</span>

        <div>
          {signedIn ? <Button link='/' text='View List'/> : <Button link='/login' text='Login'/>}
        </div>

    </main>
  )
}
