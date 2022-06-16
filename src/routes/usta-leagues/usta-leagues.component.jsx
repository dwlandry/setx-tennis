import LeagueList from '../../components/league-list/league-list.component';

const UstaLeagues = () => {
  const leagues = [
    {
      id: '1',
      name: 'Mixed 40 & Over',
      leagueStartDate: '1/4/2022',
      leagueEndDate: '',
      imageUrl:
        'https://images.unsplash.com/photo-1620983941458-0de493240024?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80',
    },
    {
      id: '2',
      name: 'Adult 40 & Over',
      leagueStartDate: '2/14/2022',
      leagueEndDate: '',
      imageUrl:
        'https://images.unsplash.com/photo-1615839296252-f78a936d8644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      id: '3',
      name: 'Adult 18 & Over',
      leagueStartDate: '4/11/2022',
      leagueEndDate: '',
      // imageUrl: 'https://www.usta.com/content/dam/usta/sections/texas/randoms/18overleague_header.jpg.thumb.1280.1280.png'
      imageUrl:
        'https://images.unsplash.com/photo-1644264481657-ce4f699289e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
      id: '4',
      name: 'Mixed 18 & Over',
      leagueStartDate: '6/13/2022',
      leagueEndDate: '8/5/2022',
      imageUrl:
        'https://www.usta.com/content/dam/usta/sections/texas/article/article-desktop/20170202_Mixed_Doubles_Action_A.jpg.thumb.1280.1280.png',
      // imageUrl: 'https://images.unsplash.com/photo-1586015967216-4c9128c159fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: '5',
      name: 'Adult 55 & Over',
      leagueStartDate: '1/3/2022',
      leagueEndDate: '',
      imageUrl:
        'https://images.unsplash.com/photo-1599586120162-c282f39edd1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: '6',
      name: 'Adult Combo',
      leagueStartDate: '7/19/2022',
      leagueEndDate: '',
      imageUrl:
        'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: '7',
      name: 'Mixed 55 & Over',
      leagueStartDate: '8/30/2022',
      leagueEndDate: '',
      imageUrl:
        'https://images.unsplash.com/photo-1542144582-1ba00456b5e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80',
    },
    {
      id: '8',
      name: 'Tri-Level',
      leagueStartDate: '10/11/2022',
      leagueEndDate: '',
      imageUrl:
        'https://images.unsplash.com/photo-1599409091912-88526846d833?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: '9',
      name: 'Adult 18-39',
      leagueStartDate: '',
      leagueEndDate: '',
      imageUrl:
        'https://images.unsplash.com/photo-1591608971358-f93643d11763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    },
  ];

  return (
    <div>
      <h1>USTA Leagues</h1>
      <LeagueList leagues={leagues} />
    </div>
  );
};

export default UstaLeagues;
