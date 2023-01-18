import {Link} from 'react-router-dom'

function NAV() {
    return(
        <>
        <nav>
        <Link to='/'><img src={'https://github.com/individual-ism/api-project/raw/main/%D1%81%D0%BB%D0%B0%D0%B2%D0%B0.jpg'} alt='logo' className='logo'></img></Link>
            <ul className='navlist'>
                <Link to={`/persons`} className='navlinks'>Persons Sanctions</Link>
                <Link to={`/companies`} className='navlinks'>Company Sanctions</Link>

            </ul>
        </nav>
        </>
    )
}

export default NAV

{/* <Link to={`/PersonsSearch`} className='navlinks'>Persons Search</Link>
<Link to={`/CompaniesSearch`} className='navlinks'>Companies Search</Link> */}