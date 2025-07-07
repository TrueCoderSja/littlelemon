import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";

const customers = [
  {
    fullName: "Clara Mendez",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
    rating: [1, 1, 1, 1, 1],
    says:
      "Every bite tasted like home but fancier. The lemon risotto? Divine. I'll be dreaming of it tonight.",
  },
  {
    fullName: "Liam Carter",
    image:
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
    rating: [1, 1, 1, 1, 0.5],
    says:
      "Friendly staff, warm ambiance, and the grilled halloumi melted in my mouth. Highly recommend the thyme lemonade too!",
  },
  {
    fullName: "Ava Thompson",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
    rating: [1, 1, 1, 1, 1],
    says:
      "I'm a tough critic, but Citrus & Thyme blew me away. Clean flavors, perfect textures, and that citrus twist? *Chef’s kiss*.",
  },
  {
    fullName: "Noah Patel",
    image:
      "https://images.unsplash.com/photo-1546456073-670d0c4e2c34?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
    rating: [1, 1, 1, 1, 0],
    says:
      "Portions were a bit small for the price, but the spiced chickpea stew was legit. Would return for brunch.",
  },
];


const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>Testimonials</h2>
        {customers.map((customer, index) => (
          <TestimonialCard key={index} customer={customer} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
