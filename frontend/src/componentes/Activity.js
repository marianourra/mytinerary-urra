const Activity = (props) => {
const {activities} = props

console.log(props)
    return (
    
        <div className="activity">

        {activities.map(activity => {

            return (
                   
                <div key={activity._id}>
                <p className="activities">{activity.activity}</p>
                </div>
            )
        }) }

        </div>
       
    )
        
}

export default Activity

