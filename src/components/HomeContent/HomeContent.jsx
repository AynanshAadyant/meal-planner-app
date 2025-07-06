import React from "react";
import AuthButtons from "../AuthButtons/AuthButtons";
import FeatureCard from "../Cards/FeatureCard";

export default function HomeContent() {

    const featuers = [ 
        {
            heading: "BMR & BMI Calculation",
            description: "Calculate Basal Metabolic Rate (BMR) and Body Mass Index (BMI) to understand your daily calorie needs."
        },
        {
            heading: "Personalized Monthly Meal Plans",
            description: "Recieve customized meal plans tailored to your dietary preferences and fitness objectives."
        },
        {
            heading: "Auto-generated Grocery/Ration List",
            description: "Generate a complete grocery list based on your monthly meal plan, making shopping effortless."
        },
        {
            heading: "Goal-Based Diet Suggestions",
            description: "Get diet recommendations for weight loss, weight gain or weight maintenance, aligned with your personal goals."
        }
    ]

    const how = [
        {
            heading: "Enter your details",
            description: "Provide your personal information including age, weight, height and fitness goals"
        },
        {
            heading: "Get Your Monthly Plans",
            description: "Recieve a personalized monthly meal plan tailored to your needs and preferences"
        },
        {
            heading: "Follow Your Meals & Ration List",
            description: "Follow your meal plan and use the auto-generated grocery list to stay on track"
        }
    ]
    return( 
        <>
            <div className="hero flex flex-row gap-5">
                <img src="https://github.com/AynanshAadyant/meal-planner-app/blob/main/public/hero-section.jpg" alt="hero-section" className="rounded-xl h-auto w-1/2" />
                <div className="hero-section-text flex flex-col gap-5">
                    <h1 className="text-6xl font-extrabold"> Your Fitness, Your Food, Your Future </h1>
                    <h2 className="text-xl font-bold "> Personalised meal schedules, nutrient tracking, and monthly grocery plans - all in one place </h2>
                    <AuthButtons />
                </div>
            </div>
            <div className="features flex flex-col gap-5">
                <div className="header flex flex-col gap-4">
                    <h1 className="text-5xl font-extrabold"> Empowering Your Health Journey </h1>
                    <h2 className="text-xl font-bold pr-50"> Discover how NutriPlan can help you achieve your fitness and nutrition goals with our comprehensive features.</h2>
                </div>
                <div className="feature-cards flex flex-row gap-2">
                    {
                        featuers.map( ( feature, index) => <FeatureCard content={feature} frequency={4} key={index}/>)
                    }
                </div>
            </div>
            <div className="how-it-works flex flex-col gap-5">
                <div className="header flex flex-col gap-4">
                    <h1 className="text-5xl font-extrabold"> Simple Steps to a healthier you</h1>
                    <h2 className="text-xl font-bold "> Follow these easy steps to start your journey with NutriPlan and achieve your health goals. </h2>
                </div>
                <div className="cards flex flex-row gap-2"> 
                    {
                        how.map( ( how, index ) => <FeatureCard content={how} frequency={3} key={index}/>)
                    }
                </div>
            </div>
            <div className="transformation flex flex-col justify-center items-center gap-4">
                <h1 className="text-5xl font-extrabold items-center"> Start your transformation now </h1>
                <div className="join bg-green-400 rounded-lg px-4 py-2">
                    <h1 className="text-xl font-bold"> Join Now </h1>
                </div>
            </div>
        </>
    )
}