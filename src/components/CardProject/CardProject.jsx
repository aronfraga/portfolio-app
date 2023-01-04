import './CardProject.css'

function CardProject({ name, image, link, type, tech }) {
  return (
    <a href={link} className='link' target="_blank">
      <div className='mainCard'>
        <div className='imageContainer'>
          <img src={image} alt='img not found'/>   
        </div>
          <div className='textContainer'>
            <div className='nameContainer'>
            <h1 className='text'>{name}</h1>
            <h2 className='text'>{type}</h2>
            <h3 className='textTech'>{tech}</h3>
          </div>
        </div>    
      </div>
    </a>
  )
}

export default CardProject;