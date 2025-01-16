import React from 'react';
import Counter from '../components/Counter';

function Footer() {

  let footerContent;
  
  footerContent = (
    <footer>
        <div>
          <p>Pied de page</p>
        </div>
        <Counter depart="10" />
    </footer>
  );

  return footerContent;

}

export default Footer;