/* eslint-disable react/prop-types */

const ResortDesign = (props) => {
    const {image, pair, title} = props;
  return (
    <div>
      <img src={image} alt={title} />
      <p className="font-light text-lg text-tertiary">
        <span className="font-medium text-lg  text-light">{pair} </span>
       {title}
      </p>
    </div>
  );
}

export default ResortDesign
