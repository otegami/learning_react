import { Link, useLocation } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>[Company Website]</h1>
      <nav>
        <Link to="about">About</Link>
        <Link to="events">Events</Link>
        <Link to="products">Products</Link>
        <Link to="contact">Contact</Link>
      </nav>
    </div>
  )
}

const About = () => {
  return (
    <div>
      <h1>[About]</h1>
    </div>
  )
}

const Events = () => {
  return (
    <div>
      <h1>[Events]</h1>
    </div>
  )
}

const Products = () => {
  return (
    <div>
      <h1>[Products]</h1>
    </div>
  )
}

const Contact = () => {
  return (
    <div>
      <h1>[Contact]</h1>
    </div>
  )
}

const Whoops404 = () => {
  const location = useLocation()

  return (
    <div>
      <h1>Resource not found at {location.pathname}</h1>
    </div>
  )
}

const Services = () => {
  return (
    <section>
      <h2>Our Services</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Integer nec odio. Praesent
        libero. Sed cursus ante dapibus diam. Sed
        nisi. Nulla quis sem at nibh elementum
        imperdiet. Duis sagittis ipsum. Praesent
        mauris. Fusce nec tellus sed augue semper
        porta. Mauris massa. Vestibulum lacinia arcu
        eget nulla. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per
        inceptos himenaeos. Curabitur sodales ligula
        in libero.
      </p>
    </section>
  )
}

export { Home, About, Events, Products, Contact, Whoops404, Services }
