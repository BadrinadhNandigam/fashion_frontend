import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-content">

          <p className="hero-label">
            NEW SEASON
          </p>

          <h1>
            Welcome to
            <br />
            Fashion Store
          </h1>

          <p className="hero-description">
            Discover the latest fashion for men and women.
            Find stylish clothing designed for comfort,
            confidence and everyday wear.
          </p>

          <Link
            to="/products"
            className="hero-btn"
          >
            Shop Now
          </Link>

        </div>
      </section>


      {/* CATEGORIES */}
      <section className="category-section">

        <div className="section-heading">
          <p>EXPLORE</p>

          <h2>
            Shop by Category
          </h2>

          <span>
            Find the perfect style for every occasion
          </span>
        </div>


        <div className="category-container">

          <div className="category-card">

            <div className="category-icon">
              👔
            </div>

            <h3>Men's Fashion</h3>

            <p>
              Discover stylish jackets, shirts,
              pants and more.
            </p>

            <Link to="/products">
              Shop Men's
            </Link>

          </div>


          <div className="category-card">

            <div className="category-icon">
              👗
            </div>

            <h3>Women's Fashion</h3>

            <p>
              Explore dresses, tops, traditional
              wear and more.
            </p>

            <Link to="/products">
              Shop Women's
            </Link>

          </div>


          <div className="category-card">

            <div className="category-icon">
              ✨
            </div>

            <h3>Unisex Collection</h3>

            <p>
              Comfortable and modern styles
              for everyone.
            </p>

            <Link to="/products">
              Explore
            </Link>

          </div>

        </div>

      </section>


      {/* WHY CHOOSE US */}
      <section className="features-section">

        <div className="section-heading">

          <p>WHY US</p>

          <h2>
            Why Choose Fashion Store?
          </h2>

          <span>
            Everything you need for a better shopping experience
          </span>

        </div>


        <div className="features-container">

          <div className="feature-card">

            <div className="feature-icon">
              🚚
            </div>

            <h3>
              Fast Delivery
            </h3>

            <p>
              Get your favorite fashion delivered
              quickly to your doorstep.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              ⭐
            </div>

            <h3>
              Quality Products
            </h3>

            <p>
              Carefully selected products with
              great quality and style.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              🔒
            </div>

            <h3>
              Secure Shopping
            </h3>

            <p>
              Enjoy a simple and secure shopping
              experience.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              💬
            </div>

            <h3>
              Customer Support
            </h3>

            <p>
              We are here to help whenever
              you need us.
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="cta-section">

        <div>

          <p>
            YOUR STYLE STARTS HERE
          </p>

          <h2>
            Find Your Perfect Style
          </h2>

          <span>
            Explore our latest fashion products
            and refresh your wardrobe today.
          </span>

          <br />

          <Link
            to="/products"
            className="cta-btn"
          >
            Explore Products
          </Link>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="home-footer">

        <h2>
          Fashion Store
        </h2>

        <p>
          Style. Comfort. Confidence.
        </p>

        <p>
          © 2026 Fashion Store. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default Home;