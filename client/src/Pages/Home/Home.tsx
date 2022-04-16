import {FC} from 'react';
import {Grid} from "../../Lib/Lib";

export const Home: FC = () => {

    return (
        <div>
            Home
            <div>
                <Grid container spacing={'sm'} xs={12}>
                    {new Array(4).fill('').map(() => <Grid xs={12} md={4} lg={2} sm={6} item>
                        <Box/>
                    </Grid>)}
                </Grid>
            </div>
        </div>
    );
};

function Box() {
    return <div style={{background: 'gainsboro', width: '100%'}}>
        {' aaa '}
    </div>
}