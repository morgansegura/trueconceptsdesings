import styled from "styled-components";
import { Link as ReachRouterLink } from "react-router-dom";

export const Background = styled.section`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    background: url(${({ src }) =>
            src ? `../images/misc/${src}.jpg` : "../images/misc/room1.jpg"})
        top left / cover no-repeat;

    &:before {
        content: "";
        position: absolute;
        z-index: -1;
        height: 100%;
        width: 100%;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.25);
    }

    @media (max-width: 1100px) {
        ${({ dontShowOnSmallViewPort }) =>
            dontShowOnSmallViewPort && `background: none;`}
    }
`;

export const Wrapper = styled.div`
    position: relative;
    z-index: 3;
    position: fixed;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.5);
`;

export const Container = styled.div`
    display: flex;
    margin: 0 56px;
    height: 64px;
    padding: 0.25rem 0;
    justify-content: space-between;
    align-items: center;

    a {
        display: flex;
    }

    @media (max-width: 1000px) {
        margin: 0 30px;
    }
`;

export const Link = styled.p`
    color: #fff;
    text-decoration: none;
    margin-right: 30px;
    font-weight: ${({ active }) => (active === "true" ? "700" : "normal")};
    cursor: pointer;

    &:hover {
        font-weight: bold;
    }
    &:last-of-type {
        margin-right: 0;
    }
`;

export const ButtonLink = styled(ReachRouterLink)`
    display: block;
    background-color: #ed8620;
    width: 84px;
    height: fit-content;
    color: white;
    border: 0;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;
    transition: background-color 0.3s ease-out;

    &:hover {
        background-color: #e87400;
    }
`;

export const Logo = styled.img`
    /* height: 32px; */
    width: 130px;
    margin-right: 40px;

    @media (min-width: 1449px) {
        height: 45px;
        width: 167px;
    }
`;
