import '../Styles/Banner.css';
import { line1, line2, line3 } from './lines';


function Banner() {
    return (
        <div>
        <div class="split-layout">
            <div class="Banner">
                <p className='Alert'>DEMO WILL BE PLAYED BACKGROUND</p>
                <h1>Welcome to NetFlowAI</h1>
                <p>Boost your productivity with our innovative AI-powered network</p>
                <p>Combine AI modules, Create complex networks, Unlock limitless possibilities,</p>
                <button type='button'>Get Started</button>
            </div>
            <div class="bottom">
                <div className='shadow'>
                    <p>What is NetFlowAI?
                        <br />
                        Imagine a digital platform taht takes the power of Artificial intelligence and puts it directly in your hands. That's NetFlowAl. We provide an intuitive interface where you can design and operate a complex network of Ai tools, all tailored to your unique needs. Whether you're a business aiming to optimize your operations or an indibidual looking to harness the potential of AI, we've got you covered.
                    </p>
                </div>
            </div>
            
        </div>
        <div className="vertical-lines-container">
        {/* Your content for the 300px section */}
        <div className="custom-content-inner">
            <h2>  </h2>
            <p>  </p>


        </div>
        {line3()}
        {line3()}
        {line1()}
        {line2()}
        {line3()}
        {line1()}
        {line3()}
        {line3()}
        {line1()}

    </div>
    </div>
    );
}

export default Banner;
