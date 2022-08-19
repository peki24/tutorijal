import Button from "./Button"

const Header = ({title}) => {
    
    const onClick = () => {
        console.log('click')
      }
  
    return (
  
    <header className='header'>
      <h1 style={{color:'black'}}>{title}</h1>
      <Button color='green' text='Add' onClick={onClick}/>
    </header>
  )
}

Header.defaultProps = {
    title:'Task Tracker',
}

export default Header
