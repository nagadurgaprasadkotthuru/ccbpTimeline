// Write your code here
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const titlesList = timelineItemsList.map(eachObject => ({
    title: eachObject.title,
  }))
  console.log(titlesList)

  return (
    <div className="bg-container">
      <h1 className="heading">
        MY JOURNEY OF
        <br />
        <span className="span-element">CCBP 4.0</span>
      </h1>
      <Chrono
        mode="VERTICAL_ALTERNATING"
        items={titlesList}
        theme={{
          primary: '#2b237c',
          secondary: '#ffffff',
          titleColor: '#0967d2',
          cardBgColor: '#ffffff',
        }}
      >
        {timelineItemsList.map(eachObject => {
          if (eachObject.categoryId === 'COURSE') {
            return (
              <CourseTimelineCard
                courseTimelineCardDetails={eachObject}
                key={eachObject.id}
              />
            )
          }
          return (
            <ProjectTimelineCard
              projectTimelineCardDetails={eachObject}
              key={eachObject.id}
            />
          )
        })}
      </Chrono>
    </div>
  )
}

export default TimelineView
