function Button({ handleClick, name }) {
  return (
    <button onClick={handleClick}>{ name }</button>
  )
}

export default Button;