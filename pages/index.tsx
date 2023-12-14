import type { ReactElement } from 'react'

import type { NextPageWithLayout } from './_app'
import Image from 'next/image'
import Overview from '../Components/Overview'
import styles from '../Components/Styles/Index.module.css'

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <div className={styles.indexDiv} >
      <div className={styles.bannerDiv}>
        <Image className={styles.bannerImage} priority={true} src="banner5.svg" alt="banner" width={1000} height={300} />
      </div>
      <Overview />
    </div>)
}

export default Page