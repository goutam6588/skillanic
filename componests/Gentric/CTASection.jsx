import { useModal } from "../../src/context/ModalContext";
import Container from "../common/layout/Container";
import Xection from "../common/layout/Xection";
import { PrimaryButton } from "../ui/PrimaryButton";
import { BodyText, HeroTitle } from "../ui/Typography";

export default function CTASection({
    title = "Upgrade your skills. Unlock new opportunities.",
    description = "Build real-world projects, improve your development skills, and get ready for modern tech opportunities with structured learning.",
    buttonText = "ENROLL NOW",
    onButtonClick,
}) {
    const { openModal } = useModal();
    return (
        <Xection className="bg-white">
            {/* <Container> */}
                <div
                    className="
                        relative
                        overflow-hidden
                        rounded-2xl
                        border
                        border-[#E5E7EB]
                        bg-white
                    "
                >
                    {/* Grid Pattern */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,61,122,0.06)_1px,transparent_1px)] bg-[size:80px_80px]" />
                        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,61,122,0.06)_1px,transparent_1px)] bg-[size:80px_80px]" />
                    </div>

                    {/* Optional Glow */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent" />

                    {/* Content */}
                    <div
                        className="
                            relative
                            z-10
                            flex
                            flex-col
                            items-center
                            text-center
                            px-6
                            py-14
                            sm:px-10
                            sm:py-16
                            md:py-20
                            lg:px-16
                            lg:py-24
                            "
                    >
                        <HeroTitle
                            className="
                                max-w-4xl
                                !text-center
                                !font-semibold
                                !text-[#0F3D7A]
                                text-3xl
                                sm:text-4xl
                                lg:text-5xl
                                leading-tight
                            "
                        >
                            {title}
                        </HeroTitle>

                        <BodyText
                            className="
                                mt-8
                                max-w-2xl
                                !text-center
                                text-sm
                                sm:text-base
                                text-[#667085]
                                leading-relaxed
                            "
                        >
                            {description}
                        </BodyText>

                        <div className="mt-8 sm:mt-10 md:mt-14 lg:mt-18">
                            <PrimaryButton onClick={onButtonClick || openModal}>
                                {buttonText}
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            {/* </Container> */}
        </Xection>
    );
}
