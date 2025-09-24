interface IngredientListProps {
  ingredients: string[];
}

const IngredientList = ({ ingredients }: IngredientListProps) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h2 className="text-secondary text-xl font-bold mb-2">Ingredients</h2>
      <ul className="text-white list-disc list-inside">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;
