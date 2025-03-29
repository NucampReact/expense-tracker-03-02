function Heading(props) {
  // props = an object
  /*
    {
      title: 'This is my new heading',
      size: '3',
      tag: 'h2'
    }
  */
  return (
    <h2>{props.title}</h2>
  )
}

export default Heading;