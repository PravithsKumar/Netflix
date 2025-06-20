import logo from './Background/netflix-logo.png';
import poster from './Images/8e8c2970cd564a834a32f9ee2a099cc5.jpg'
import profile from './Images/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg'
import bb from './Images/thumb-1920-1111278.jpg'
import dark from './Images/global.png'
import st from './Images/OIP.jfif'
import dr from './Images/R.jfif'
import pd from './Images/pb.jpg'
import all from './Images/all.webp'
import br from './Images/BrBa.webp'
import walkinddead from './Images/Walking-Dead.jfif'
import Wednesday from './Images/wednesday.jpg'
import squidGame from './Images/squid-game.jfif'
import moneyHeist from './Images/Money-heist.webp'
import ozark from './Images/ozark.webp'
import './Home.css'
import guilt from './Images/Guilty.webp'
import Chhava from './Images/Chhava.webp'
import fractured from './Images/fractured.webp'
import jaat from './Images/Jaat.jfif'
import maharaja from './Images/Maharaja.jfif'
import platform from './Images/Platform.jfif'
import Call from  './Images/The call.jfif'
import vashi from './Images/Vaashi.jpg'
import uncharted from './Images/Uncharted.jfif'
import veronica from './Images/veronica.webp'
import deathnote from './Anime/death-note.jpg'
import drStone from './Anime/dr-stone.webp'
import haikyu from './Anime/haikyu2.webp'
import hunter from './Anime/hunter-x-hunter.avif'
import jujutsu from './Anime/jujutsu.webp'
import MyHero from './Anime/My_Hero_Academia_Heroes_Rising.webp'
import parasyte from './Anime/Parasyte.jpg'
import sakamoto from './Anime/sakamoto.jpg'
import vinland from './Anime/vinland.jfif'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import CopyrightIcon from '@mui/icons-material/Copyright';
import logo2 from './Background/netflix_PNG10.png'

function Home()
{
    return(
        <div className='main'>
            <div className='header'>
            <img src={logo} alt="netflix" className='home-logo-desktop'/>
            <img src={logo2} alt="" className='home-logo-mobile'/>
               <div className='mhide'>
                    <b className='opt'>Tv Shows</b>
                    <b className='opt'>Movies</b>
                    <b className='opt'>Kids</b>
                    <b className='opt'>DVDs</b>
                </div>
            <input type="search" placeholder='search' className='search'/>
            <img src={profile} alt="" className='profile'/>
            </div>
            <div className='scroll'>
                <div className='scroll-i'><img src={poster} alt="" className='poster1'/></div>
                <div className='scroll-i'><img src={bb} alt="" className='poster1'/></div>
                <div className='scroll-i'><img src={dark} alt="" className='poster1'/></div>
            </div>
            <div className='heading'>
                <b className='sideheading'>Tv Shows</b>
            </div>
            <div className='series'>
                <img src={st} alt="" className='seriesp'/>
                <img src={dr} alt="" className='seriesp'/>
                <img src={pd} alt="" className='seriesp'/>
                <img src={all} alt="" className='seriesp'/>
                <img src={br} alt="" className='seriesp'/>

                <img src={ozark} alt="" className='seriesp'/>
                <img src={Wednesday} alt="" className='seriesp'/>
                <img src={walkinddead} alt="" className='seriesp'/>
                <img src={squidGame} alt="" className='seriesp'/>
                <img src={moneyHeist} alt="" className='seriesp'/>
                
            </div>
            <div className='heading'>
            <b className='sideheading'>Movies</b>
            </div>
            <div className='series'>
                <img src={Chhava} alt="" className='seriesp'/>
                <img src={fractured} alt="" className='seriesp'/>
                <img src={guilt} alt="" className='seriesp'/>
                <img src={jaat} alt="" className='seriesp'/>
                <img src={maharaja} alt="" className='seriesp'/>
                <img src={platform} alt="" className='seriesp'/>
                <img src={Call} alt="" className='seriesp'/>
                <img src={uncharted} alt="" className='seriesp'/>
                <img src={vashi} alt="" className='seriesp'/>
                <img src={veronica} alt="" className='seriesp'/>
            </div>

            <div className='heading'>
            <b className='sideheading'>Anime</b>
            </div>
            <div className='series'>
                <img src={deathnote} alt="" className='seriesp'/>
                <img src={drStone} alt="" className='seriesp'/>
                <img src={haikyu} alt="" className='seriesp'/>
                <img src={hunter} alt="" className='seriesp'/>
                <img src={jujutsu} alt="" className='seriesp'/>
                <img src={MyHero} alt="" className='seriesp'/>
                <img src={parasyte} alt="" className='seriesp'/>
                <img src={sakamoto} alt="" className='seriesp'/>
                <img src={vinland} alt="" className='seriesp'/>
                <img src={veronica} alt="" className='seriesp'/>
            </div>

            <div className='footer1'>
                <div className='icon'>
                <FacebookIcon/>
                <InstagramIcon/>
                <TwitterIcon/>
                <YouTubeIcon/>
                </div>
                <div className='nav1'>
                    <p>Audio Description</p>
                    <p>Help Centre</p>
                    <p>Gift Cards</p>
                    <p>Media Centre</p><br />
                </div>

                <div className='nav2'>
                    <p>Investor Relations</p>
                    <div className='j'>
                    <p>Jobs</p>
                    </div>
                    <p className='term'>Terms of use</p>
                    <p>Privacy</p><br />
                </div>

                <div className='nav3'>
                    <p>legal Notices</p>
                    <p className='coki'>Cookies Preferences</p>
                    <p className='coo'>Coorporate Information</p>
                    <p>Contact us</p><br />
                </div>

                <div className='outerSquare'>
                    <div className='innerSquare'>
                        <p>Service Code</p>
                    </div>
                </div>

                <div className='copyright'>
                    <CopyrightIcon style={{fontSize: "12px"}}/> 
                    <span>1997-2025 Netflix,Inc.</span>
                </div>
            </div>
        </div>
    )
}

export default Home