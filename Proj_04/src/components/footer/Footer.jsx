import React from 'react'
import Layout from '../layout/Layout'

const Footer = () => {
  return (
    <div className=' w-full bg-base-300'>
      <Layout>
        <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
          <aside>
            <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
          </aside>
        </footer>
      </Layout>
    </div>
  )
}

export default Footer
