export default function Testimonials() {
    return (
      <div className="testimonials-parent">
        <p className="testimonials-title">Testimonials</p>
        <div className="testimonials">
            <div className="testimonial">
                <img className="reviewer-img" src="/images/reviewer1.png" alt="greek salad"/>
                <div className="name-rating">
                    <p className="reviewer-name">Josep Aparicio</p>
                    <p className="reviewer-rating">5 <i></i></p>
                </div>
                <div className="review-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vel quibusdam reiciendis a magnam nostrum voluptate at quo fugit laborum mollitia aut minima aspernatur vitae animi atque, sequi nobis odit? </p>
                </div>
            </div>
            <div className="testimonial">
                <img className="reviewer-img" src="/images/reviewer2.png" alt="greek salad"/>
                <div className="name-rating">
                    <p className="reviewer-name">Joana Salgado</p>
                    <p className="reviewer-rating">5 <i></i></p>
                </div>
                <div className="review-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa, 
                        semper sed enim at, faucibus mattis lorem.  </p>
                </div>
            </div>
            <div className="testimonial">
                <img className="reviewer-img" src="/images/reviewer3.png" alt="greek salad"/>
                <div className="name-rating">
                    <p className="reviewer-name">Ana Monzon</p>
                    <p className="reviewer-rating">5 <i></i></p>
                </div>
                <div className="review-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati corrupti doloremque, unde perspiciatis placeat et dolor. Minus deleniti debitis, odit facilis beatae rem.</p>
                </div>
            </div>
        </div>
      </div>
    )
  }
  

  