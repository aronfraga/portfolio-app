import Typewriter from 'typewriter-effect';
import NavBar from '../NavBar/NavBar';
import './Home.css'

function Home() {
  return (
    <div>
      <NavBar />
			<div className='main'>
				<h1 className='permanentText'>Hi! 👋, </h1>
					<div className='divTypewriter'>
						<Typewriter
							onInit={(typewriter) => {
								typewriter
									.typeString('I am Aaron Fraga')
									.pauseFor(1000)
									.deleteAll()
									.typeString('Full-Stack Developer')
									.pauseFor(1000)
									.deleteAll()
									.typeString('Backend Oriented')
									.pauseFor(1000)
									.deleteAll()
									.typeString('Preferably .NET Core')
									.pauseFor(1000)
									.deleteAll()
									.typeString('Open to work')
									.start();
							}}
						/>
					</div>
				</div>
    </div>
  )
}

export default Home;