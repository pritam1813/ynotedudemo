
import PageLinks from '@/components/common/PageLinks'
import Preloader from '@/components/common/Preloader'

import FooterOne from '@/components/layout/footers/FooterOne'
import Header from '@/components/layout/headers/Header'

import ShopOrder from '@/components/shop/ShopOrder'
import React from 'react'
export const metadata = {
  title: 'Shop-order || Ynotedu - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with Ynotedu, the most impressive LMS template for online courses, education and LMS platforms.',
  
}
export default function page() {
  return (
    <div className="main-content  ">
      <Preloader/>

        <Header/>
        <div className="content-wrapper js-content-wrapper overflow-hidden">
            <PageLinks/>

            <ShopOrder/>
            
            <FooterOne/>
        </div>

    </div>
  )
}

