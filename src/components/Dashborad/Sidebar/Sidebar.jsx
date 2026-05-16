import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./Sidebar.module.css"
import { useAuth } from '../../../Context/Context';

export default function Sidebar() {
    const { setData, Data } = useAuth();
    const links = [
        { icon: "fa-chart-bar", title: "Status", path: "/" },
        { icon: "fa-users", title: "Users Management", path: "/users" },
        { icon: "fa-building", title: "Projects Management", path: "/projects" },
        { icon: "fa-users", title: "Developers Management" },
        { icon: "fa-users", title: "CMS" },
        { icon: "fa-message", title: "Live Chat" }
    ]
    return (
        <aside className={`min-vh-100 py-4 ${styles.sidebar}`}>
            <div className='fw-semibold px-4 mb-3 fs-4'>Dashboard</div>
            {/* Links Parent */}
            <nav>
                {links.map((item,i) => (
                    <NavLink
                    key={i}
                        to={item.path}
                        className={`${styles.navItem} d-flex align-items-center gap-3 py-3 px-4`}>
                        <i className={`fa-solid ${item.icon} fs-5`}></i>
                        <span className='fs-5'>{item.title}</span>
                        {(item.title == "Users Management" && Data !== false) && <i className="fa-solid fa-circle"></i>}
                        
                    </NavLink>
                ))}
            </nav>
        </aside>
    )
}
