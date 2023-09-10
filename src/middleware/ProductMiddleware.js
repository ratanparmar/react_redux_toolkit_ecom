// import {useDispatch} from 'react-redux'
// eslint-disable-next-line
// import {fetchProducts} from '../store/ProductSlice'

// export const getProductFromMiddleware= ()=>{
//     console.log("HI")
//     return (dispatch,getState)=>{
//             const data = fetch('https://fakestoreapi.com/products')
//             const result = data.json();
//             console.log(result)
//             fetchProducts(result)
//         }
// }
export function getProductFromMiddleware() {  
    console.log("HIII")  
    // var client = window.AmeyoClient.init();
    return (dispatch, getState)=>{
        console.log("YO")
        const data = fetch('https://fakestoreapi.com/products')
            const result = data.json();
            console.log(result)
        // eslint-disable-next-line
        var finalData = ""
    //     client.globalData.get("loggedInUser").then(function(responseLoginData) {        
    //         dispatch(setUserLoginData(responseLoginData));
    //         client.globalData.get("selectedCampaigns").then(function(responseCampaignData) {  
    //             dispatch(setAgentCampaignData(responseCampaignData))                
    //             dispatch(dataCombine())                
    //             dispatch(getAgentCallData())
    //             dispatch(getAgentBreakStats())                
    //             // dispatch(userSessionData())                
    //         }).catch(function(error) {
    //             console.log("selectedCampaigns errors is",error);
    //         });
    //     }).catch(function(error) {
    //         console.log("loggedInUser error is",error);
    // });
  }
}