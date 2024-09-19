// import React from 'react'
import styles, { layout } from "../../../Style";
import { features } from "../constants";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
    <div className={'flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card'}>
        <div className={"w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue"}>
            <img src={icon} alt="" className="w-[50%] h-[50%] object-contain mt-4 ml-4  " />
        </div>
        <div className="flex-1 flex flex-col ml-3 ">
            <h4 className=" font-poppins text-[49px] leading-[45px] mb-1 text-white">
                {title}
            </h4>
            <p className=" font-poppins text-[15px] mb-1 text-dimWhite">
                {content}
            </p>
        </div>
    </div >
);
const Business = () => {
    return (
        <section id="feature" className={layout.section}>
            <div className='{layout.sectionInfo} text-white' >
                <h2 className={`${styles.heading2} text-[50px]`}> You do the business <br className="sm:block hidden" /> we'll
                    handle the money.
                </h2>
                <p className={'${styles.paragraph}  max-w-[470px] mt-5 '}>
                    With the right credit card,you can imporve you financial life by building credit
                </p>
                <Button styles='mt-10' />
            </div>
            <div className={`${layout.sectionImg} flex-col`}>
                {features.map((feature, index) => (
                    <FeatureCard key={feature.id} {...feature} index={index} />
                ))}
            </div>
        </section>
    )
}

export default Business
