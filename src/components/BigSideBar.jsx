import React from 'react'
import Wrapper from '../assets/wrappers/BigSidebar'
import NavLinks from './NavLinks';
import { useSelector } from 'react-redux';
import Logo from './Logo';

const BigSideBar = () => {
    
   const { isSidebarOpen } = useSelector((store) => store.user);
   return (
     <Wrapper>
       <div
         className={
           isSidebarOpen
             ? "sidebar-container "
             : "sidebar-container show-sidebar"
         }
       >
         <div className="content">
           <header>
             <Logo />
           </header>
           <NavLinks />
         </div>
       </div>
     </Wrapper>
   );
}

export default BigSideBar
