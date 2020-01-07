import React, { useEffect } from 'react'
import { StyledP } from './styled-components/StyledCommon'
//imported service
import { UserService } from './services/UserService';
function App() {
    // useEffect(() => {
    //     async function doApiCall() {
    //         const postbody = {
    //             name: 'something',
    //             password: 'password'
    //         }
    //         try {
    //             const result = await UserService.login(postbody);
    //             //success data comes here
    //             console.log(result);
    //         } catch (error) {
    //             //all errors comes here
    //         }
    //     }
    //     //calling api function
    //     doApiCall();
    // }, [])
    return (
        <div>
            <StyledP>App JS</StyledP>
        </div>
    )
}

export default App