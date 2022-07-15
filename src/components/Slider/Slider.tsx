import "./style.scss";

export const Slider = () => {
  return (
    <div className="slider">
      <h1 className="slider__title">The Power of Simplicity</h1>
      <p className="slider__description">
        Instead of spending time searching for the right app, our Al will bring
        the right app to you.
      </p>
      <button type="button" className="slider__btn--learn">
        Learn
      </button>
      <ul className="slider__dots">
        <li className="slider__dot"></li>
        <li className="slider__dot"></li>
        <li className="slider__dot"></li>
        <li className="slider__dot"></li>
        <li className="slider__dot"></li>
      </ul>
    </div>
  );
};
