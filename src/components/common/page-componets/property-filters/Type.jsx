import { propertyTypes } from "../../../../data/dummyData";

const Type = () => {
  return (
    <div className="p-3 mt-8 border dark:border-dark">
      <h1 className="font-semibold">Property Type</h1>
      {propertyTypes.map(({ id, name, number }) => (
        <div key={id} className="mt-3 filter flex-center-between">
          <div className="input-radio">
            <input type="radio" name="type" id={name} />
            <label htmlFor={name} className="capitalize">
              {name}
            </label>
          </div>
          <p>({number})</p>
        </div>
      ))}
    </div>
  );
};

export default Type;
