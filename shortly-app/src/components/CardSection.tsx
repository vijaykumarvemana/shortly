import ShortenLink from "./ShortenLink";
import StatisticsCards from "./StatisticsCards";

function CardSection() {
  const links = localStorage.getItem("shortlinks");
  return (
    <>
      <div className="bg-light">
        <div className="container py-5 g-0">
          <div className="py-5 shorten-likns">
            {JSON.parse(links || "[]").map(
              (link:{}) => {
                return (
                  <>
                    <ShortenLink {...link}/> <pre></pre>
                  </>
                );
              }
            )}
            <h2 className="pb-2 mt-5 text-center fw-bold ">Advanced Statistics</h2>
            <p className="text-center card-section-title">
              Track how your links are performing across the web with
            </p>
            <p className="text-center card-section-title">our advanced statistics dashboard.</p>
          </div>
          <StatisticsCards />
        </div>
      </div>
    </>
  );
}

export default CardSection;
