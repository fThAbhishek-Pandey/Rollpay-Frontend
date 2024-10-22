const onLogoutHandel = (setCotoken,navigate)=>{
    localStorage.removeItem('coToken');
    setCotoken('')
    navigate('/')
}
export default onLogoutHandel