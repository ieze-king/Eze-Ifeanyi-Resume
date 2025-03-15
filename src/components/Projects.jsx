import React from "react";

const Projects = () => {
  return (
    <div
      id="projects"
      className="min-h-screen w-full flex flex-col items-center justify-center gap-20 p-10 md:p-16 xl:px-32"
    >
      <h1 className="text-center text-5xl font-light ">Projects</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-900 rounded-lg hover:bg-teal-50">
          <h1 className="text-3xl font-semibold">Ecommerce Website</h1>
          <h3 className="text-xl text-gray-900">HTML, CSS and JavaScript</h3>
          <p className="text-sm text-gray-600">
            This project is an E-commerce Website that allows users to browse
            products, add them to a shopping cart, and proceed to purchase. Key
            features include: <br />
            Product Listing: Displays products with images, titles, and prices.
            <br />
            Add to Cart: Users can add products to the cart, with duplicate
            prevention.
            <br />
            Cart Management: View cart items with quantity controls
            (increment/decrement). Remove items from the cart. Real-time updates
            to the total price and item count.
            <br />
            Purchase Simulation: A "Buy Now" button simulates a purchase with a
            loader and confirmation message. Responsive Design: Ensures
            usability across devices.
            <br />
            The project uses HTML, CSS, and JavaScript for functionality and
            interactivity.
          </p>
        </div>

        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-900 rounded-lg hover:bg-teal-50">
          <h1 className="text-3xl font-semibold">Ecommerce Website</h1>
          <h3 className="text-xl text-gray-900">React Js and CSS</h3>
          <p className="text-sm text-gray-600">
            This project is an E-commerce Website built with React that allows
            users to browse products, add them to a shopping cart, and proceed
            to purchase. Key features include:
            <br />
            Product Listing: Displays products with images, titles, and prices
            in a grid layout.
            <br />
            Add to Cart: Users can add products to the cart, with the ability to
            toggle the cart's visibility.
            <br />
            Cart Management: View cart items with placeholders for product
            details. Real-time updates to the total price and item count. A
            close button to hide the cart. Purchase
            <br />
            Simulation: A "Buy Now" button simulates a purchase process.
            Includes a loader to indicate processing.
            <br />
            Responsive Design: Ensures the application is usable across various
            devices. The project is built using React, CSS, and Vite for fast
            development and interactivity. It follows a component-based
            architecture for modularity and scalability.
          </p>
        </div>

        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-900 rounded-lg hover:bg-teal-50">
          <h1 className="text-3xl font-semibold">Real Estate Platform</h1>
          <h3 className="text-xl text-gray-900">React Js and CSS</h3>
          <p className="text-sm text-gray-600">
            I am working on a new real estate project
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
