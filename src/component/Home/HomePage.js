import VideoHomePage from '../../assets/video-homepage.mp4'

const HomePage = () => {
    return (
        <div className="homepage-container">
            <video autoPlay loop muted >
                <source src={VideoHomePage} type="video/mp4" />
            </video>
            <div className='homepage-content'>
                <div className='title1'>There's a better way to ask</div>
                <div className='title2'>You don't want to make a boring form. And your audience won't answer one. Create a typeform instead—and make everyone happy.</div>
                <div className='title3'><button>Get started! it's free</button></div>
            </div>
        </div>
    )
}

export default HomePage