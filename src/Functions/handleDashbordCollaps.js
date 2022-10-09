export const handleDashboardCollaps = () => {
    const dastbord_collaps_icon = document.getElementById('dashborard_nav_collaps_icon')
    dastbord_collaps_icon.classList.toggle("active_dashborard_nav_collaps_icon")


    const dashboard_navication = document.getElementById('dashboard-navication')
    dashboard_navication.classList.toggle("active_dashboard_navication")
    const dashboard_body = document.getElementById('dashboard_body')
    dashboard_body.classList.toggle("disable_dashboard_body")


}