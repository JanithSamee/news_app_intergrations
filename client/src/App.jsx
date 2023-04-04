import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import NewsCard from "./components/NewsCard";
import "./styles/index.scss";
import { getNews } from "./utils/api";

function App() {
    const [newsList, setnewsList] = useState([]);
    const [error, seterror] = useState("");
    const [searchText, setsearchText] = useState("");
    const [submit, setsubmit] = useState("web development");

    const [isLoading, setisLoading] = useState(false);

    useEffect(() => {
        async function getData() {
            setisLoading(true);
            const res = await getNews(submit);
            setisLoading(false);
            if (res.error) {
                seterror(res.data);
            } else {
                setnewsList(res.data);
            }
        }

        getData();
    }, [submit]);

    return (
        <>
            {isLoading && <Loader></Loader>}
            <Navbar></Navbar>
            <div className="m-4 ">
                <label for="validationDefault01" className="form-label">
                    Search News
                </label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    onChange={(e) => setsearchText(e.target.value)}
                />
                <button
                    className="btn btn-primary mt-2"
                    onClick={() => setsubmit(searchText)}
                >
                    search
                </button>
            </div>
            {error && <div className="alert alert-danger m-4">{error}</div>}
            <div className="div-center">
                {newsList &&
                    newsList.map((element) => (
                        <NewsCard
                            newsDescription={element.description}
                            newsTitle={element.title}
                            imageURL={element.urlToImage}
                            url={element.url}
                        ></NewsCard>
                    ))}
            </div>
        </>
    );
}

export default App;
