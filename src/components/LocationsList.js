import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const LocationList = props => {
  // TODO: Add useState to track data from useEffect
  const[location, setLocation] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getLocation = () => {
      axios.get('https://rickandmortyapi.com/api/location') 
      .then(res => {
        console.log(res.data.results)
        setLocation(res.data.results);
      }) 
      .catch(err => {
        console.log('Catch error', err)
      })
    }
    getLocation();
  }, []);

  return (
    <section className="location-list grid-view">
      <h2>
      {
        location.map(locate => (
          <Link to={`/location/${locate.id}`}>
            <LocationDetails key={locate.id} locate={locate}/>
          </Link>
        ))
      }
      </h2>
    </section>
  );
}
function LocationDetails({ locate }) {
  const { name, type, residents } = locate;
  return (
    <Card>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>{`${type}`}</Card.Meta>
      <Card.Description>
        
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {residents.length} Residents
      </a>
    </Card.Content>
  </Card>
  );
}

export default LocationList;