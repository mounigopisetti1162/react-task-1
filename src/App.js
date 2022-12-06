import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import { faCheck } from '@fortawesome/free-solid-svg-icons'
// import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Top from './Task';

const App=()=> {
  const list1=<ul>
     <li><span class="fa-li"><i class="fa-solid fa-check"></i></span>Single User</li>
     <li><span class="fa-li"><i class="fas faCheck"></i></span>5GB Storage</li>
      <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
      <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
      <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Unlimited
      Private Projects</li>
      <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated
      Phone Support</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Free Subdomain
              </li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
                Reports</li> 
  </ul>
  const list2=<ul class="fa-ul">
  <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>5 Users</strong></li>
  <li><span class="fa-li"><i class="fas fa-check"></i></span>50GB Storage</li>
  <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
  <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
  <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>
  <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>
  <li><span class="fa-li"><i class="fas fa-check"></i></span>Free Subdomain</li>
  <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
    Reports</li>
</ul>
const list3=<ul class="fa-ul">
<li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited Users</strong>
</li>
<li><span class="fa-li"><i class="fas fa-check"></i></span>150GB Storage</li>
<li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
<li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
<li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>
<li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>
<li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited</strong> Free
  Subdomains</li>
<li><span class="fa-li"><i class="fas fa-check"></i></span>Monthly Status Reports</li>
</ul>
  const data=[{title:"FREE",price:"$0",list:list1},
  {title:"PLUS",price:"$9",list:list2},{title:"PRO",price:"$49",list:list3}]
  
  return (
    <>
   <section className="pricing py-5">

   <div className='price'>
   
   <Top details={data} />
   
   </div>
   </section>
   </>
    
  );
}

export default App;
