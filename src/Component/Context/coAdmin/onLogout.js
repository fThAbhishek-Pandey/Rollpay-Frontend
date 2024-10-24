const onLogoutHandel = (setCotoken,navigate)=>{
    localStorage.removeItem('cotoken');
    setCotoken('')
    navigate('/')
}
export default onLogoutHandel