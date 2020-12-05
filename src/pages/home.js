import React from "react";
import { Feature, OptForm } from "../components";
import { FaqsContainer } from "../containers/faqs";
// import { JumbotronContainer } from "../containers/jumbotron";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { MapContainer } from "../containers/map";

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>
                        Let us help you make your living space, more liveable.
                    </Feature.Title>
                    <Feature.SubTitle>
                        Call or email now to get a quote.
                    </Feature.SubTitle>
                    <OptForm>
                        <OptForm.Input placeholder="Email Address" />
                        <OptForm.Button>Get a quote</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>
                            Ready to watch? Enter your email to create or
                            restart your membership.
                        </OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <MapContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    );
}
