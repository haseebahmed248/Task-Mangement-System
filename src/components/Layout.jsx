import React from 'react'
import Sidebar from '../partials/Sidebar'
import Header from '../partials/Header'

function Layout({children}) {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <main className="grow">
                {children}
            </main>
        </div>
    </div>
  )
}

export default Layout