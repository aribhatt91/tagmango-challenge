import BodyWrapper from "@/components/BodyWrapper";
import ChallengePageHeader from "@/components/ChallengePageHeader";
import Main from "@/components/Main";
import NavBar from "@/components/NavBar";
import SideNav from "@/components/SideNav";

export default function Home() {
  return (
    <div className="min-h-screen bg-background lg:mt-29">
     
      <BodyWrapper>
        <div className="z-10 w-full fixed">
           <div className='lg:hidden fixed top-0 left-0 h-34 w-full'>
              <div className="mobile-overlay absolute w-full h-full rounded-b-3xl outline-none bg-[url('/images/sidenav-bg-mobile.png')] border-transparent overflow-hidden">
                  <div className="overlay w-full h-full backdrop-blur-[50px]"></div>
              </div>
          </div>
          <NavBar/>
          <ChallengePageHeader page={1}/>
          <SideNav/>
        </div>
        <Main/>
      </BodyWrapper>
      
    </div>
  );
}
