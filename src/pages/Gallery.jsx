import Container from "../../componests/common/layout/Container";
import Xection from "../../componests/common/layout/Xection";
import { Footer } from "../../componests/Footer";
import { Gallery1 } from "../../componests/Gallery/Gallery1";
import CTASection from "../../componests/Gentric/CTASection";
import { Navigation } from "../../componests/navigation";
import { GALLERY_CTA_DEFAULTS } from "../content/fallback/galleryContent";
import { useSanityContent } from "../hooks/useSanityContent";
import SEO from "../../componests/SEO";

export default function Gallery() {
  const { value: cta } = useSanityContent(
    "galleryPage.cta",
    GALLERY_CTA_DEFAULTS,
  );

  return (
    <>
    <SEO
  title="Skillanic Gallery | IT Training & Student Activities in Bangalore"
  description="Explore the Skillanic gallery featuring student activities, IT training sessions, events, team moments and learning experiences at our Bangalore training institute."
  canonical="/gallery"
/>
    <div className="antialiased overflow-hidden ">
      <Navigation />
      <Xection
        spacing="none"
        className="
        relative overflow-hidden
      "
      >
        <Gallery1 />
        <Container>
          <CTASection
            title={cta.title}
            description={cta.description}
            buttonText={cta.buttonText}
          />
        </Container>
      </Xection>
      <Footer />
    </div>
    </>
  );
}
