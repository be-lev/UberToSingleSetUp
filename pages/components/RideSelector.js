import React from "react";
import tw from "tailwind-styled-components";
import carListFile from "../../assets/data/carList";
import { useEffect, useState } from "react";

const RideSelector = ({ pickupCoordinates, dropoffCoordinates }) => {
  const [rideDuration, setRideDuration] = useState(0);

  useEffect(() => {
    fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/
      ${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}
      ?access_token=pk.eyJ1IjoibGV2YmVyZ2VyIiwiYSI6ImNrdzNweGYyNTFyNzAybm50eHV3djExdmkifQ.-ZHf3BzWU4jikDAJ3yeyew`)
      .then(res=>res.json()).then(data=>setRideDuration(data.routes[0].duration / 100));
  }, [pickupCoordinates,dropoffCoordinates]);

  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        {carListFile.map((car, index) => {
          return (
            <Car>
              <CarImage src={car.imgUrl} />
              <CarDetails>
                <Service>{car.service}</Service>
                <Time>5 min away</Time>
              </CarDetails>
              <Price>$ {(rideDuration*car.multiplayer).toFixed(2)}</Price>
            </Car>
          );
        })}
      </CarList>
    </Wrapper>
  );
};

export default RideSelector;

const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`;
const Title = tw.div`
text-center text-gray-500 text-xs py-2 border-b
`;
const CarList = tw.div`
overflow-y-scroll
`;
const Car = tw.div`
flex p-4 items-center
`;
const CarImage = tw.img`
h-14 w-25 mr-4
`;
const CarDetails = tw.div`
flex-1 flex flex-col
`;
const Service = tw.div`
font-medium flex-1
`;
const Time = tw.div`
text-xs flex-0.7
`;
const Price = tw.div`
text-sm
`;
