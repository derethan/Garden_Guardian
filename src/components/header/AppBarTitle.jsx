import Shield from '../../assets/shield.png';

const AppBarTitle = () => {
    return (
        <div style={{display: "flex", justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
        <img src={Shield} alt="shield" width={40} />
        <h1 style={{color: '#2A2A2A', fontFamily: 'AniMe', fontSize: '14px'}}>Garden <br /> Guardian</h1>
        </div>
    );
    }

export default AppBarTitle;