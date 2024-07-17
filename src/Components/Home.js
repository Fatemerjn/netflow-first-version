import { Link } from 'react-router-dom';
import '../Styles/Home.css';
import Banner from './Banner';

function Home() {
    return (
        <div>
            <Banner />

            <div className='container'>
                <p>
                    Our platform is as powerful as it is user-friendly. Just drag, drop, connect, and input. It's that simple. Create networks that work just the way you need them to...
                </p>
                <div className='box'>
                    <p>
                        Demo<br />
                        Test model with super prompt taken from chatgpt and the basic prompt
                    </p>
                </div>
                <div className='boxes'>
                    <div className='box'>
                        <p>
                            blog<br />Our AI Modules
                        </p>
                    </div>
                    <div className='box'>
                        <span className="blck">Boost Your Productivity</span>
                        <p>
                            blog<br />User Experiences
                        </p>
                    </div>
                    <div className='box'>
                        <p>
                            blog
                        </p>
                    </div>
                </div>
                <p>Ready to start your AI journey? Discover our pricing options and explore our ready-to-use examples. If you're interested in learning more about us, we'd love to share our story. Join NetFlowAI today and let's create a smarter future together.</p>
                <div className='boxes'>
                    <div>
                        <Link to='./Pricing'>
                            <button className='btn'>pricing page</button>
                        </Link>
                    </div>
                    <div>
                        <button className='btn'>Sign in/Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
