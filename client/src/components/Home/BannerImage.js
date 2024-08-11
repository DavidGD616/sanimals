import BannerFriends from '../../svg/bannerFriends.png'

function BannerImage () {
    return (
        <div className="banner__image">
            <img className='banner__image-img' src={BannerFriends} alt="BannerFriends" />
        </div>
    )
}

export { BannerImage };