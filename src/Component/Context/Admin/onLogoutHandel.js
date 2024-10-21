const onLogoutHandel = (setAdminToken,navigate)=>{
    localStorage.removeItem('adminToken');
    setAdminToken('')
    navigate('/')
}
export default onLogoutHandel