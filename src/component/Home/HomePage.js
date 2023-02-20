import VideoHomePage from '../../assets/video-homepage.mp4'

const HomePage = () => {
    return (
        <div className="homepage-container">
            <video autoPlay loop muted >
                <source src={VideoHomePage} type="video/mp4" />
            </video>
        </div>
    )
}

export default HomePage