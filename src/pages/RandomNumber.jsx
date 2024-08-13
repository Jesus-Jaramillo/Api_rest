import { Button } from "@mui/material";
import { useRandom } from "../hooks/useRandom";
import Navigates from "../routes/Navigates";

function RandomNumber() {

    const query = useRandom();

    return (
        <div>

            <div>
                <Navigates />
            </div>
            <br />
            <div className="App App-header">
                {
                    query.isFetching
                        ? (<h2>Cargando...</h2>)
                        : (<h2>Número aleatorio: {query.data} </h2>)
                }

                {
                    !query.isLoading && query.isError && (<h3>{`${query.error}`}</h3>)
                }

                <br />

                <Button onClick={() => query.refetch()} disabled={query.isFetching} variant="contained">
                    {
                        query.isFetching ? '...' : 'Nuevo número'
                    }
                </Button>

            </div>
        </div>
    )
}

export default RandomNumber;