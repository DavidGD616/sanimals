import { BannerContent } from '../components/Home/BannerContent';
import { BannerImage } from '../components/Home/BannerImage';


function Banner () {
    return (
        <div className="banner">
                <BannerContent />
                <BannerImage />
        </div>
    )
}

export { Banner };