import './Footer.css'

const Footer = () => {
    return(
        <footer>
            <div className="foot-sec1">
                <span>Back to Top</span>
            </div>
            <div className="foot-sec2">
                <div className="section">
                    <ul className="contact">
                        <li>Phone no.: <a href="tel:+13828801796">+1 (382)880-1796</a></li>
                        <li>Personal Email ID : <a href="mailto:anantk.singh9876@gmail.com">anantk.singh9876@gmail.com</a></li>
                        <li>Uwindsor Email ID : <a href="mailto:singh4n3@uwindsor.ca">singh4n3@uwindsor.ca</a></li>
                    </ul>
                </div>
                <div className="section">
                    <ul className="links">
                        <li><a href="https://www.linkedin.com/in/anantk-singh/" target='_blank'>LinkedIn</a></li>
                        <li><a href="https://github.com/techo-anant" target='_blank'>GitHub</a></li>
                        <li><a href="https://leetcode.com/u/techo-anant/" target='_blank'>LeetCode</a></li>
                    </ul>
                </div>
                <div className="section">
                    <span>This is my <u>current Portfolio</u>, it will keep on changing as i am in the process of continuous learning. <br />If you want to <b>offer any Position to me</b>: <br />If you have <b>any projec idea</b>: <br />If you have <b>any questions</b>: <br /> -{'>'}Feel free to contact me with any mode on the left.</span>
                </div>
            </div>
            <div className="copyright">
                <p><b>&copy; {new Date().getFullYear()} Anant Kumar Singh</b></p>
            </div>
        </footer>
    );
};

export default Footer;