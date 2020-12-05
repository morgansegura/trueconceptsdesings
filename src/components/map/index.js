import React from "react";
import { Container, Inner, Title, SubTitle, Text, Marker } from "./styles/map";

export default function Map({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    );
}

Map.Title = function MapTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};
Map.SubTitle = function MapSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
};
Map.Text = function MapText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};
Map.Marker = function MapMarker({ ...restProps }) {
    return <Marker {...restProps} />;
};
