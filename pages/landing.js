import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../components/firebaseConfig";
import Image from "next/image";
import Link from "next/link";

function Landing(){
    const [user] = useAuthState(auth);
    return(
        <>
        <div className="landing has-background-grey">

            <div className='columns'>
                <div className='column has-text-left  is-family-sans-serif mt-6 ml-6 has-text-white	'>
                <p className='text is-size-5'><strong>Dev</strong> Trap Trader</p>
                <p className='text is-size-1'><strong className='text has-text-white'>Real Trading Course on Intraday and FnO </strong></p>
                <p className='text is-size-4 has-text-justified'>Welcome to the Trading Course designed to equip you with the knowledge skills and strategies necessary to navigate the complexities of financial markets effectively. Whether youre a novice trader looking to build a solid foundation or an experienced investor seeking to enhance your trading prowess this course offers a comprehensive journey through the dynamics of trading.</p>
                <br />
                {
            user ? 
            <Link className="button is-dark" href="/course">Explore  </Link>
            :
            <Link className="button is-dark" href="/login">
            <strong>Explore  </strong>
          </Link>

          }
                </div>
               
                <div className='column mt-6 ml-6'>
                    <Image 
                    src="/hero.png"
                    width={700}
                    height={700}
                    alt="hero"
                    />
                </div>
            </div>
        </div>

        <div className='columns box is-centered mt-6 ml-6'>
            <div className='column is-5'>
            <Image 
                    src="/stock1.jpg"
                    width={700}
                    height={700}
                    alt="stock1"
                    />

            </div>
            <div className='column is-half  has-text-left  is-family-sans-serif '>
                <h2 className='text is-size-4'><strong>Feature of My course-</strong></h2>
                <ul>
                    <li>
                        <p>
                        <strong><i className='fas fa-book'>&nbsp;</i>Comprehensive Curriculum</strong> -  Our trading course covers all essential aspects of trading, from fundamental analysis to advanced trading strategies, ensuring a well-rounded education for beginners and experienced traders alike.
                        </p>
                    </li>
                    <li>
                        <p>
                        <strong><i className='fas fa-video'>&nbsp;</i>Interactive Learning Materials</strong> -  Engage with dynamic multimedia content, including videos, interactive quizzes, and real-time trading simulations, to enhance your understanding and retention of key concepts.
                        </p>
                    </li>
                    <li>
                        <p>
                        <strong><i className='fas fa-user-graduate'>&nbsp;</i>Expert Guidance</strong> -   Learn from seasoned traders who have extensive experience in the financial markets. Benefit from their insights, strategies, and practical tips to navigate the complexities of trading successfully.
                        </p>
                    </li>
                    <li>
                        <p>
                        <strong><i className='fas fa-life-ring'>&nbsp;</i>Lifetime Access</strong> -   Enjoy lifetime access to course materials, updates, and resources, allowing you to revisit content and stay informed about evolving market trends and strategies.
                        </p>
                    </li>
                </ul>
            </div>


        </div>
        </>
    )
}
export default Landing