import styled from "styled-components";

export const ProfileCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #bdbaba;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    padding:15px;

`

export const UserInfo = styled.div`
     display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    
    img{
        max-width: 100px;
    }
`

export const UserStatsList = styled.ul`
    display: flex;
    gap: 5px;

    li{
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 5px;
    }

`