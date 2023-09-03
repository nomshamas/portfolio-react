import React from 'react'

function Skill(props) {
  return (
    <div className="skill">
      <p className="d-flex justify-content-between">
        <span className="skill_title">{ props.title }</span>
        <span className="skill_value">{ props.value }</span>
      </p>
      <div className="progress">
        <div className="progress-bar bg-success" style={{ width: `${props.value}` }} ></div>
      </div>
    </div>
  )
}

function Skills() {
  const skills1 = [
    { title: 'html5', value: '99%' },
    { title: 'css3', value: '99%' },
    { title: 'javascript', value: '90%' },
    { title: 'jQuery', value: '90%' },
    { title: 'wordpress', value: '90%' },
    { title: 'bootstrap', value: '99%' },
  ]

  const skills2 = [
    { title: 'tailwind', value: '99%' },
    { title: 'onsen ui', value: '99%' },
    { title: 'reactjs', value: '90%' },
    { title: 'git/github', value: '90%' },
    { title: 'wordpress', value: '90%' },
    { title: 'bootstrap', value: '99%' },
  ]

  return (
    <div className="row mt-5">
      <div className="col-md-12 mb-5">
        <div className="position-relative overflow-hidden d-flex align-items-center justify-content-center">
          <h1 className="display-1 text-uppercase text-white stroke-style"> About </h1>
          <h1 className="position-absolute text-uppercase">Skills</h1>
        </div>
      </div>
      <div className="col-md-6 mr-auto">
        {
          skills1.map((skill) => {
            return <Skill title={skill.title} value={skill.value} />
          })
        }
      </div>
      <div className="col-md-6 mr-auto">
        {
          skills2.map((skill) => {
            return <Skill title={skill.title} value={skill.value} />
          })
        }
      </div>
    </div>
  )
}

export default Skills
