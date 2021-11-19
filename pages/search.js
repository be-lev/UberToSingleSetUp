import React from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";
import { useEffect, useState } from "react";

const search = () => {
    const [pickup, setPickup] = useState("")
    const [dropoff, setDropoff] = useState("")
  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/">
          <BackButton src="https://i.imagesup.co/images2/e84e1126c8a0ee5edb61775201dbd3ad07f4d25b.jpg" />
        </Link>
      </ButtonContainer>
      <InputContainer>
        <FormToIcons>
          <Circle src="https://toppng.com/uploads/preview/circle-11552760405rj0vtcz24q.png" />
          <Line src="https://www.nicepng.com/png/detail/158-1588877_what-is-the-name-of-this-line-answer.png" />
          <Square src="https://banner2.cleanpng.com/20180530/gwt/kisspng-screenwriter-writing-book-war-small-square-5b0ecf444e6d21.3638013015276972203213.jpg" />
        </FormToIcons>
        <InputBoxes>
          <Input placeholder="Enter pickup location" value={pickup} onChange={(e)=>setPickup(e.target.value)} />
          <Input placeholder="Where to?" value={dropoff} onChange={(e)=>setDropoff(e.target.value)}/>
        </InputBoxes>
        <PlusIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png" />
      </InputContainer>
      <SavedPlaces>
        <StarIcon src="https://as2.ftcdn.net/v2/jpg/02/22/86/01/500_F_222860165_iU2ng07ehFQgN5SYc1r3NFu80p1BpRCO.jpg" />
        Saved places
      </SavedPlaces>
      <Link href={{pathname:"/confirm" , query: {pickup:pickup, dropoff:dropoff}}}>
      <ConfirmLocation>Confirm Locations</ConfirmLocation>
      </Link>
    </Wrapper>
  );
};
export default search;

const Wrapper = tw.div`
bg-gray-200 h-screen
`;
const ButtonContainer = tw.div`
bg-white px-4
`;
const BackButton = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-2 cursor-pointer
`;
const InputContainer = tw.div`
bg-white flex items-center px-4 mb-2
`;
const FormToIcons = tw.div`
w-10 flex flex-col mr-2 items-center
`;
const Circle = tw.img`
h-2.5  flex-col
`;
const Line = tw.img`
h-10 
`;
const Square = tw.img`
h-3 
`;
const InputBoxes = tw.div`
flex flex-col flex-1 
`;
const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-3 outline-none border-none
`;
const PlusIcon = tw.img`
h-10 w-10 bg-gray-200 rounded-full ml-2
`;
const SavedPlaces = tw.div`
flex items-center bg-white px-4 pw-2 py-2
`;
const StarIcon = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`;
const ConfirmLocation = tw.div`
bg-black text-white text-xl flex justify-center text-center p-2 m-4 w-80% cursor-pointer
`;
