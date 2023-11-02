import Header from '../components/ui/Header';
import Container from '../components/ui/Container';
import { useState } from 'react';

const Services = () => {
  const [services, setServices] = useState([]);

  return (
    <>
      <Container className="mt-10">
        <Header title="Services">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
          nobis excepturi delectus, ab id provident, voluptas iste ullam
          repellendus animi eos perspiciatis cumque. Quod sit laboriosam
          deleniti atque explicabo esse.
        </Header>
      </Container>
      <Container className="mb-64">
        <div className="grid grid-cols-3 gap-10">
          {/* Service Cards goes here */}
        </div>
      </Container>
    </>
  );
};

export default Services;
