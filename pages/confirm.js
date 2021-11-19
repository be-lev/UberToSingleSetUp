import React from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";
import Map from "./components/Map";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import RideSelector from "./components/RideSelector";

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  const [pickupCoordinates, setPickupCoordinates] = useState([34.78254, 32.088545]);
  const [dropoffCoordinates, setDropoffCoordinates] = useState([34.78254, 32.088545]);

  const getPickupCoordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoibGV2YmVyZ2VyIiwiYSI6ImNrdzNweGYyNTFyNzAybm50eHV3djExdmkifQ.-ZHf3BzWU4jikDAJ3yeyew",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };

  const getDropoffCoordinates = (dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoibGV2YmVyZ2VyIiwiYSI6ImNrdzNweGYyNTFyNzAybm50eHV3djExdmkifQ.-ZHf3BzWU4jikDAJ3yeyew",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropoffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropoffCoordinates(dropoff);
  }, [pickup, dropoff]);
  return (
    <Wrapper>
               <ButtonContainer>
        <Link href="/search">
          <BackButton src="https://i.imagesup.co/images2/e84e1126c8a0ee5edb61775201dbd3ad07f4d25b.jpg" />
        </Link>
      </ButtonContainer>
      {/* map  */}
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      {/* choose ride  */}
      <ConfirmRideContainer>
        <RideSelector
         pickupCoordinates={pickupCoordinates}
         dropoffCoordinates={dropoffCoordinates} />
        <ConfirmRideButtonContainer>
        <ConfirmButton>Confirm ride</ConfirmButton>
        </ConfirmRideButtonContainer>
      </ConfirmRideContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
flex h-screen flex-col z-0
`;
const ConfirmRideContainer = tw.div`
flex-1 flex flex-col h-1/2
`;

const ConfirmRideButtonContainer = tw.div`
border-t-2
`;
const ConfirmButton = tw.div`
bg-black text-white text-center py-1 my-4 mx-4 text-xl
`;
const ButtonContainer = tw.div`
bg-white px-4 z-10 absolute top-4 bg-white shadow-md cursor-pointer
`;
const BackButton = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-2 cursor-pointer
`;