import {FC} from 'react';
import {Grid} from "../../Lib/Lib";

export const Home: FC = () => {

    return (
        <div>
            Home
            <div>
                <Grid container spacing={'sm'} xs={12}>
                    {new Array(12).fill('').map(() => <Grid xs={1}>
                        <Box/>
                    </Grid>)

                    }


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