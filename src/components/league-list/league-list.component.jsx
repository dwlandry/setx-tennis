import './league-list.styles.scss';
import LeagueCard from '../league-card/league-card.component';

const LeagueList = ({ leagues }) => {
  return (
    <div className='league-list-container'>
      {leagues.map((league) => (
        <LeagueCard key={league.id} league={league} />
      ))}
    </div>
  );
};

export default LeagueList;
