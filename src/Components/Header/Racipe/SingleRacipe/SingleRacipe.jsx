const SingleRacipe = ({data}) => {
    const {idCategory,strCategory,strCategoryThumb,strCategoryDescription}=data
    return (
        <div className="mb-2 -z-1 ">
           <div className="card bg-lime-200 w-full shadow-lg shadow-gray-600/100  h-full">
  <figure>
    <img className="w-full"
      src={strCategoryThumb}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{strCategory}</h2>
    <p>{strCategoryDescription}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleRacipe;