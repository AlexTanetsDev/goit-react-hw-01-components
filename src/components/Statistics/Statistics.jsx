import PropTypes, { shape } from 'prop-types';
import {
  StatisticItem,
  StatisticList,
  StatisticSection,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticSection>
      {title && <h2>{title}</h2>}

      <StatisticList>
        {stats.map(statsItem => (
          <StatisticItem key={statsItem.id}>
            <span>{statsItem.label}</span>
            <span>{statsItem.percentage}%</span>
          </StatisticItem>
        ))}
      </StatisticList>
    </StatisticSection>
  );
};

Statistics.protoTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
