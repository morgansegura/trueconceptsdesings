import React from "react";
import { Link as ReachRouterLink } from "react-router-dom";
import {
    Background,
    Container,
    Logo,
    ButtonLink,
    Wrapper,
} from "./styles/header";

export default function Header({ bg = true, children, ...restProps }) {
    return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return (
        <Wrapper>
            <Container {...restProps}>{children}</Container>
        </Wrapper>
    );
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReachRouterLink to={to}>
            <Logo {...restProps} />
        </ReachRouterLink>
    );
};

Header.ButtonLink = function HeaderFrame({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
