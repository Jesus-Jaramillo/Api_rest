import { useRandom } from "../hooks/useRandom";
import Navigates from "../routes/Navigates";

function Example() {

    const query = useRandom();

    return (
        <div>

            <div>
                <Navigates />
            </div>

            <div className="App App-header">
                {
                    query.isFetching
                        ? (<h2>Cargando...</h2>)
                        : (<h2>Número aleatorio: {query.data} </h2>)
                }

                {
                    !query.isLoading && query.isError && (<h3>{`${query.error}`}</h3>)
                }

                <button onClick={() => query.refetch()} disabled={query.isFetching}>
                    {
                        query.isFetching ? '...' : 'Nuevo número'
                    }
                </button>

            </div>
        </div>
    )
}

export default Example;