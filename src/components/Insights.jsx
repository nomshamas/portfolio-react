import React from 'react'

const insights = [
  { title: '11+', detail: 'Partners', },
  { title: '55+', detail: 'Projects Done', },
  { title: '89+', detail: 'Happy Clients', },
  { title: '150%', detail: 'Meetings', },
]

function Insight(props) {
  return (
    <div className="col-sm-6 col-md-3">
      <div className="card shadow border-0">
        <div className="card-body">
          <h1> { props.title } </h1> <br />
          <span className="lead"> { props.detail } </span>
        </div>
      </div>
    </div>
  )
}

function Insights() {
  return (
    <div className="col-md-12 mt-5">
      <div className="row text-center">
        {
          insights.map((insight) => {
            return <Insight title={insight.title} detail={insight.detail} />
          })
        }
      </div>
    </div>
  )
}

export default Insights
