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