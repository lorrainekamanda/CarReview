import React from 'react';



class Content extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      cars: []
    };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:5000/api')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            cars: result
          });
        },
        // error handler
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {

    const { error, isLoaded, cars } = this.state;

    if (error) {
      return (
        <div className="col">
          Error: {error.message}
        </div>
      );
    } else if (!isLoaded) {
      return (
        <div className="col">
          Loading...
        </div>
      );
    } else {
      return (
      
         
       
        <div className="container-fluid" >
         <div className="row content">
<div className="col-md-2 dash" >
        <div class="card card-dash" >
            <div class="row no-gutters">
             
              <div class="col-lg-12">
                <div class="card-body" >
                  <h5 class="card-title">Sort By</h5>
                  <ul class="list-group">
                    <li class="list-group-item list-group-item-action list-group-item-warning">Fuels</li>
                    <li class="list-group-item list-group-item-action list-group-item-light">Motor:</li>
                    <li class="list-group-item list-group-item-action list-group-item-warning">Brands</li>
                     <li class="list-group-item list-group-item-light">Fuel:</li>
                     
              
                   </ul>
                </div>
              </div>
            </div>
          </div>
    </div>



       
        
        {cars.map(car => 
          <div className="col-md-8 name-col" >
          <div className = "name">
          <h4>{car.name}</h4>
               
               
        </div>
          <div className="card " >
          <div className="row no-gutters">
          <div className="col-md-5 img-col" >
            <img src="'static/img/'+{car.image_file}" class="card-img" alt="..;"/> 
          </div>
      
          <div className="col-md-6">
            <div className="card-body">
              
        <ul className="list-group">
                   <li className="list-group-item list-group-item-action list-group-item-warning">Price:${car.price}</li>
                   <li className="list-group-item list-group-item-action list-group-item-light">Motor:{car.motor}</li>
                   <li className="list-group-item list-group-item-action list-group-item-warning">Gearbox:{car.gearbox}</li>
                    <li className="list-group-item list-group-item-light">Fuel:{car.fuel}</li>
                    <li className="list-group-item list-group-item-action list-group-item-warning">Brand:{car.brand}</li>
                    <li className="list-group-item list-group-item-action list-group-item-warning">Registration:{car.register}</li>
                  </ul>
        
                  </div>
          </div>
          </div>
          </div>
          </div>
        
        
        
        )}
      </div>
      </div>  
         
          
         
        
        

      );
    }
  }
}

export default Content;


