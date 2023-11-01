import IntroImage from '../assets/images/intro.jpg';
import Container from '../components/ui/Container';

const Home = () => {
  return (
    <Container>
      <div className="flex my-32 gap-5">
        <div className="flex-[1] flex flex-col justify-between">
          <h1 className="text-7xl font-bold">
            {' '}
            Quality Cleaning <br />{' '}
            <span className="text-primary">for Your Home</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div>
            <button className="btn btn-primary">Book a Service</button>
            <button className="btn btn-ghost">Read more</button>
          </div>
          <div className="divider"></div>
          <div className="flex items-center gap-3 ">
            <div className="avatar-group -space-x-6">
              <div className="avatar">
                <div className="w-12">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
              </div>
            </div>
            <p>Rated 5 out of 5 by our clients</p>
          </div>
        </div>
        <div className="flex-[1] h-[600px] bg-red-500 rounded-md overflow-hidden">
          <img src={IntroImage} className="w-full h-full object-cover" alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Home;
