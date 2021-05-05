import Button from '@material-ui/core/Button'
import  TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'



const LoginField = ()=>{
    return (
        <div style={{width:300,height:150,}}>
            <Typography variant="h5" component="h5">
            Weclome Friend!
            </Typography>
        <form action="" style={{height:280,display:'flex',flexDirection:'column-reverse',justifyContent:'space-around'}}>
        <Button variant = "contained"   color='secondary'>SignUp</Button>
        <Button variant = "contained"  color="primary">SignIn</Button>
        <TextField  type="password"  color='primary' label="Password" variant="filled" />
        <TextField color='primary' label="User" variant="filled"/>
          </form>
        </div>
    )
}


export default LoginField