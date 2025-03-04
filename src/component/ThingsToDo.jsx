import { Link } from 'react-router';
import { ThingsTodo } from '../constant/ThingsToDo';

const ThingsToDo = () => {
  return (
    <>
      <section className="py-14">
        <h4 className="font-medium text-2xl text-light leading-9">
          Things to do
        </h4>
        <div className="md:flex flex-row justify-between items-center">
          {ThingsTodo.map(({image, title, location, id}) => (
             <div className="py-5" key={id}>
            <Link to="/booking">
              <img src={image} alt="tobbytown-nature" />
            </Link>
            <div>
              <h4 className="font-medium text-xl text-light py-1">
              { title}
              </h4>
              <p className="font-light text-[0.938rem] text-tertiary">{location}</p>
            </div>
          </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ThingsToDo
