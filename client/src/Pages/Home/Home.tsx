import style from './Home.module.scss';
import {FC} from 'react';
import {Grid, Row} from "../../Lib/Lib";


export const Home: FC = () => {

    return (
        <div>
            Home
            <div>
                <Grid container={true} xs={12}>
                    <Row>
                        <Box/>
                    </Row>
                </Grid>
            </div>
        </div>
    );
};

function Box() {
    return <div style={{background: 'gainsboro', width: '100%'}}>
        aaa
    </div>
}