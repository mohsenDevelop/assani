import React, { useEffect } from "react";
import { Grid, Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { getPosts } from "../../redux/actions/posts";


export interface IPostsProps {
    posts: Array<{ id: number, address: string, inviter: { id: number, firsName: string, lastName: string } }>;
    getPosts: () => void;
}

// tslint:disable-next-line:no-shadowed-variable
const Home = ({ getPosts, posts }: IPostsProps) => {

    const getPostFromApi = async () => {
        await getPosts();
    };

    useEffect(() => {
        getPostFromApi();
        console.log(posts);
    }, []);

    if (posts && posts.length === 0) {
        return <div>Loading ..</div>;
    }

    return (
        <main style={{ marginTop: "30px" }}>
            <Grid container={true} spacing={2} direction={"row"}>
                {posts.map(i => (
                    <Grid item={true} xs={12} md={3} key={i.id}>
                        <Card>
                            <CardHeader>
                                <Typography>
                                    دعوت کننده :
                               <br />
                                    {i.inviter.firsName}{"    "}{i.inviter.lastName}
                                </Typography>
                            </CardHeader>
                            <CardContent>
                                <Typography>
                                    آدرس : {i.address}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>


        </main>
    );
};

const mapStateToProps = state => ({
    posts: state.posts.posts
});

export default connect(mapStateToProps, { getPosts })(Home);
