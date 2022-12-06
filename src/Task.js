const Top = ({details})=>{
    return(

    <div className='row' >
        
    {details.map((x)=>(
        
   <div className='col-lg-4' > 
   <div className="card mb-5 mb-lg-0">
   <div class="card-body">
   <h6 className="title-1">{x.title}</h6>
   <h1 className="title-2">{x.price}<span className="month">/month</span></h1> 
   <hr></hr>
   <h6>{x.list}</h6>
   <div class="d-grid">
    <a href="#" className="btn btn-primary text-uppercase">Button</a>
    </div>
    </div>
    </div>
    </div>
   
   
    
    
))}

</div>);
    }
    export default Top;