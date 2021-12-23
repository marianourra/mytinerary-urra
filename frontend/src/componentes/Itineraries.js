import { Card } from 'react-bootstrap'
import { Accordion } from 'react-bootstrap'
import Activity from '../componentes/Activity'
import {useState} from 'react'
import activitiesActions from '../redux/actions/activitiesActions';
import itinerariesActions from '../redux/actions/itinerariesActions'
import { connect } from 'react-redux';
import Alert from '../componentes/Alert';
import Comments from '../componentes/Comments'




const Itineraries = (props)=> {
const {itinerarie} = props 
console.log(itinerarie)
const {likes, _id, comments} = itinerarie
const [activities, setActivities] = useState([]);
async function getActivities() {
    try {
        let res = await props.getActivitiesByItinerary(itinerarie._id)
        if(res) {
            setActivities(res)
        }
    } catch(err) {
        console.error(err)
    }
}

  const handlerActivities = ()=> {
    getActivities()
  } 

  const likeItinerary = async () => {
    if(!props.token){
        Alert('error', 'You must be logged in to like this post')
    }else{
        let response = await props.likeItinerary(_id, props.token)
        setItinerariesLikes(response.data.response)
    }
    setLike(true)
}

const [like, setLike] = useState(false);
    const [itinerariesLikes, setItinerariesLikes] = useState(likes);
    const likeOrDislike = itinerariesLikes.includes(props._id) ? '/assets/heart-red.png' : '/assets/heart.png';

    return (
        <div className="itineraries container-fluid">


        <Card style={{backgroundColor: "grey", width: '40rem' }}>
          <Card.Title>{itinerarie.tourName}</Card.Title>
          <img className="publisher" src={itinerarie.publisherImage} />
          <p>{itinerarie.publisherName}</p>
          <br />
         
                <div className="iconsdiv">
                <p> Price:  {"💲".repeat(parseInt(itinerarie.price))}</p>
                <p> Duration: {"🕓" + itinerarie.duration + "hs"}</p>

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

                <p>{itinerarie.length}</p>
                <p>{"#"+itinerarie.hashtags[0]+" "}{"#"+itinerarie.hashtags[1]+" "}{"#"+itinerarie.hashtags[2]}</p>
                </div>

          <Card.Body>


            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header onClick={()=> handlerActivities()}> Activities included</Accordion.Header>
                <Accordion.Body>
                  <Activity activities={activities}/>
                  <br/>
                  <Comments itineraryId={itinerarie._id} comments={comments} /> 
                </Accordion.Body>
              </Accordion.Item>

            </Accordion>

          </Card.Body>

        </Card>

       


      </div>

    )
}

const mapDispatchToProps = {
    likeItinerary: itinerariesActions.likeItinerary,
    getActivitiesByItinerary: activitiesActions.getActivitiesByItinerary
  
  }
  
  const mapStateToProps = state => {
    return {
        token: state.users.token,
        _id: state.users._id,
        user: state.users.user
      
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Itineraries);