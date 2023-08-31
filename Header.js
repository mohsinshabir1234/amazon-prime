import React from 'react';
import './style.css';
function Header() {
    return (
        <>
        <div className='head'>
            
            <div className='navbar'>
                <a>prime video</a>
                <a href='#'> Home </a>
                <a href="https://www.primevideo.com/storefront/ref=atv_hm_pri_c_9zZ8D2_me_hom?contentType=home&contentId=store"> Store </a>
                <a href="https://www.primevideo.com/storefront/ref=atv_me_hom_c_9zZ8D2_live_hom?contentType=home&contentId=live"> Live TV </a>
                <a href='https://www.primevideo.com/categories/ref=atv_live_hom_c_9zZ8D2_cat_cat'> Categories </a>
                
            </div>

        </div>
        
        </>
    );
}
export default Header;