import { ChartBar } from './ChartBar'
import './Chart.css'

export const Chart = (props) => {
  const totalMax = props.dataPoints.map((dataPoint) => dataPoint.value)
  const totalMaxValue = Math.max(...totalMax)

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  )
}