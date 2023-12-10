import type { ReactElement } from 'react'

import type { NextPageWithLayout } from './_app'
import Card from '@/components/Card'
 
const Page: NextPageWithLayout = () => {
  return <p>hello world</p>
}
 
Page.getLayout = function getLayout(page: ReactElement) {
  return (
   <div>{page}
        <Card title="hello" description="world" href="/recipe/1" />
        <Card title="hello2" description="world2" href="/recipe/2" />
   </div>)
}
 
export default Page