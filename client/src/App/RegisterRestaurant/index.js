import {
  Avatar,
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import BrunchDiningOutlinedIcon from "@mui/icons-material/BrunchDiningOutlined";
import axios from "axios";
import HandleError from "../../Utils/handleError";

const RegisterRestaurant = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const URL = `${process.env.REACT_APP_API_URL}/restaurant/signup`;
    let data = new FormData(e.currentTarget);
    data = Object.fromEntries(data);

    const newUser = await axios
      .post(URL, data)
      .catch((error) => HandleError(error));

    if (newUser?.data) {
      toast.success("Successfully registered, please login");
      navigate("/login", { replace: true });
    }
  };

  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          marginTop: 8,
          padding: 5,
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "-5px -5px 50px lightgrey",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "black" }}>
          <BrunchDiningOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Register Restaurant
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='restaurantName'
            label='Restaurant Name'
            name='restaurantName'
            autoComplete='restaurantName'
            autoFocus
          />
          <TextField
            margin='normal'
            required
            fullWidth
            id='location'
            label='Location'
            name='location'
            autoComplete='location'
          />
          <TextField
            margin='normal'
            required
            fullWidth
            id='ownerName'
            label='Your Name'
            name='ownerName'
            autoComplete='ownerName'
          />
          <TextField
            margin='normal'
            required
            fullWidth
            id='phone'
            label='Phone'
            name='phone'
            autoComplete='phone'
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent='right'>
            <Link className='unlink' to='../login'>
              Already have an account? Login
            </Link>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};

const Copyright = (props) => {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {"Copyright ?? "}
      <Link className='unlink' to='#'>
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default RegisterRestaurant;
