const Activity = (props) => {
const {activities} = props

console.log(props)
    return (
    
        <div className="activity">

        {activities.map(activity => {

            return (
                   
                <div key={activity._id}>
                <ul>
                <li className="activities">{activity.activity}</li>
                </ul>
                </div>
            )
        }) }

        </div>
       
    )
        
}

export default Activity

