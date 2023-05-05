// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseTimelineCardDetails} = props
  const {
    courseTitle,
    description,
    duration,
    tagsList,
  } = courseTimelineCardDetails
  return (
    <div className="course-timeline-card-container">
      <div className="heading-container">
        <h1 className="courseTitle">{courseTitle}</h1>
        <p className="duration">
          <AiFillClockCircle className="duration-icon" /> {duration}
        </p>
      </div>
      <p className="description">{description}</p>
      <ul className="tags-container">
        {tagsList.map(eachTag => (
          <li className="tag-item" key={eachTag.id}>
            <p className="tag">{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
