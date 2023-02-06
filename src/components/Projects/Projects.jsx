import NavBar from '../NavBar/NavBar';
import videogame from '../../assets/pr_videogame.jpg';
import fitnessCenter from '../../assets/pr_gym.jpg';
import employeeClock from '../../assets/pr_employee.jpg';
import parking from '../../assets/pr_parking.jpg';
import movie from '../../assets/pr_movies.jpg';
import shoppingcart from '../../assets/pr_shoppingcart.png';
import bookstore from '../../assets/pr_bookstore2.png';
import apiclient from '../../assets/apiclient.png';

import './Projects.css'
import CardProject from '../CardProject/CardProject';

const projects = [{ name: 'Shopping Cart',
                    image: shoppingcart,
                    link: 'http://aronfraga-001-site3.htempurl.com/swagger/index.html',
                    type:  'Back-End Project',
                    tech: 'C# | .NET Core | EF | JWT | SQL Server' },
                  { name: 'Movies',
                    image: movie,
                    link: 'http://aronfraga-001-site1.htempurl.com/swagger/index.html',
                    type:  'Back-End Project',
                    tech: 'C# | .NET Core | EF | JWT | SQL Server' },
                  { name: 'Parking',
                    image: parking,
                    link: 'https://www.aronfraga.dev/projects',
                    type:  'Back-End Project',
                    tech: 'C# | .NET Core | EF | JWT | SQL Server'  },
                  { name: 'Employee Clock',
                    image: employeeClock,
                    link: 'http://13.54.114.167/employee/welcome',
                    type:  'Back-End Project',
                    tech: 'TypeScript | Express | MongoDB' },
                  { name: 'Fitness Center',
                    image: fitnessCenter,
                    link: 'https://app-gym-frontend.vercel.app/',
                    type:  'Full-Stack Project',
                    tech: 'NodeJs | Express | Sequelize | Auth0 | JWT | React | Redux' },
                  { name: 'Videogames',
                    image: videogame,
                    link: 'https://main.d3stec1pzh5mx.amplifyapp.com/',
                    type:  'Full-Stack Project',
                    tech: 'NodeJs | Express | Sequelize | React | Redux' },
                  { name: 'Bookstore',
                    image: bookstore,
                    link: 'http://aronfraga-001-site4.htempurl.com/',
                    type:  'Full-Stack Project',
                    tech: 'C# | ASP.NET Core | EF | Identity | SQL Server' },
                  { name: 'Api Client',
                    image: apiclient,
                    link: 'https://drive.google.com/file/d/1l5MMW7OQX59TH_EPIKRecwjFfyyu3ft3/view?usp=share_link/',
                    type:  'Winforms Project',
                    tech: 'C# | .NET | Winforms' }];

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
                       tech={data.tech}
                       manual={data.manual}/>
        )}
			</div>
    </div>
  )
}

export default Projects;
