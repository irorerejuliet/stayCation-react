/* eslint-disable react/prop-types */


const Content = ({children, className}) => {
  return (
    <p className={className}>
      {children}
    </p>
  )
}

export default Content
