import NavBar from '../NavBar/NavBar';
import videogame from '../../assets/pr_videogame.jpg';
import fitnessCenter from '../../assets/pr_gym.jpg';
import employeeClock from '../../assets/pr_employee.jpg';
import parking from '../../assets/pr_parking.jpg';
import './Projects.css'
import CardProject from '../CardProject/CardProject';

const projects = [{ name: 'Parking',
                    image: parking,
                    link: 'https://main.d3stec1pzh5mx.amplifyapp.com/',
                    type:  'Back-End Project',
                    tech: 'C# | .NET Core | SQL Server'},
                  { name: 'Employee Clock',
                    image: employeeClock,
                    link: 'https://main.d3stec1pzh5mx.amplifyapp.com/',
                    type:  'Back-End Project',
                    tech: 'TypeScript | Express | MongoDB'},
                  { name: 'Fitness Center',
                    image: fitnessCenter,
                    link: 'https://main.d3stec1pzh5mx.amplifyapp.com/',
                    type:  'Full-Stack Project',
                    tech: 'NodeJs | Express | React | Redux'},
                  { name: 'Videogames',
                    image: videogame,
                    link: 'https://main.d3stec1pzh5mx.amplifyapp.com/',
                    type:  'Full-Stack Project',
                    tech: 'NodeJs | Express | React | Redux'}];

function Projects() {
  return (
    <div>
      <NavBar />
			<div className='mainProject'>
        {projects?.map((data, idx) => 
          <CardProject key={idx}
                       name={data.name}
                       image={data.image}
                       link={data.link}
                       type={data.type}
                       tech={data.tech}/>
        )}
			</div>
    </div>
  )
}

export default Projects;