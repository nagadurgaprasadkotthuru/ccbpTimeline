// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectTimelineCardDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    projectUrl,
    duration,
  } = projectTimelineCardDetails
  return (
    <div className="project-timeline-card-container">
      <img className="project-image" alt="project" src={imageUrl} />
      <div className="heading-container">
        <h1 className="project-heading">{projectTitle}</h1>
        <p className="duration">
          <AiFillCalendar className="duration-icon" />
          {duration}
        </p>
      </div>
      <p className="description">{description}</p>
      <a className="visit-link" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
