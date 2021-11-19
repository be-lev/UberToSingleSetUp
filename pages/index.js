import Link from "next/link";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import { useEffect, useState } from "react";
import {signOut, onAuthStateChanged} from 'firebase/auth'
import {app , provider, auth} from '../firebase'
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();
    const [user, setUser] = useState(null)

    useEffect(() => {
     return onAuthStateChanged(auth, user => {
         if(user){
             setUser({
                 name: user.displayName,
                 photoUrl: user.photoURL,
             })
         }else {
             setUser(null)
             router.push('/login')
         }
     })
    }, [])
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <SingleLogo src="https://i.imagesup.co/images2/4ac574c45bcc12e2fb8eee4545ef9382eddd3666.jpg" />
          <Profile>
            <Name>{user && user.name}</Name>
            <UserImage src={user && user.photoUrl} onClick={()=> signOut(auth)}/>
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.imagesup.co/images2/8366a635a31fc374f48f7cc7332107f803219416.jpg" />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="https://i.imagesup.co/images2/fe9c3215d3065826b6da00c6598fb8a4733098ed.jpg" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.imagesup.co/images2/787aa792bc1a6e7033b6bccbca8d45849d22088a.png" />
            Reserve
          </ActionButton>
        </ActionButtons>
        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex flex-col h-screen
`;
const ActionItems = tw.div`
flex-1 p-4
`;
const Header = tw.div`
flex justify-between items-center
`;
const SingleLogo = tw.img`
h-28
`;
const Name = tw.div`
mr-4 w-20 text-sm
`;
const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-2 cursor-pointer
`;
const Profile = tw.div`
flex items-center
`;
const ActionButtons = tw.div`
flex 
`;
const ActionButton = tw.div`
flex flex-col bg-gray-200 flex-1 m-1 h-32 items-center justify-center rounded-lg transform hover:scale-105 transition text-xl
`;
const ActionButtonImage = tw.img`
h-3/5
`;
const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`;
