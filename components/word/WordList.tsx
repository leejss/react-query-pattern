import { useWordsQuery } from "./wordQuery";

const WordList = () => {
  const wordQuery = useWordsQuery();
  if (wordQuery.status === "loading") {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      {wordQuery.data.length === 0 && <h1>No data</h1>}
      {wordQuery.data.map((d: any) => (
        <li key={d.id}>{d.text}</li>
      ))}
    </div>
  );
};

export default WordList;
