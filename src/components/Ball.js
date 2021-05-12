
const Ball = ({ x, y, radius }) => {
  return (
    <circle className='ball' cx={x} cy={y} r={radius} />
  )
}

export default Ball