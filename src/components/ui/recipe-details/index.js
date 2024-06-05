
import Link from "next/link";

export default function RecipeDetailsItem({ getRecipeDetails }) {
  return (
    <div className="">
      <Link href={"/recipe-list"}>Go to recipe list</Link>
      <div className="flex gap-10 my-10">
      <div>
      <img
              src={getRecipeDetails?.image}
              name={getRecipeDetails?.name}
              className="w-4/5 rounded object-cover h-full w-80"
            />
      </div>
      <div>
            <h2 className="text-3xl font-extrabold text-gray-950">
              {getRecipeDetails?.name}
            </h2>
            <div className="gap-4 mt-5">
              <p className="text-2xl text-gray-700">
                {getRecipeDetails?.mealType[0]}
              </p>
            </div>
            <div className="mt-5">
              <p className="text-xl text-gray-800">
                {getRecipeDetails?.cuisine}
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-bold text-gray-700">Ingredients</h3>
              <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
                {getRecipeDetails?.ingredients.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
      </div>
        </div>
      
  
  );
}
