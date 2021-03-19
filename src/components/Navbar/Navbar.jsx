import styles from './navbar.module.css';
import itemLinks from "../../data/itemLinks.json";

function Navbar(){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-white bg-white px-4 mt-2">
                <a className={`${styles.brand} navbar-brand px-4`} href="/">CNBlog</a>
                <div className="toggler">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className={`navbar-nav ms-auto ${styles.navUl}`}>
                        {itemLink.link.map((item,index) =>(
                            <li key={index}  className="nav-item active">
                                <a className={`${styles.item} nav-link`} href={item.href}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
            <hr/>
        </>
    )
}

export default Navbar