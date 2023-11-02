import { Link } from 'react-router-dom';
import IntroImage from '../assets/images/intro.jpg';
import Container from '../components/ui/Container';

const Home = () => {
  return (
    <Container>
      <div className="flex py-32 gap-16">
        <div className="flex-1 flex flex-col justify-between py-14 ">
          <h1 className="text-7xl font-bold text-start">
            <span>Quality Cleaning</span> <br />{' '}
            <span className="text-primary">for Your Home</span>
          </h1>
          <p className="my-5 max-w-[65ch]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="space-x-5">
            <Link to="/services" className="btn btn-lg btn-primary">
              Book a cleaning
            </Link>
            <Link to="/about" className="btn btn-lg">
              Read More
            </Link>
          </div>
          <div className="divider"></div>
          <div className="flex items-center gap-5">
            <div className="avatar-group -space-x-6">
              <div className="avatar">
                <div className="w-14">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-14">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-14">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
              </div>
            </div>
            <div>
              <p className="font-semibold">Rated 5 out of 5 by our clients</p>
            </div>
          </div>
        </div>
        <div className="h-[600px] w-full bg-green-500 flex-1 rounded-3xl overflow-hidden ">
          <img
            src={IntroImage}
            alt="landing"
            className="w-full h-full object-cover "
          />
        </div>
      </div>
    </Container>
  );
};

export default Home;
