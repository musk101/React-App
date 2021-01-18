import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component
{
   onSearchSubmit(term){
      axios.get('https://api.unsplash.com/search/photos',
      {
         params:{query: term}, //parameter query passed and given it value as term
headers:{
   Authorization: 'Client-ID DCi_gHO2f_G1ahBxWdMTYbey19TTaY3DN_7Z08zSkiQ'
}
      });
   }
   render()
   {
      return(
         <div className="ui container">
         <SearchBar onSubmit={this.onSearchSubmit}/>
         </div>
      )
   }
}

export default App;