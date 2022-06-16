import './league-card.styles.scss'

const LeagueCard = ({league}) => {
  const {name, leagueStartDate, imageUrl} = league
  return (
    <div className="league-card-container">
      <div className="background-image" 
        style={{ 
          backgroundImage:`url(${imageUrl})`
        }} 
      />
      <div className='card-content'>
        <span className='league-name'>{name}</span>
        <span className='date'>start date: {leagueStartDate}</span>
        </div>
      <div className='card-buttons'>
        <button>Rules</button>
        <button>Flights</button>
      </div>
    </div>
  )
}

export default LeagueCard