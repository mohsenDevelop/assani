import React from "react";
import { AppBar, Toolbar, Grid, Container, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { logOut } from "../../redux/actions/auth";

export interface IProps {
    logOut: () => void;
}

// tslint:disable-next-line:no-shadowed-variable
const Navbar = ({ logOut }: IProps) => {

    const handleLogOut = () => {

        logOut();
    };
    return (
        <header>
            <AppBar color="inherit" position="relative">
                <Toolbar>
                    <Container className="nav-container">
                        <Grid container={true} justify="space-between" alignItems="center">
                            <Grid item={true}>
                                <Grid
                                    container={true}
                                    spacing={2}
                                    justify="center"
                                    alignItems="center"
                                >
                                    <Grid item={true}>
                                        <Button color="primary">
                                            خانه
                                        </Button>
                                    </Grid>

                                    <Grid item={true}>
                                        <Button color="primary">
                                            درباره ما
                                         </Button>
                                    </Grid>

                                    <Grid item={true}>
                                        <Button color="primary">
                                            تماس با ما
                                         </Button>
                                    </Grid>


                                </Grid>
                            </Grid>
                            <Grid item={true}>


                                <Grid item={true}>
                                    <Button
                                        variant="contained"
                                        style={{ backgroundColor: "#FC840E", color: "#fff" }}
                                        onClick={handleLogOut}
                                    >
                                        خروج
                                       </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </header>
    );
};

export default connect(undefined, { logOut })(Navbar);
