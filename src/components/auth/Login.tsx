import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/auth";
import { Container, CssBaseline, Grid, Avatar, TextField, Typography, FormControlLabel, Button, Checkbox } from "@material-ui/core";
import LockOpenIcon from "@material-ui/icons/LockOpen";

export interface ILoginProps {
    isAuthenticated: null | boolean;
    loginUser: (email: string, password: string) => void;
}
// tslint:disable-next-line:no-shadowed-variable
const Login = ({ isAuthenticated, loginUser }: ILoginProps) => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const { email, password } = formData;

    const handleChange = (e: React.ChangeEvent<{ id?: string; name?: string | any; value: any }>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        loginUser(email, password);
    };

    if (isAuthenticated) {
        return <Redirect to="/" />;
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={"login-wrapper"}>
                <Avatar className={"login-avatar"}>
                    <LockOpenIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    ثبت نام
                </Typography>
                <form noValidate={true} onSubmit={handleSubmit}>
                    <Grid container={true} spacing={2}>

                        <Grid item={true} xs={12} sm={12}>
                            <TextField
                                variant="outlined"
                                required={true}
                                fullWidth={true}
                                id="Email"
                                label="ایمیل"
                                name="email"
                                value={email}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item={true} xs={12}>
                            <TextField
                                variant="outlined"
                                required={true}
                                fullWidth={true}
                                name="password"
                                label="پسورد"
                                type="password"
                                id="password"
                                value={password}
                                onChange={handleChange}
                            />
                        </Grid>

                    </Grid>
                    <Button
                        type="submit"
                        fullWidth={true}
                        variant="contained"
                        color="primary"
                        className={"login-btn"}
                    >
                        ورود
                     </Button>

                </form>
            </div>

        </Container>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { loginUser })(Login);
