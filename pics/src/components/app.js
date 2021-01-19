import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
class App extends React.Component
{
state = { images: []} ;  //default value and property name
  onSearchSubmit= async term =>
  {
     const response= await unsplash
      .get('https://api.unsplash.com/search/photos',
      {
         params:{query: term}, //parameter query passed and given it value as term
headers:{
   Authorization:
    'Client-ID DCi_gHO2f_G1ahBxWdMTYbey19TTaY3DN_7Z08zSkiQ'
}
      });
      this.setState({images: response.data.results}); //called arrow function
   }
   render()
   {
      return(
         <div className="ui container">
         <SearchBar onSubmit={this.onSearchSubmit}/>
         Found: {this.state.images.length} images
         </div>
      )
   }
}

export default App;