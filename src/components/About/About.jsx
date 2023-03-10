import NavBar from '../NavBar/NavBar';
import profile from '../../assets/profile.jpg';
import './About.css'

function About() {

  return (
    <div>
      <NavBar />
      <div className='mainAboutMe'>
        <div className='leftAboutMe'>
          <div className='profileAboutMe'>
            <h2 className='titleAboutMe'>About Me</h2>
              <h4>
                I am a person with great motivation to learn, organized and flexible to changes. 
                I have strong technical, social and teamwork skills. Obtained through my last training academic. 
                I look to be part of a challenging company in which I can grow and expand my knowledge.
              </h4>
          </div>  
          <div className='tecnologiesAboutMe'>
            <h2 className='titleAboutMe'>Tecnologies</h2>
            <img src="https://skillicons.dev/icons?i=git,js,nodejs,express,cs,dotnet,mysql,mongodb,react,redux,visualstudio,vscode,bash" />
          </div>
        </div>
        <div className='rightAboutMe'>
          <img src={profile} alt="progile" className='picture'/>
        </div>
      </div>
    </div>
  )
}

export default About;