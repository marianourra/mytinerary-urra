import React, {useState} from 'react';
import {connect} from 'react-redux';
import Alert from './Alert'
import itinerariesActions from '../redux/actions/itinerariesActions';

const Likes = (props) => {
    const {likes, _id} = props.itineraries
    const [like, setLike] = useState(false);
    const [itinerariesLikes, setItinerariesLikes] = useState(likes)
    console.log(props)

    const likeOrDislike = itinerariesLikes.includes(props._id) ? '/assets/heart-red.png' : '/assets/heart.png';

const likeItinerary = async () => {
        if(!props.token){
            Alert('error', 'You must be logged in to like this post')
        }else{
            let response = await props.likeItinerary(_id, props.token)
            setItinerariesLikes(response.data.response)
        }
        setLike(true)
    }

 return (

    <div className="likes">
    <img onClick={!like ? likeItinerary : null} 
        src={likeOrDislike}
        className='like-heart'
        alt='heart'
    />
    <span className="cont-likes">
        {likes.length === 1? likes : likes.length - 1}
    </span>
</div>

 )

} 

const mapStateToProps = (state) => {
    return {
        _id: state.users._id,
    }
}

const mapDispatchToProps = {
    likeItinerary: itinerariesActions.likeItinerary,
} 

export default connect(mapStateToProps, mapDispatchToProps)(Likes)   