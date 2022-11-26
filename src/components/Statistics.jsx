import PropTypes, { shape } from 'prop-types';

export const Statistics = ({ title, stats }) => {
    return (
      <section>
        {title && (<h2>{ title }</h2>)}
            
        <ul>
          {stats.map(statsItem => (
            <li key = { statsItem.id }> 
              <span>{ statsItem.label}</span>
              <span>{ statsItem.percentage }%</span>
            </li>
          ))
          }
        </ul>
</section>
    )
}

Statistics.protoTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }))
} 