import { useLoaderData } from 'react-router';
import Hero from '../../Components/Header/Hero';
import BestSelling from '../../Components/BestSelling/BestSelling';
import NewestArrival from '../../Components/NewestArrival/NewestArrival';
import FeaturedShoes from '../../Components/FeaturedShoes/FeaturedShoes';
import Categories from '../../Components/Categories/Categories';
import Service from '../../Components/Service/Service';

const Home = () => {

  const data = useLoaderData()

  return (
    <div>
      <section className='hero mx-auto'>
        <Hero></Hero>
      </section>
      <section className='w-11/12 mx-auto my-10'>
        <Categories data={data}></Categories>
        <FeaturedShoes data={data}></FeaturedShoes>
        <BestSelling data={data}></BestSelling>
        <NewestArrival data={data}></NewestArrival>
        <Service></Service>

      </section>
    </div>
  );
};

export default Home;