import PropTypes from 'prop-types';
console.log('stat', PropTypes);
// import data from './data.json';

function Statistics({ title = '', stats }) {
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>

      <ul class="stat-list">
        {stats.map(stat => {
          const { id, label, percentage } = stat;
          return (
            <li key={id} class="item">
              <span class="label">{label}</span>
              <span class="percentage">{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default Statistics;
