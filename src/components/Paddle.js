
const Paddle = ({ x, y, width, height }) => {
  return (
    <rect className='paddle' x={x} y={y} width={width} height={height} />
  )
}

export default Paddle