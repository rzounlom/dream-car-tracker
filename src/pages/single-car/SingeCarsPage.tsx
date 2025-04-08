import "./SingleCarPage.css";

import { useFetcher, useLoaderData } from "react-router-dom";

import { MoonLoader } from "react-spinners";
import SingleCarCard from "../../components/cars/SingleCarCard";

const SingleCarPage = () => {
  const fetcher = useFetcher();
  const loading = fetcher.state === "loading";
  const { car } = useLoaderData();

  return (
    <div className="single-car-page">
      <MoonLoader
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <SingleCarCard car={car} />
    </div>
  );
};

export default SingleCarPage;
