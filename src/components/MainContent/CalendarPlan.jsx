export default function CalendarPlan() {

    const sample = {
        month : "July",
        day: 15,
        meals : [ 
            {
                type: "Breakfast",
                meal : "Oatmeal",
                calories: 250,
                unit: "kcal"
            },
            {
                type: "Lunch",
                meal : "Chicken salad",
                calories: 400,
                unit: "kcal"
            },
            {
                type: "Snack",
                meal : "Nuts",
                calories: 150,
                unit: "kcal"
            },
            {
                type: "Dinner",
                meal : "Salmon with Vegetables",
                calories: 550,
                unit: "kcal"
            },
        ]
    }
    return(
        <>
            <div className="heading">
                <h1 className="text-5xl font-extrabold"> Meal Calendar </h1>
            </div>
            <div className="content flex flex-col gap-5">
                <div className="date">
                    <h1 className="text-3xl font-bold"> { sample.month }, {sample.day} </h1>
                </div>
                <div className="meals flex flex-col gap-2">
                    {
                        ( sample.meals.length > 0 ) 
                        ?
                        sample.meals.map( ( meal, index ) => {
                            return(
                                <div className="meal flex flex-row items-center w-full p-2" key={index}>
                                    <div className="info flex flex-col w-5/6">
                                        <h1 className="text-xl font-bold"> { meal.type} : { meal.meal } </h1>
                                        <h2 className="text-green-800 "> { meal.calories } { meal.unit} </h2>
                                    </div>
                                    <div className="buttons flex flex-row gap-4 w-1/6">
                                        <button className="bg-green-400 font-bold px-4 py-1 rounded-lg"> Log </button>
                                        <button className="bg-yellow-400 font-bold px-4 py-1 rounded-lg"> Reshuffle </button>
                                    </div>
                                </div>
                            )
                        })
                        :
                        <div className="no-meals">
                            <h1> No meals added yet </h1>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}