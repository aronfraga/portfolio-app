import Typewriter from 'typewriter-effect';
import NavBar from '../NavBar/NavBar';
import './NotFound.css';

function NotFound() {
  return (
    <div>
      <NavBar />
      <div className='mainNotFound'>
				<div className='divTypewriterNotFound'>
					<Typewriter
						onInit={(typewriter) => {
							typewriter
								.typeString('Error 404')
								.pauseFor(1000)
								.deleteAll()
								.typeString('Page Not Found')
								.pauseFor(1000)
								.deleteAll()
								.typeString('Try again!')
								.start();
						}}
					/>
				</div>
			</div>
    </div>
  )
}

export default NotFound;